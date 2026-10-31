import {
  Square,
  Box,
  PieChart,
  FlaskConical,
  Percent,
  Scale,
  ChartNoAxesCombined,
  Dices,
  Triangle,
  MoveRight,
} from 'lucide-react';
const icons = {
  Square,
  Box,
  PieChart,
  FlaskConical,
  Percent,
  Scale,
  ChartNoAxesCombined,
  Dices,
  Triangle,
  MoveRight,
};
export function ToolIcon({ name, size = 24 }: { name: string; size?: number }) {
  const I = icons[name as keyof typeof icons] || Square;
  return <I size={size} strokeWidth={1.7} aria-hidden="true" />;
}
