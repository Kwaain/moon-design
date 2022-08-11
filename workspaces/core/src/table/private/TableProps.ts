import { ReactNode } from "react";

 export type TableProps = {
   data: Array<Object>;
   column: Array<Object>;
   item?: ReactNode;
   useCheckbox?: boolean;
   index?: number;
   handleSelectAll?: () => void;
   deleteRow?: () => void;
   onIconClick?: () => void;
 };