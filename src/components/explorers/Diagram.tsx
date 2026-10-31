import { useId } from 'react';
import type { Shape } from '@/types/explorer';
import s from './Diagram.module.scss';
export function Diagram({ shapes, description }: { shapes: Shape[]; description: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={s.diagram} viewBox="0 0 600 340" role="img" aria-label={description}>
      <defs>
        <pattern id={`grid${id}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".8" fill="#dde5d9" />
        </pattern>
        <clipPath id={`plot${id}`}>
          <rect x="170" y="40" width="260" height="260" />
        </clipPath>
      </defs>
      <rect width="600" height="340" fill={`url(#grid${id})`} />
      {shapes.map((shape, i) => {
        switch (shape.type) {
          case 'rect': {
            const { type, ...p } = shape;
            return <rect key={i} {...p} strokeWidth="2" />;
          }
          case 'circle': {
            const { type, ...p } = shape;
            return <circle key={i} {...p} strokeWidth="2" />;
          }
          case 'line': {
            const { type, dash, ...p } = shape;
            return <line key={i} {...p} strokeWidth="2" strokeDasharray={dash} />;
          }
          case 'path': {
            const { type, clip, ...p } = shape;
            return (
              <path
                key={i}
                {...p}
                strokeWidth="2.5"
                strokeLinejoin="round"
                clipPath={clip ? `url(#plot${id})` : undefined}
              />
            );
          }
          case 'text':
            return (
              <text
                key={i}
                x={shape.x}
                y={shape.y}
                textAnchor="middle"
                fontSize={shape.size || 16}
                fontWeight="600"
                fill={shape.fill || '#234735'}
              >
                {shape.text}
              </text>
            );
        }
      })}
    </svg>
  );
}
