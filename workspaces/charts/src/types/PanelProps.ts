export type Props = {
  hasUpdates: boolean;
  isUpdating: boolean;
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isActive?: boolean;
  height?: string | number;
  children?: React.ReactNode;
  style?: any;
};

export type ButtonProps = {
  hasUpdates?: boolean;
  theme?: object;
  isActive?: boolean;
  onClick?: any;
};

export type ContainerProps = {
  hasUpdates?: boolean;
  theme?: object;
  isActive?: boolean;
  height?: number;
};
