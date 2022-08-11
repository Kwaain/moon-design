import { ColorProps } from '@heathmont/moon-themes';

export type Props = {
  title: string;
  data: {
    label: string | React.ReactNode;
    code: string;
    dataKey: string;
    value: number;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: JSX.Element;
  positiveColor?: ColorProps;
  negativeColor?: ColorProps;
  formatFn?: (props: { value: number; key: string }) => any;
  loaderText?: string | React.ReactNode;
};
