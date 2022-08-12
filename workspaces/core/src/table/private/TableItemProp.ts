import { ReactElement } from "react";

 export interface TableItemProp {
  column?: any;
  item?: any;
  iconRight?: ReactElement;
  isCheckbox?: boolean;
  index?: number;
  onIconClick?: () => void;
}

export interface TableHeaderProp extends TableItemProp {
  selectAllChecked?: boolean;
  onSelectAll: (selected?: boolean) => void;
}

 export interface TableRowProp extends TableItemProp {
  onSelectItem?: (item: Object, selected?: boolean) => void;
  onDelete?: () => void;
}
