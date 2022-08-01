export type Props = {
  hasUpdates: boolean;
  isUpdating: boolean;
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isActive?: boolean;
  height?: string | number;
  children?: React.ReactNode;
};

export type ButtonProps = {
  hasUpdates?: boolean;
  theme?: object;
  isActive?: boolean;
  onClick?: void;
};

export type ContainerProps = {
  hasUpdates?: boolean;
  theme?: object;
  isActive?: boolean;
  height?: number | null;
};
