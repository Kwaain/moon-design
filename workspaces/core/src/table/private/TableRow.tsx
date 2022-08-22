import React, { useEffect, useState } from "react";
import Checkbox from "../../checkbox/Checkbox";
import { TableRowProp } from "./TableItemProp";

export const TableRow = ({
  item,
  column,
  isCheckbox,
  onSelectItem,
}: TableRowProp) => {
  const [hoveredIcon, setHoveredIcon] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (item.isChecked !== undefined && item.isChecked !== isChecked)
      setIsChecked(item.isChecked);
  }, [item.isChecked]);

  return (
    <div
      className={`w-full flex items-center mb-1 justify-between rounded-lg bg-gohan hover:bg-[#4841a5]/[.12] min-w-[600px] ${
        isChecked && 'bg-[#4841a5]/[.12]'
      } ${
        !isCheckbox && onSelectItem ? 'cursor-pointer' : ''
      }`}
      onMouseOver={() => setHoveredIcon(true)}
      onMouseOut={() => setHoveredIcon(false)}
      onClick={() => {
        if (onSelectItem) onSelectItem(item, !isChecked);
        setIsChecked(!isChecked);
      }}
    >
      {column.map((columnItem: any, index: number) => {
        return (
          <div
            className={`p-4 flex items-center max-w-[200px] min-w-[150px]`}
            key={item.index}
          >
            {isCheckbox && index === 0 && (
              <Checkbox
                id={item.id}
                checked={isChecked}
              />
            )}
            <div className="flex items-center relative ">
              <div className={`flex flex-col flex-wrap ${!item.iconRight ? 'w-[150px]' : ''}`}>
                <p className="text-moon-14 leading-6 w-full ">
                  {item[columnItem.value]}
                </p>
                <p className="text-moon-12 leading-4 text-gray-600 w-full">
                  {item[columnItem.subname]}
                </p>
              </div>
              {!!columnItem.iconRight && (<div
                className="flex items-center justify-end relative cursor-pointer"
                id={item.id}
              >
                {item[columnItem.iconRight]}
              </div>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
