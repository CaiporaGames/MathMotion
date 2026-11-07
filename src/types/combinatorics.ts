import type { CombinatoricsLabId } from './discovery';
export type CellKind = 'valid' | 'excluded' | 'equivalent' | 'diagonal' | 'paired' | 'single';
export interface LabState {
  mode: string; preset: number; row: string; selected: string[];
  layer: number; n: number; r: number; bits: number[];
}
export interface LabCell { key: string; label: string; kind: CellKind; highlighted: boolean; coordinates: string[]; detail?: string }
export interface LabGrid { title: string; rows: string[]; cols: string[]; cells: LabCell[] }
export interface LabControl { key: 'mode' | 'preset' | 'row' | 'layer' | 'n' | 'r'; label: string; value: string; options: { value: string; label: string }[] }
export interface LabModel {
  id: CombinatoricsLabId; context: string; controls: LabControl[];
  grids: LabGrid[]; stats: { label: string; value: string | number }[];
  note: string; selection?: string;
  factors?: number[]; permutations?: number[][];
  bits?: { label: string; value: number }[];
  binaryGroups?: { title: string; words: string[] }[];
  pascal?: number[][];
}
