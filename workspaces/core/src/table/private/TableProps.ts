import { ReactNode } from "react";

export type TableProps = {
  data: Array<Object>;
  column: Array<Object>;
  item?: ReactNode;
  isCheckbox?: boolean;
  index?: number;
  onDelete?: () => void;
  onIconClick?: () => void;
  onSelectAll?: (items: Object[], selected?: boolean) => void;
  onSelectItem?: (item: Object, selected?: boolean) => void;
};