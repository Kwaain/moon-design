import React, { useEffect, useState } from 'react';
import { TableHeader } from './private/TableHeader';
import { TableProps } from './private/TableProps';
import { TableRow } from './private/TableRow';

const Table = ({
  data,
  column,
  isCheckbox,
  onDelete,
  onIconClick,
  onSelectAll,
  onSelectItem,
}: TableProps) => {
  const [iseSelectAll, setIsSelectAll] = useState(false);

  const handleSelectAll = (selected?: boolean) => {
    if (onSelectAll) onSelectAll(data, !!selected);
    setIsSelectAll(!!selected);
  };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center min-w-[600px]">
      <div className="w-full flex p-4 justify-between items-center ">
        {column.map((item: any, index: number) => (
          <TableHeader
            item={item}
            index={index}
            isCheckbox={isCheckbox}
            selectAllChecked={iseSelectAll}
            onIconClick={onIconClick}
            onSelectAll={handleSelectAll}
          />
        ))}
      </div>
      <div className="w-full h-full ">
        {data.map((item: any) => (
          <TableRow
            item={item}
            column={column}
            onSelectItem={(item: Object, selected?: boolean) => {
              if (onSelectItem) onSelectItem(item, !!selected);
              if (!selected) setIsSelectAll(false);
            }}
            isCheckbox={isCheckbox}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Table;
