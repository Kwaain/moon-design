import { ReactElement } from "react";

 export interface TableItemProp {
  column?: any;
  item?: any;
  iconRight?: ReactElement;
  isCheckbox?: boolean;
  index?: number;
}

export interface TableHeaderProp extends TableItemProp {
  selectAllChecked?: boolean;
  onColumnClick?: (item: Object) => void;
  onSelectAll: (selected?: boolean) => void;
}

 export interface TableRowProp extends TableItemProp {
  onSelectItem?: (item: Object, selected?: boolean) => void;
  onDelete?: () => void;
}
