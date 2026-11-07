import type { CombinatoricsLabId } from '@/types/discovery';
import type { LabState, LabModel, LabControl, LabGrid, LabCell, CellKind } from '@/types/combinatorics';
const range = (n: number) => Array.from({ length: n }, (_, i) => i);
const strings = (values: (string | number)[]) => values.map(String);
const options = (values: (string | number)[]) => values.map(value => ({ value: String(value), label: String(value) }));
const modes = [
  { value: 'all', label: 'Todos os pares ordenados' },
  { value: 'distinct', label: 'Ordenados, entradas distintas' },
  { value: 'unorderedDistinct', label: 'Sem ordem, entradas distintas' },
  { value: 'unordered', label: 'Sem ordem, permitindo iguais' },
];
export const cellLabels: Record<CellKind, string> = {
  valid: 'Contado', excluded: 'Proibido', equivalent: 'Representação excedente',
  diagonal: 'Diagonal: x = y', paired: 'Contado; tem inverso', single: 'Contado; sem inverso',
};
export function initialLabState(id: CombinatoricsLabId, initial: Partial<LabState> = {}): LabState {
  return normalizeLabState(id, { mode: 'all', preset: 0, row: '', selected: [], layer: 0,
    n: id === 7 ? 5 : 3, r: id === 7 ? 3 : 1, bits: [0, 0, 0, 0], ...initial });
}
export function normalizeLabState(id: CombinatoricsLabId, state: LabState): LabState {
  const minimum = id === 9 ? 0 : 3;
  const n = Math.max(minimum, Math.min(id === 8 ? 4 : 7, Math.round(state.n)));
  const layerCount = id === 5 && state.mode === 'distinct' ? 2 : 3;
  return { ...state, n, r: Math.max(0, Math.min(n, Math.round(state.r))),
    layer: Math.max(0, Math.min(layerCount - 1, state.layer)),
    preset: Math.max(0, Math.min(4, state.preset)),
    bits: range(4).map(i => state.bits[i] ? 1 : 0) };
}
function grid(title: string, rows: string[], cols: string[], build: (a: string, b: string) => Omit<LabCell, 'key'>): LabGrid {
  return { title, rows, cols, cells: rows.flatMap(a => cols.map(b => ({ key: `${a}:${b}`, ...build(a, b) }))) };
}
const count = (cells: LabCell[]) => cells.filter(c => c.kind !== 'excluded' && c.kind !== 'equivalent').length;
const factorial = (n: number): number => range(n).reduce((total, i) => total * (i + 1), 1);
const permute = (values: number[]): number[][] => values.length === 0 ? [[]] : values.flatMap((v, i) => permute(values.filter((_, j) => i !== j)).map(rest => [v, ...rest]));
const words = (n: number): string[] => n === 0 ? [''] : range(2 ** n).map(i => i.toString(2).padStart(n, '0'));
const ones = (word: string) => [...word].filter(x => x === '1').length;
// Recurrence rather than a factorial formula: the table grows from the two cases.
export function pascalRows(n: number): number[][] {
  const rows: number[][] = [[1]];
  for (let i = 1; i <= n; i++) rows.push(range(i + 1).map(j => (rows[i - 1][j - 1] ?? 0) + (rows[i - 1][j] ?? 0)));
  return rows;
}
export function getCombinatoricsModel(id: CombinatoricsLabId, state: LabState): LabModel {
  const s = normalizeLabState(id, state);
  const model: LabModel = { id, context: '', controls: [], grids: [], stats: [], note: '' };
  const control = (key: LabControl['key'], label: string, choices: LabControl['options']) => model.controls.push({ key, label, options: choices, value: String(s[key]) });
  const stat = (label: string, value: string | number) => model.stats.push({ label, value });
  const mode = (choices = modes) => control('mode', 'O que queremos contar?', choices);
  const cell = (coordinates: string[], kind: CellKind = 'valid', highlighted = false): Omit<LabCell, 'key'> => ({ label: `(${coordinates.join(', ')})`, coordinates, kind, highlighted });
  if (id === 1 || id === 2) {
    const A = ['a', 'b', 'c'], B = ['1', '2', '3', '4'];
    model.context = 'A = {a, b, c} · B = {1, 2, 3, 4}. Linhas: primeira entrada; colunas: segunda entrada.';
    if (id === 2) mode([{ value: 'all', label: 'Sem restrições' }, { value: 'distinct', label: 'Aplicar a condição' }]);
    control('row', 'Fixar a primeira entrada', [{ value: '', label: 'Todas as linhas' }, ...options(A)]);
    const valid = (a: string, b: string) => id === 1 || s.mode === 'all' || (a === 'c' ? Number(b) > 1 : Number(b) % 2 === 0);
    const table = grid('Cada célula é um par ordenado', A, B, (a, b) => cell([a, b], valid(a, b) ? 'valid' : 'excluded', a === s.row));
    model.grids = [table];
    for (const a of A) stat(`Linha ${a}`, B.filter(b => valid(a, b)).length);
    stat('Total de pares aceites', count(table.cells));
    if (id === 2) { stat('Casos a ou b', table.cells.filter(c => c.coordinates[0] !== 'c' && c.kind === 'valid').length); stat('Pares proibidos', 12 - count(table.cells)); }
    model.note = id === 1 ? 'Seleciona uma célula para fixar a sua linha. Cada par ocupa uma única célula.' : 'Condição: nas linhas a e b, a segunda entrada deve ser par; na linha c, deve ser maior do que 1.';
  }
  if (id === 3 || id === 4) {
    const presets = [
      { A: [1, 2, 3], B: [2, 3, 4], name: 'Dois elementos comuns' },
      { A: [1, 2, 3, 4], B: [2, 3, 4, 5], name: 'Controlo: três elementos comuns' },
      { A: [1, 3], B: [2, 3], name: 'Inverso ausente' },
      { A: [1, 2], B: [3, 4], name: 'Conjuntos disjuntos' },
      { A: [1, 2, 3], B: [1, 2, 3], name: 'Conjuntos iguais' },
    ];
    const p = presets[id === 3 ? 4 : s.preset], A = strings(p.A), B = strings(p.B);
    if (id === 4) control('preset', 'Conjuntos', presets.map((p, i) => ({ value: String(i), label: p.name })));
    mode();
    const unordered = s.mode.startsWith('unordered'), distinct = s.mode === 'distinct' || s.mode === 'unorderedDistinct';
    const seen = new Set<string>();
    const table = grid('Seleciona um par para procurar o seu inverso', A, B, (a, b) => {
      const diag = a === b, inverse = A.includes(b) && B.includes(a);
      const key = [a, b].sort().join(':');
      let kind: CellKind = diag ? 'diagonal' : inverse ? 'paired' : 'single';
      if (distinct && diag) kind = 'excluded';
      else if (unordered && seen.has(key)) kind = 'equivalent';
      if (kind !== 'excluded') seen.add(key);
      const selected = s.selected;
      return cell([a, b], kind, selected.length === 2 && ((a === selected[0] && b === selected[1]) || (a === selected[1] && b === selected[0])));
    });
    model.context = `A = {${A.join(', ')}} · B = {${B.join(', ')}}. A cor acompanha o papel da representação; o rótulo explica-o.`;
    model.grids = [table];
    stat('Pares no produto', A.length * B.length);
    if (id === 4) { stat('n: elementos de A', A.length); stat('m: elementos de B', B.length); stat('k: elementos comuns', A.filter(x => B.includes(x)).length); }
    stat(unordered ? 'Objetos sem ordem' : 'Pares aceites', count(table.cells));
    stat('Proibidos', table.cells.filter(c => c.kind === 'excluded').length);
    stat('Representações excedentes', table.cells.filter(c => c.kind === 'equivalent').length);
    if (s.selected.length === 2) {
      const [a, b] = s.selected;
      model.selection = a === b ? `(${a}, ${b}) coincide com o seu inverso: é um ponto fixo.` : A.includes(b) && B.includes(a) ? `(${a}, ${b}) e (${b}, ${a}) estão no mesmo produto. São dois pares diferentes; sem ordem, representam uma escolha.` : `O inverso (${b}, ${a}) não pertence a este produto. Não podemos eliminar (${a}, ${b}) como representação repetida.`;
    }
    model.note = 'Os pares proibidos não entram na contagem. Uma representação excedente continua a representar um objeto contado noutra célula. A diagonal é x = y, independentemente da posição visual.';
  }
  if (id === 5 || id === 6) {
    mode([{ value: 'all', label: 'Sem restrições' }, { value: 'distinct', label: 'Três entradas distintas' }]);
    const restricted = s.mode === 'distinct';
    const A = id === 6 ? ['1', '2', '3'] : restricted ? ['1', '2'] : ['a', 'b'];
    const B = ['1', '2', '3'];
    const C = id === 6 ? ['1', '2', '3'] : restricted ? ['1', '3'] : ['u', 'v', 'w'];
    control('layer', 'Fixar a terceira entrada', C.map((z, i) => ({ value: String(i), label: `z = ${z}` })));
    const tables = C.map(z => grid(`Camada z = ${z}`, A, B, (a, b) => cell([a, b, z], !restricted || new Set([a, b, z]).size === 3 ? 'valid' : 'excluded', s.selected.join(':') === [a, b, z].join(':'))));
    model.context = `A = {${A.join(', ')}} · B = {${B.join(', ')}} · C = {${C.join(', ')}}.`;
    model.grids = [tables[s.layer]];
    tables.forEach((t, i) => stat(`Camada ${C[i]}`, count(t.cells)));
    stat('Total de triplos aceites', tables.reduce((total, t) => total + count(t.cells), 0));
    model.note = 'Muda de camada e compara as contagens. A terceira coordenada está fixa; as outras duas continuam a ser escolhidas na tabela.';
  }
  if (id === 7) {
    control('n', 'Elementos disponíveis (n)', options([3, 4, 5, 6, 7]));
    control('r', 'Posições a preencher (r)', options(range(s.n + 1)));
    const factors = range(s.r).map(i => s.n - i), ordered = factors.reduce((a, b) => a * b, 1);
    model.context = 'Escolhe entradas distintas. Cada posição ocupada retira uma opção às posições seguintes.';
    model.factors = factors; model.permutations = s.r <= 4 ? permute(range(s.r).map(i => i + 1)) : [];
    stat('Sequências ordenadas', ordered); stat('Ordenações de uma escolha fixa', factorial(s.r)); stat('Escolhas sem ordem', ordered / factorial(s.r));
    model.note = s.r === 0 ? 'Sem posições a preencher, há uma sequência vazia: (). O produto sem fatores vale 1.' : `A escolha fixa é {${range(s.r).map(i => i + 1).join(', ')}}. ${s.r > 4 ? 'Para não desenhar centenas de sequências, escolhe r ≤ 4 para listar todas as ordenações.' : 'Cada sequência abaixo usa exatamente esses elementos.'}`;
  }
  if (id === 8) {
    mode([{ value: 'all', label: '1. Subconjuntos representados por triplos' }, { value: 'bits', label: '2. Uma posição fixa por elemento' }]);
    if (s.mode !== 'bits') {
      const A = ['a', 'b', 'c'];
      control('layer', 'Fixar a terceira entrada', A.map((z, i) => ({ value: String(i), label: `z = ${z}` })));
      const support = (tuple: string[]) => [...new Set(tuple)].sort().join(', ');
      const layers = A.map(z => new Set(A.flatMap(a => A.map(b => support([a, b, z])))));
      const seenBefore = new Set(layers.slice(0, s.layer).flatMap(layer => [...layer]));
      const seenHere = new Set<string>();
      const z = A[s.layer];
      model.context = 'A = {a, b, c}. Cada triplo representa o subconjunto dos elementos que aparecem nele. Primeiro percorremos a camada a, depois b e depois c.';
      model.grids = [grid(`Terceira entrada = ${z}`, A, A, (a, b) => {
        const key = support([a, b, z]);
        const repeated = seenHere.has(key); seenHere.add(key);
        return { ...cell([a, b, z], repeated ? 'equivalent' : 'valid', s.selected.join(':') === [a, b, z].join(':')), detail: `representa {${key}}` };
      })];
      stat('Subconjuntos nesta camada', layers[s.layer].size);
      stat('Novos face às camadas anteriores', [...layers[s.layer]].filter(key => !seenBefore.has(key)).length);
      stat('Distintos acumulados', new Set([...seenBefore, ...layers[s.layer]]).size);
      model.note = '«Excedente» aqui significa repetido dentro da camada atual. O contador de novidades compara também com as camadas anteriores. Nenhum triplo representa o subconjunto vazio. Depois de percorrer as camadas, muda para a segunda representação.';
    } else {
      control('n', 'Elementos do conjunto', options([3, 4]));
      const labels = ['a', 'b', 'c', 'd'].slice(0, s.n), selected = labels.filter((_, i) => s.bits[i]);
      model.bits = labels.map((label, i) => ({ label, value: s.bits[i] }));
      model.context = '«Talvez possamos usar 0 e 1 como uma representação mais geral dos conjuntos.» Cada posição pertence a um elemento fixo: 1 inclui; 0 exclui. Toca nos cartões.';
      stat('Vetor de pertença', s.bits.slice(0, s.n).join(' ')); stat('Subconjunto', selected.length ? `{${selected.join(', ')}}` : '∅'); stat('Soma das coordenadas', selected.length);
      model.note = 'O vetor descreve a pertença ao subconjunto. Os seus bits não são códigos dos nomes a, b, c ou d. Desliga todos os cartões: agora o vazio também tem uma representação.';
    }
  }
  if (id === 9) {
    control('n', 'Comprimento do vetor (n)', options(range(8)));
    control('r', 'Exatamente quantos uns? (r)', options(range(s.n + 1)));
    const all = words(s.n), valid = all.filter(w => ones(w) === s.r);
    model.context = `Procuramos palavras de ${s.n} bits com exatamente ${s.r} uns. Cada palavra corresponde a um subconjunto com ${s.r} elementos.`;
    if (s.n === 3 || s.n === 4) {
      const prefixes = s.n === 3 ? ['0', '1'] : ['00', '01', '10', '11'];
      model.grids = prefixes.map(prefix => grid(`Primeiro bit = ${prefix[0]}${s.n === 4 ? ` · segundo bit = ${prefix[1]}` : ''}`, ['0', '1'], ['0', '1'], (a, b) => {
        const word = prefix + a + b;
        return { label: word, coordinates: [...word], kind: ones(word) === s.r ? 'valid' : 'excluded', highlighted: s.selected.join('') === word };
      }));
      model.note = s.n === 3 ? 'Duas tabelas 2 × 2: linhas = segundo bit, colunas = terceiro bit. O primeiro bit identifica a camada.' : 'Cada camada do primeiro bit contém dois planos 2 × 2, um para cada segundo bit. Linhas = terceiro bit; colunas = quarto bit. São 16 palavras ao todo.';
    } else {
      model.binaryGroups = s.n === 0 ? [{ title: 'A palavra vazia', words: ['()'] }] : ['0', '1'].map(bit => ({ title: `Primeiro bit = ${bit}`, words: valid.filter(w => w[0] === bit) }));
      model.note = s.n === 0 ? 'Não há primeira coordenada para fixar. Existe apenas a palavra vazia, que tem zero uns.' : 'Aqui listamos apenas as palavras aceites. Uma camada sem palavras contribui com zero.';
    }
    if (s.n > 0) { stat('Primeiro bit 0', valid.filter(w => w[0] === '0').length); stat('Primeiro bit 1', valid.filter(w => w[0] === '1').length); }
    stat(`T(${s.n}, ${s.r})`, valid.length);
    model.pascal = pascalRows(7);
  }
  return model;
}
