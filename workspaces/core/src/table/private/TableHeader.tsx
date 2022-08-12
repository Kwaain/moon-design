import React, { ReactElement} from 'react';
import Checkbox from '../../checkbox/Checkbox';
import { TableHeaderProp } from './TableItemProp';


export const TableHeader = ({
  item,
  isCheckbox,
  index,
  selectAllChecked,
  onSelectAll,
  onIconClick,
}: TableHeaderProp) => {
  return (
    <div className=" flex items-center p-1">
      {isCheckbox && index === 0 && (
        <Checkbox
          id={'selectAll'}
          checked={selectAllChecked}
          onClick={(e) => onSelectAll(e?.currentTarget?.checked)}
        />
      )}
      <div className="flex items-center">{item.iconLeft}</div>
      <div className=" flex flex-col py-1 ">
        <p className="text-moon-14 leading-6 ">{item.name} </p>
        <p className="text-moon-12 leading-4 text-gray-600 ">{item.subname}</p>
      </div>
      <div
        className="flex items-center justify-end relative cursor-pointer "
        onClick={onIconClick}
        id={item.id}
      >
        {item.iconRight}
      </div>
    </div>
  );
};
