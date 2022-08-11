export type Props = {
  title: string;
  data: {
    label: string | React.ReactNode;
    value: number | string | React.ReactNode;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: React.ReactNode;
  isActive?: boolean;
  loaderText?: string | React.ReactNode;
};
