import { ColorProps } from '@heathmont/moon-themes';

export type Props = {
  onChange: (key: string, isActive: boolean) => void;
  activeOptions: string[];
  formatFn: (props: { value: string | number; key: string }) => any;
  options: {
    label: string;
    dataKey?: string;
    value?: string | number;
    color?: string | ColorProps;
  }[];
};

export type ColorPreviewProps = {
  color: string;
  theme?: any;
};

export type ButtonProps = {
  isActive?: boolean;
  onClick: (v: string) => void;
};
