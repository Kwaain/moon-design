import React from 'react';
import Checkbox from '../../checkbox/Checkbox';
import { TableHeaderProp } from './TableItemProp';


export const TableHeader = ({
  item,
  isCheckbox,
  index,
  selectAllChecked,
  onSelectAll,
  onColumnClick,
}: TableHeaderProp) => {
  return (
    <div className=" flex relative items-center max-w-[200px]">
      {isCheckbox && index === 0 && (
        <Checkbox
          id={'selectAll'}
          checked={selectAllChecked}
          onClick={(e) => onSelectAll(e?.currentTarget?.checked)}
        />
      )}
      <div className="flex items-center">{item.iconLeft}</div>
      <div className=" flex flex-col py-1 ">
        <p className="text-moon-14 leading-flex-wrap">{item.name} </p>
        <p className="text-moon-12 leading-4 text-gray-600 ">{item.subname}</p>
      </div>
      <div
        className={`flex items-center justify-end cursor-pointer ${
          index === 0 && 'absolute left-[100%] ml-4'
        }`}
        onClick={() => {
          if (onColumnClick) onColumnClick(item);
        }}
        id={item.id}
      >
        {item.iconRight}
      </div>
    </div>
  );
};
