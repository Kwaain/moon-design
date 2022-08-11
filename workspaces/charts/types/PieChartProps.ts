import { ColorProps } from '@heathmont/moon-themes';

export type Props = {
  title: string;
  data: {
    label: string;
    value: number;
    color: ColorProps;
    dataKey: string;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: React.ReactNode;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};
