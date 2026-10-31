import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getExplorerModel,
  initialValues,
  normalizeValues,
  equationSolution,
  diceOutcomes,
  compoundPrice,
} from '../src/services/explorer.service';
import { tools, getLessons, filterLessons } from '../src/services/content.service';
import { validateSubmission } from '../src/services/validation.service';
import { emptyDraft } from '../src/types/submission';
test('retangulo: area maxima e simetria para perimetro fixo', () => {
  for (const p of [12, 20, 24]) {
    for (let a = 0.5; a < p / 2; a += 0.5) {
      const b = p / 2 - a;
      assert.ok(a * b <= (p / 4) ** 2 + 1e-10);
      assert.equal(a * b, b * a);
    }
    const m = getExplorerModel('area', { a: p / 4 }, { perimeter: p });
    assert.ok(m.insight.includes('máxima'));
  }
});
test('variacoes percentuais compostas, nao soma de taxas', () => {
  assert.equal(compoundPrice(50, 20, 20).final, 48);
  assert.equal(compoundPrice(80, 25, 20).final, 80);
  assert.equal(compoundPrice(50, 20, 100).final, 0);
});
test('equacoes: a solucao torna os membros iguais', () => {
  for (let a = 1; a <= 6; a++)
    for (const b of [-10, 0, 4, 10])
      for (const c of [-12, 0, 12, 24])
        assert.ok(Math.abs(a * equationSolution(a, b, c) + b - c) < 1e-10);
});
test('dados: todos os 36 resultados, distribuicao correta', () => {
  assert.equal(diceOutcomes(7).length, 6);
  assert.equal(diceOutcomes(2).length, 1);
  assert.equal(
    Array.from({ length: 11 }, (_, i) => diceOutcomes(i + 2).length).reduce((a, b) => a + b, 0),
    36,
  );
});
test('fracao: denominador nunca zero, numerador limitado', () => {
  const v = normalizeValues('fractions', { d: 0, n: 8 });
  assert.equal(v.d, 1);
  assert.equal(v.n, 1);
  const reduced = normalizeValues('fractions', { d: 3, n: 8 });
  assert.equal(reduced.n, 3);
});
test('todas as experiencias geram modelos finitos nos extremos', () => {
  for (const tool of tools) {
    const first = getExplorerModel(tool.kind, initialValues(tool.kind));
    for (const control of first.controls) {
      for (const value of [control.min, control.max]) {
        const m = getExplorerModel(tool.kind, { ...first.values, [control.key]: value });
        assert.ok(m.shapes.length > 0);
        assert.ok(!JSON.stringify(m).includes('NaN'));
        assert.ok(!JSON.stringify(m).includes('Infinity'));
      }
    }
  }
});
test('aulas possuem slugs unicos, imagens e resolucao', () => {
  const lessons = getLessons();
  assert.equal(new Set(lessons.map((l) => l.slug)).size, lessons.length);
  for (const l of lessons) {
    assert.ok(l.steps.length >= 4);
    assert.ok(tools.some((t) => t.kind === l.tool));
  }
  assert.equal(filterLessons(lessons, 'espaco', 'Todos', 'Todos').length, 1);
});
test('formulario: contacto exige email; duvida permite anonimato', () => {
  const d = { ...emptyDraft, message: 'Tenho uma dúvida no segundo passo.', consent: true };
  assert.deepEqual(validateSubmission(d, 'question'), {});
  assert.ok(validateSubmission(d, 'lesson').email);
  assert.ok(validateSubmission({ ...d, consent: false }, 'question').consent);
  assert.ok(validateSubmission({ ...d, message: 'x'.repeat(2001) }, 'question').message);
});

test('reta, trigonometria e derivada mostram os casos de referência', () => {
  assert.equal(getExplorerModel('numberline', { start: 2, jump: -5 }).metrics[2].value, '-3');
  const trig = getExplorerModel('trigonometry', { angle: 90 });
  assert.equal(trig.metrics[0].value, '0');
  assert.equal(trig.metrics[1].value, '1');
  const d = getExplorerModel('derivative', { x: 2, h: 0.1 });
  assert.equal(d.metrics[1].value, '4');
  assert.equal(d.metrics[0].value, '4,1');
});
