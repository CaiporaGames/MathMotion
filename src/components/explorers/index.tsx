// Adaptadores publicos: reutilize em qualquer pagina Next/React.
import type { ToolConfig } from '@/types/content';
import { ExplorerController } from '@/controllers/ExplorerController';
type Props = { config?: ToolConfig; compact?: boolean };
export const AreaExplorer = (p: Props) => <ExplorerController kind="area" {...p} />;
export const VolumeExplorer = (p: Props) => <ExplorerController kind="volume" {...p} />;
export const FractionExplorer = (p: Props) => <ExplorerController kind="fractions" {...p} />;
export const RatioExplorer = (p: Props) => <ExplorerController kind="ratio" {...p} />;
export const PercentageExplorer = (p: Props) => <ExplorerController kind="percent" {...p} />;
export const EquationExplorer = (p: Props) => <ExplorerController kind="equation" {...p} />;
export const FunctionExplorer = (p: Props) => <ExplorerController kind="function" {...p} />;
export const ProbabilityExplorer = (p: Props) => <ExplorerController kind="probability" {...p} />;
export const PythagorasExplorer = (p: Props) => <ExplorerController kind="pythagoras" {...p} />;
export const MotionExplorer = (p: Props) => <ExplorerController kind="motion" {...p} />;

export const NumberLineExplorer = (p: Props) => <ExplorerController kind="numberline" {...p} />;
export const TrigonometryExplorer = (p: Props) => <ExplorerController kind="trigonometry" {...p} />;
export const DerivativeExplorer = (p: Props) => <ExplorerController kind="derivative" {...p} />;
