import React from "react";
import { TableHeader, TableRow } from './private/TableItems';
import { TableProps } from "./private/TableProps";

const Table = ({
  data,
  column,
  useCheckbox,
  deleteRow,
  onIconClick,
  handleSelectAll,
}: TableProps) => {
  
  return (
    <div className="w-full h-full flex flex-col justify-between items-center min-w-[600px] overflow-hidden">
      <div className="w-full h-full flex p-4 justify-between items-center  min-w-[600px]">
        {column.map((item: any, index: number) => (
          <TableHeader
            item={item}
            index={index}
            useCheckbox={useCheckbox}
            onIconClick={onIconClick}
            handleSelectAll={handleSelectAll}
          />
        ))}
      </div>
      <div className="w-full h-full min-w-[600px]">
        {data.map((item: any) => (
          <TableRow
            item={item}
            column={column}
            useCheckbox={useCheckbox}
            deleteRow={deleteRow}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;