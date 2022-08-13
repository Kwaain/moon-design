import { ColorProps } from '@heathmont/moon-themes';

export type Props = {
  title: string;
  data: {
    date: string;
    [key: string]: string | number;
  }[];
  options: {
    label: string;
    dataKey: string;
    value: number;
    color: ColorProps;
    yAxisId: string;
    isActive?: boolean;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  onSelectorChange?: (
    activeOptions: string[],
    dataKey: string,
    isActive: boolean
  ) => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  axisWidth?: number;
  icon?: React.ReactNode;
  interval?: 'preserveStart' | 'preserveEnd' | 'preserveStartEnd' | number;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};
