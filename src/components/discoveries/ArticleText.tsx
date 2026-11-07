import { Fragment, type ReactNode } from 'react';
import { MathFormula } from '@/components/ui/Math';
import s from './ArticleText.module.scss';
// Deliberately small editorial dialect, with no raw HTML or executable Markdown.
function inline(text: string): ReactNode[] {
  const parts = text.split(/(\\\([\s\S]*?\\\)|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('\\(') && part.endsWith('\\)')) return <MathFormula key={i} value={part.slice(2, -2)} display={false} />;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{inline(part.slice(2, -2))}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{inline(part.slice(1, -1))}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
function prose(text: string): ReactNode[] {
  return text.trim().split(/\n\s*\n/).filter(Boolean).map((block, i) => {
    const lines = block.trim().split('\n');
    if (lines.every(line => line.startsWith('>'))) return <blockquote key={i}>{prose(lines.map(line => line.replace(/^>\s?/, '')).join('\n'))}</blockquote>;
    if (lines.every(line => /^- /.test(line))) return <ul key={i}>{lines.map((line, j) => <li key={j}>{inline(line.slice(2))}</li>)}</ul>;
    if (lines.every(line => /^\d+\. /.test(line))) return <ol key={i}>{lines.map((line, j) => <li key={j}>{inline(line.replace(/^\d+\. /, ''))}</li>)}</ol>;
    if (/^###? /.test(block)) return <h3 key={i}>{inline(block.replace(/^###? /, ''))}</h3>;
    return <p key={i}>{lines.map((line, j) => <Fragment key={j}>{j > 0 && (lines[j - 1].endsWith('  ') ? <br /> : ' ')}{inline(line.trim())}</Fragment>)}</p>;
  });
}
export function ArticleText({ text }: { text: string }) {
  return <div className={s.text}>{text.split(/(\\\[[\s\S]*?\\\])/g).map((part, i) => part.startsWith('\\[') && part.endsWith('\\]')
    ? <div className={s.formula} key={i}><MathFormula value={part.slice(2, -2).trim()} /></div>
    : <Fragment key={i}>{prose(part)}</Fragment>)}</div>;
}
