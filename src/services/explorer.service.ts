import type { ToolConfig, ToolKind } from '@/types/content';
import type { ExplorerModel, Shape, SliderControl } from '@/types/explorer';
const green = '#3a7c54',
  lime = '#d4eaa3',
  purple = '#b4a0df',
  ink = '#234735',
  muted = '#778779';
export const fmt = (n: number, digits = 2) =>
  new Intl.NumberFormat('pt-PT', { maximumFractionDigits: digits }).format(n);
const control = (
  key: string,
  label: string,
  min: number,
  max: number,
  step = 1,
  unit = '',
): SliderControl => ({ key, label, min, max, step, unit });
const defaults: Record<ToolKind, Record<string, number>> = {
  numberline: { start: 2, jump: 3 },
  trigonometry: { angle: 45 },
  derivative: { x: 1, h: 1 },
  area: { a: 3 },
  volume: { width: 4, depth: 3, height: 5 },
  fractions: { n: 3, d: 8 },
  ratio: { a: 2, b: 3, k: 2 },
  percent: { price: 50, up: 20, down: 20 },
  equation: { a: 2, b: 4, c: 12, x: 2 },
  function: { m: 1, b: 1, x: 2 },
  probability: { sum: 7 },
  pythagoras: { a: 3, b: 4 },
  motion: { v: 3, t: 5 },
};
export function initialValues(kind: ToolKind, config: ToolConfig = {}): Record<string, number> {
  return { ...defaults[kind], ...config.initial };
}
export function getControls(
  kind: ToolKind,
  v: Record<string, number>,
  config: ToolConfig = {},
): SliderControl[] {
  switch (kind) {
    case 'numberline':
      return [
        control('start', 'Ponto de partida', -10, 10),
        control('jump', 'Quanto somar', -10, 10),
      ];
    case 'trigonometry':
      return [control('angle', 'Ângulo', 0, 360, 15, '°')];
    case 'derivative':
      return [control('x', 'Ponto x', -3, 3, 0.5), control('h', 'Variação h', 0.05, 1, 0.05)];
    case 'area': {
      const half = Math.max(2, config.perimeter || 20) / 2;
      return [control('a', 'Comprimento', 0.1, half - 0.1, 0.1, 'm')];
    }
    case 'volume':
      return [
        control('width', 'Comprimento', 1, 10, 1, 'cm'),
        control('depth', 'Largura', 1, 10, 1, 'cm'),
        control('height', 'Altura', 1, 10, 1, 'cm'),
      ];
    case 'fractions':
      return [
        control('d', 'Partes iguais', 1, 12),
        control('n', 'Partes pintadas', 0, Math.min(12, Math.max(1, v.d))),
      ];
    case 'ratio':
      return [
        control('a', 'Partes de concentrado', 1, 6),
        control('b', 'Partes de água', 1, 6),
        control('k', 'Multiplicar a receita', 1, 5),
      ];
    case 'percent':
      return [
        control('price', 'Preço inicial', 10, 200, 5, '€'),
        control('up', 'Aumento', 0, 100, 1, '%'),
        control('down', 'Desconto', 0, 100, 1, '%'),
      ];
    case 'equation':
      return [
        control('a', 'Coeficiente a', 1, 6),
        control('b', 'Termo b', -10, 10),
        control('c', 'Segundo membro c', -12, 24),
        control('x', 'Experimenta x', -34, 34, 0.1),
      ];
    case 'function':
      return [
        control('m', 'Declive m', -3, 3, 0.5),
        control('b', 'Ordenada na origem b', -6, 6),
        control('x', 'Ponto x', -5, 5, 0.5),
      ];
    case 'probability':
      return [control('sum', 'Soma procurada', 2, 12)];
    case 'pythagoras':
      return [control('a', 'Cateto a', 1, 10, 1, 'cm'), control('b', 'Cateto b', 1, 10, 1, 'cm')];
    case 'motion':
      return [
        control('v', 'Velocidade constante', 0, 10, 0.5, 'm/s'),
        control('t', 'Tempo', 0, 10, 0.5, 's'),
      ];
  }
}
export function normalizeValues(
  kind: ToolKind,
  values: Record<string, number>,
  config: ToolConfig = {},
): Record<string, number> {
  const result = { ...initialValues(kind, config), ...values };
  for (const c of getControls(kind, result, config)) {
    const value = Number(result[c.key]);
    result[c.key] = Number.isFinite(value) ? Math.min(c.max, Math.max(c.min, value)) : c.min;
  }
  return result;
}
export function equationSolution(a: number, b: number, c: number) {
  return (c - b) / a;
}
export function diceOutcomes(sum: number) {
  return Array.from({ length: 36 }, (_, i) => ({
    a: Math.floor(i / 6) + 1,
    b: (i % 6) + 1,
  })).filter((x) => x.a + x.b === sum);
}
export function compoundPrice(price: number, up: number, down: number) {
  const afterIncrease = price * (1 + up / 100);
  return { afterIncrease, final: afterIncrease * (1 - down / 100) };
}
export function getExplorerModel(
  kind: ToolKind,
  raw: Record<string, number>,
  config: ToolConfig = {},
): ExplorerModel {
  const v = normalizeValues(kind, raw, config),
    shapes: Shape[] = [],
    metrics: ExplorerModel['metrics'] = [];
  const text = (x: number, y: number, t: string, size = 16, fill = ink) =>
    shapes.push({ type: 'text', x, y, text: t, size, fill });
  const rect = (x: number, y: number, w: number, h: number, fill: string, stroke?: string) =>
    shapes.push({ type: 'rect', x, y, width: w, height: h, fill, stroke, rx: 3 });
  const line = (x1: number, y1: number, x2: number, y2: number, stroke = ink, dash?: string) =>
    shapes.push({ type: 'line', x1, y1, x2, y2, stroke, dash });
  const path = (d: string, fill: string, stroke?: string, clip = false) =>
    shapes.push({ type: 'path', d, fill, stroke, clip });
  const metric = (label: string, value: string) => metrics.push({ label, value });
  let title = '',
    prompt = '',
    formula = '',
    insight = '';
  switch (kind) {
    case 'numberline': {
      const { start, jump } = v,
        end = start + jump,
        px = (x: number) => 300 + x * 11;
      title = 'Salta pela reta';
      prompt =
        'Escolhe um ponto e soma um número. Nos primeiros anos, começa só com números positivos.';
      line(65, 215, 535, 215);
      for (let i = -20; i <= 20; i++) {
        line(px(i), 210, px(i), 220, muted);
        if (i % 5 === 0) text(px(i), 246, String(i), 13);
      }
      shapes.push({ type: 'circle', cx: px(start), cy: 215, r: 6, fill: purple });
      if (jump !== 0) {
        path(`M${px(start)},205 Q${px((start + end) / 2)},90 ${px(end)},195`, 'none', green);
        const sign = Math.sign(jump);
        path(
          `M${px(end) - sign * 9},181 L${px(end)},195 L${px(end) - sign * 15},195`,
          'none',
          green,
        );
      }
      shapes.push({ type: 'circle', cx: px(end), cy: 215, r: 6, fill: green });
      text(300, 70, `${start} + (${jump}) = ${end}`, 27);
      metric('Partida', String(start));
      metric('Variação', String(jump));
      metric('Chegada', String(end));
      formula = `${start}+(${jump})=${end}`;
      insight =
        jump > 0
          ? 'Somar um número positivo leva-te para a direita.'
          : jump < 0
            ? 'Somar um número negativo leva-te para a esquerda.'
            : 'Somar zero mantém a posição.';
      break;
    }
    case 'trigonometry': {
      const angle = v.angle,
        rad = (angle * Math.PI) / 180,
        cos = Math.cos(rad),
        sin = Math.sin(rad),
        x = 300 + 110 * cos,
        y = 170 - 110 * sin;
      title = 'Uma volta, duas coordenadas';
      prompt = 'O círculo tem raio 1. Observa as projeções horizontal e vertical do ponto.';
      shapes.push({ type: 'circle', cx: 300, cy: 170, r: 110, fill: '#f0ecf8', stroke: '#cabade' });
      line(160, 170, 440, 170, muted);
      line(300, 310, 300, 30, muted);
      line(300, 170, x, y, ink);
      line(300, 170, x, 170, green);
      line(x, 170, x, y, '#9b7ac4');
      shapes.push({ type: 'circle', cx: x, cy: y, r: 7, fill: green });
      text(454, 176, 'x');
      text(300, 22, 'y');
      text(418, 192, '1', 12);
      text(319, 65, '1', 12);
      text(300, 330, `Ângulo: ${angle}° · raio: 1`, 13);
      const clean = (n: number) => (Math.abs(n) < 1e-10 ? 0 : n);
      metric('cos θ', fmt(clean(cos), 3));
      metric('sin θ', fmt(clean(sin), 3));
      metric('Raio', '1');
      formula = `\\cos^2\\theta+\\sin^2\\theta=1`;
      insight =
        'O cosseno é a coordenada horizontal; o seno é a coordenada vertical. Os valores apresentados são arredondados.';
      break;
    }
    case 'derivative': {
      const { x, h } = v,
        slope = 2 * x + h,
        derivative = 2 * x,
        px = (z: number) => 300 + 30 * z,
        py = (z: number) => 290 - 15 * z;
      title = 'Da secante à tangente';
      prompt = 'Para f(x) = x², aproxima o segundo ponto reduzindo h. O que acontece ao declive?';
      for (let i = -4; i <= 4; i++) {
        line(px(i), 50, px(i), 290, '#e2e8de');
        text(px(i), 310, String(i), 12);
      }
      line(170, 290, 440, 290, ink);
      line(300, 300, 300, 35, ink);
      text(450, 294, 'x', 13);
      text(315, 38, 'y', 13);
      let curve = '';
      for (let t = -4; t <= 4.001; t += 0.1) curve += `${curve ? ' L' : 'M'}${px(t)},${py(t * t)}`;
      path(curve, 'none', green);
      path(
        `M${px(-4)},${py(x * x + slope * (-4 - x))} L${px(4)},${py(x * x + slope * (4 - x))}`,
        'none',
        '#9b7ac4',
        true,
      );
      path(
        `M${px(-4)},${py(x * x + derivative * (-4 - x))} L${px(4)},${py(x * x + derivative * (4 - x))}`,
        'none',
        '#b1904a',
        true,
      );
      for (const t of [x, x + h])
        shapes.push({ type: 'circle', cx: px(t), cy: py(t * t), r: 6, fill: green });
      metric('Declive secante', fmt(slope));
      metric('Derivada em x', fmt(derivative));
      metric('Diferença', fmt(h));
      formula = `m_h=\\frac{(x+h)^2-x^2}{h}=2x+h`;
      insight =
        'Roxo: secante. Dourado: tangente. Quando h tende a zero, o declive 2x + h tende a 2x. O slider aproxima, mas nunca divide por zero.';
      break;
    }
    case 'area': {
      const p = Math.max(2, config.perimeter || 20),
        a = v.a,
        b = p / 2 - a,
        scale = 250 / (p / 2),
        w = a * scale,
        h = b * scale;
      title = 'O mesmo contorno. Mais espaço?';
      prompt = 'Move um lado. O outro ajusta-se para manter o perímetro.';
      rect(300 - w / 2, 165 - h / 2, w, h, lime, green);
      text(300, 165 - h / 2 - 15, `${fmt(a)} m`);
      text(300 + w / 2 + 40, 170, `${fmt(b)} m`);
      text(300, 305, `A vedação mantém ${fmt(p)} metros`, 13, muted);
      metric('Área', `${fmt(a * b)} m²`);
      metric('Perímetro', `${fmt(p)} m`);
      metric('Outro lado', `${fmt(b)} m`);
      formula = `A=${fmt(a)}\\times ${fmt(b)}=${fmt(a * b)}\\;\\mathrm{m}^2`;
      insight =
        Math.abs(a - b) < 0.01
          ? 'Encontraste o quadrado! Para este perímetro, a área é máxima.'
          : 'Experimenta aproximar as duas medidas. A área aumenta ou diminui?';
      break;
    }
    case 'volume': {
      const { width: w, depth: d, height: h } = v,
        ox = 280,
        oy = 280;
      const pt = (x: number, y: number, z: number) =>
        `${ox + x * 15 - y * 12},${oy - x * 5 - y * 7 - z * 16}`;
      path(`M${pt(0, 0, 0)} L${pt(w, 0, 0)} L${pt(w, 0, h)} L${pt(0, 0, h)} Z`, lime, green);
      path(`M${pt(w, 0, 0)} L${pt(w, d, 0)} L${pt(w, d, h)} L${pt(w, 0, h)} Z`, green, ink);
      path(`M${pt(0, 0, h)} L${pt(w, 0, h)} L${pt(w, d, h)} L${pt(0, d, h)} Z`, '#e8f3cb', green);
      text(110, 100, `${fmt(h)} cm de altura`);
      text(300, 320, `${w} × ${d} × ${h} cm`);
      title = 'Dentro da caixa';
      prompt = 'O que acontece ao volume quando duplicas apenas uma medida?';
      metric('Volume', `${w * d * h} cm³`);
      metric('Área da base', `${w * d} cm²`);
      metric('Altura', `${h} cm`);
      formula = `V=${w}\\times${d}\\times${h}=${w * d * h}\\;\\mathrm{cm}^3`;
      insight = 'Cada camada tem a área da base. A altura diz quantas camadas de 1 cm cabem.';
      break;
    }
    case 'fractions': {
      const { n, d } = v,
        cx = 300,
        cy = 160,
        r = 110;
      for (let i = 0; i < d; i++) {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / d,
          b = a + (2 * Math.PI) / d;
        if (d === 1)
          shapes.push({
            type: 'circle',
            cx,
            cy,
            r,
            fill: n ? '#b4a0df' : '#eee9f7',
            stroke: '#fff',
          });
        else
          path(
            `M${cx},${cy} L${cx + r * Math.cos(a)},${cy + r * Math.sin(a)} A${r},${r} 0 ${d === 1 ? 1 : 0} 1 ${cx + r * Math.cos(b)},${cy + r * Math.sin(b)} Z`,
            i < n ? purple : '#eee9f7',
            '#fff',
          );
      }
      title = 'Partes de um todo';
      prompt = 'Muda o número de partes iguais e escolhe quantas pintar.';
      text(300, 305, `${n} de ${d} partes iguais`);
      metric('Fração', `${n}/${d}`);
      metric('Decimal', fmt(n / d, 3));
      metric('Percentagem', `${fmt((n / d) * 100)}%`);
      formula = `\\frac{${n}}{${d}}=${fmt(n / d, 3)}`;
      if (n / d !== Number((n / d).toFixed(3)))
        formula = `\\frac{${n}}{${d}}\\approx ${fmt(n / d, 3)}`;
      insight =
        'O denominador conta todas as partes iguais; o numerador conta as partes escolhidas.';
      break;
    }
    case 'ratio': {
      const { a, b, k } = v;
      title = 'Mistura à medida';
      prompt = 'Uma unidade representa 100 mL. Multiplica a receita e observa a proporção.';
      [a * k, b * k].forEach((count, j) => {
        for (let i = 0; i < count; i++)
          rect(
            115 + j * 250 + (i % 5) * 27,
            260 - Math.floor(i / 5) * 30,
            22,
            25,
            j ? '#a4cadc' : purple,
          );
        text(180 + j * 250, 300, j ? 'Água' : 'Concentrado');
      });
      metric('Razão', `${a} : ${b}`);
      metric('Concentrado', `${a * k * 100} mL`);
      metric('Água', `${b * k * 100} mL`);
      formula = `\\frac{${a}}{${b}}=\\frac{${a * k}}{${b * k}}`;
      insight = `A mistura tem ${fmt((a / (a + b)) * 100)}% de concentrado. Mudar só o multiplicador não altera esta percentagem.`;
      break;
    }
    case 'percent': {
      const { price, up, down } = v,
        { afterIncrease, final } = compoundPrice(price, up, down),
        values = [price, afterIncrease, final],
        max = Math.max(...values, 1);
      values.forEach((value, i) => {
        const h = (value / max) * 190;
        rect(105 + i * 145, 260 - h, 90, h, [lime, purple, '#a4cadc'][i]);
        text(150 + i * 145, 245 - h, `${fmt(value)} €`, 18);
        text(150 + i * 145, 293, ['Inicial', 'Após aumento', 'Após desconto'][i], 13);
      });
      title = 'O preço muda';
      prompt = 'Aplica um aumento e depois um desconto. A base de cálculo continua igual?';
      metric('Inicial', `${fmt(price)} €`);
      metric('Final', `${fmt(final)} €`);
      metric('Variação', `${fmt((final / price - 1) * 100)}%`);
      formula = `${price}\\times(1+\\frac{${up}}{100})\\times(1-\\frac{${down}}{100})=${fmt(final)}`;
      insight =
        Math.abs(final - price) < 0.0001
          ? 'O produto dos dois fatores é 1: o preço voltou ao início.'
          : 'O desconto atua sobre o preço aumentado. As percentagens não se somam simplesmente.';
      break;
    }
    case 'equation': {
      const { a, b, c, x } = v,
        left = a * x + b,
        diff = left - c,
        tilt = Math.max(-35, Math.min(35, diff * 3));
      path('M280,280 L300,180 L320,280 Z', '#dce6dc', green);
      line(150, 170 + tilt, 450, 170 - tilt, green);
      shapes.push({ type: 'circle', cx: 300, cy: 170, r: 7, fill: ink });
      line(150, 170 + tilt, 150, 215 + tilt);
      line(450, 170 - tilt, 450, 215 - tilt);
      rect(95, 215 + tilt, 110, 12, lime, green);
      rect(395, 215 - tilt, 110, 12, purple, green);
      text(150, 95, `${a}x ${b < 0 ? '−' : '+'} ${Math.abs(b)}`, 22);
      text(450, 95, `${c}`, 22);
      text(300, 318, 'Balança esquemática: compara os valores dos membros', 12, muted);
      title = 'Encontra o equilíbrio';
      prompt = 'Experimenta valores de x até os dois membros terem o mesmo valor.';
      metric('Esquerda', fmt(left));
      metric('Direita', fmt(c));
      metric('Diferença', fmt(diff));
      formula = `${a}x${b < 0 ? '' : '+'}${b}=${c}`;
      insight =
        Math.abs(diff) < 1e-8
          ? 'Equilíbrio! Este valor de x é uma solução.'
          : 'O desenho compara valores, não pesos físicos. Usa “Mostrar solução” se precisares de uma pista.';
      break;
    }
    case 'function': {
      const { m, b, x } = v;
      title = 'Uma reta em movimento';
      prompt = 'Muda o declive e a ordenada na origem. O que cada um faz à reta?';
      for (let i = -10; i <= 10; i++) {
        line(300 + i * 13, 40, 300 + i * 13, 300, '#dfe7df');
        line(170, 170 + i * 13, 430, 170 + i * 13, '#dfe7df');
      }
      line(170, 170, 440, 170, ink);
      line(300, 305, 300, 30, ink);
      text(450, 175, 'x');
      text(300, 22, 'y');
      text(286, 190, '0', 12);
      text(365, 190, '5', 12);
      text(286, 110, '5', 12);
      path(`M170,${170 - (m * -10 + b) * 13} L430,${170 - (m * 10 + b) * 13}`, 'none', green, true);
      const y = m * x + b;
      if (y >= -10 && y <= 10)
        shapes.push({
          type: 'circle',
          cx: 300 + x * 13,
          cy: 170 - y * 13,
          r: 7,
          fill: '#b4a0df',
          stroke: ink,
        });
      metric('Declive', fmt(m));
      metric('Ponto x', fmt(x));
      metric('f(x)', fmt(y));
      formula = `f(x)=${fmt(m)}x${b < 0 ? '' : '+'}${b}`;
      insight =
        y > 10 || y < -10
          ? 'O ponto está fora da janela visível (−10 a 10). O valor continua indicado acima.'
          : `Quando x aumenta 1, y varia ${fmt(m)}. A reta cruza o eixo vertical em ${b}.`;
      break;
    }
    case 'probability': {
      const { sum } = v;
      title = 'Dois dados, muitas hipóteses';
      prompt = 'Cada quadrado é um resultado ordenado de dois dados justos e independentes.';
      for (let a = 1; a <= 6; a++) {
        text(150, 53 + a * 35, String(a), 12);
        text(160 + a * 40, 38, String(a), 12);
        for (let b = 1; b <= 6; b++) {
          rect(142 + b * 40, 38 + a * 35, 36, 30, a + b === sum ? green : '#e9eee5');
          text(160 + b * 40, 59 + a * 35, String(a + b), 12, a + b === sum ? '#fff' : muted);
        }
      }
      const count = diceOutcomes(sum).length;
      metric('Favoráveis', String(count));
      metric('Possíveis', '36');
      metric('Probabilidade', `${fmt((count / 36) * 100)}%`);
      formula = `P(S=${sum})=\\frac{${count}}{36}`;
      insight =
        'As somas não são igualmente prováveis. Conta os resultados ordenados, não apenas as somas.';
      text(300, 302, 'Linhas: dado 1 · colunas: dado 2', 12, muted);
      break;
    }
    case 'pythagoras': {
      const { a, b } = v,
        c = Math.hypot(a, b),
        scale = 21,
        x = 180,
        y = 280;
      title = 'O lado que falta';
      prompt = 'Altera os catetos de um triângulo retângulo e observa a hipotenusa.';
      path(`M${x},${y} L${x + a * scale},${y} L${x},${y - b * scale} Z`, '#e9e3fa', green);
      path(`M${x + 15},${y} L${x + 15},${y - 15} L${x},${y - 15}`, 'none', ink);
      text(x + (a * scale) / 2, y + 30, `a = ${a}`);
      text(x - 45, y - (b * scale) / 2, `b = ${b}`);
      text(x + (a * scale) / 2 + 45, y - (b * scale) / 2 - 12, `c ≈ ${fmt(c)}`);
      metric('a²', `${a * a} cm²`);
      metric('b²', `${b * b} cm²`);
      metric('Hipotenusa', `${fmt(c)} cm`);
      formula = `c=\\sqrt{${a}^2+${b}^2}=\\sqrt{${a * a + b * b}}`;
      insight =
        'Esta relação exige um ângulo reto: o quadrado da hipotenusa é a soma dos quadrados dos catetos.';
      break;
    }
    case 'motion': {
      const { v: speed, t } = v,
        d = speed * t;
      title = 'Distância em movimento';
      prompt = 'Um movimento retilíneo com velocidade constante e posição inicial zero.';
      line(80, 230, 520, 230, muted);
      for (let i = 0; i <= 10; i++) {
        line(80 + i * 44, 225, 80 + i * 44, 235, muted);
        text(80 + i * 44, 260, String(i * 10), 12);
      }
      shapes.push({ type: 'circle', cx: 80 + d * 4.4, cy: 208, r: 16, fill: green });
      text(300, 100, `${fmt(d)} metros percorridos`, 24);
      text(300, 300, 'Posição (m)', 13, muted);
      metric('Velocidade', `${fmt(speed)} m/s`);
      metric('Tempo', `${fmt(t)} s`);
      metric('Distância', `${fmt(d)} m`);
      formula = `d=v\\,t=${fmt(speed)}\\times ${fmt(t)}=${fmt(d)}\\;\\mathrm{m}`;
      insight =
        'Com velocidade constante, duplicar o tempo duplica a distância. O modelo não inclui aceleração.';
      break;
    }
  }
  return {
    kind,
    title: config.title || title,
    prompt: config.prompt || prompt,
    controls: getControls(kind, v, config),
    values: v,
    metrics,
    formula,
    insight,
    shapes,
    description: metrics.map((m) => `${m.label}: ${m.value}`).join('. '),
  };
}
