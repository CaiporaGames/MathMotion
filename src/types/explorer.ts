import type { ToolKind } from './content';
export type SliderControl = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
};
export type Shape =
  | {
      type: 'rect';
      x: number;
      y: number;
      width: number;
      height: number;
      fill: string;
      stroke?: string;
      rx?: number;
    }
  | { type: 'line'; x1: number; y1: number; x2: number; y2: number; stroke: string; dash?: string }
  | { type: 'path'; d: string; fill: string; stroke?: string; clip?: boolean }
  | { type: 'circle'; cx: number; cy: number; r: number; fill: string; stroke?: string }
  | { type: 'text'; x: number; y: number; text: string; fill?: string; size?: number };
export type ExplorerModel = {
  kind: ToolKind;
  title: string;
  prompt: string;
  controls: SliderControl[];
  values: Record<string, number>;
  metrics: { label: string; value: string }[];
  formula: string;
  insight: string;
  shapes: Shape[];
  description: string;
};
