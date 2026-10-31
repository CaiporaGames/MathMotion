import katex from 'katex';
export function MathFormula({ value, display = true }: { value: string; display?: boolean }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(value, {
          displayMode: display,
          throwOnError: false,
          trust: false,
          output: 'htmlAndMathml',
        }),
      }}
    />
  );
}
