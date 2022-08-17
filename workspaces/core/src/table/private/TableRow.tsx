import React, { useEffect, useState } from "react";
import { GenericDelete } from "@heathmont/moon-icons-tw";
import Checkbox from "../../checkbox/Checkbox";
import { TableRowProp } from "./TableItemProp";
import TriangleIcon from "./triangleIcon";

export const TableRow = ({
  item,
  column,
  isCheckbox,
  onSelectItem,
  onDelete,
}: TableRowProp) => {
  const [hoveredIcon, setHoveredIcon] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (item.isChecked !== undefined && item.isChecked !== isChecked)
      setIsChecked(item.isChecked);
  }, [item.isChecked]);

  return (
    <div
      className={`w-full flex items-center mb-1 justify-between rounded-lg bg-gohan hover:bg-[#4841a5]/[.12] min-w-[600px] ${
        isChecked && 'bg-[#4841a5]/[.12]'
      }`}
      onMouseOver={() => setHoveredIcon(true)}
      onMouseOut={() => setHoveredIcon(false)}
    >
      {column.map((columnItem: any, index: number) => {
        return (
          <div
            className={`p-4 flex items-center `}
            key={item.index}
          >
            {isCheckbox && index === 0 && (
              <Checkbox
                id={item.id}
                checked={isChecked}
                onClick={() => {
                  if (onSelectItem) onSelectItem(item, !isChecked);
                  setIsChecked(!isChecked);
                }}
              />
            )}
            <div className="flex items-center relative ">
              {!isCheckbox && hoveredIcon && columnItem.value === 'iconRight' && (
                <div
                  className="bg-[#4841a5] p-1 rounded-[4px] absolute items-center -translate-x-1/4"
                  onMouseOver={() => setShowPopup(true)}
                  onMouseOut={() => setShowPopup(false)}
                  onClick={onDelete}
                >
                  <GenericDelete color="white" width={20} height={20} />
                </div>
              )}

              {columnItem.value === 'iconRight' && showPopup && (
                <div className=" flex items-center absolute -translate-x-full p-1">
                  <div className="bg-gohan rounded ">
                    <p className="p-3 text-moon-12 leading-4">Delete</p>
                  </div>
                  <TriangleIcon
                    color="white"
                    fill="white"
                    height={30}
                    width={30}
                  />
                </div>
              )}

              <div className="flex items-center">
                {item[`${columnItem.iconLeft}`]}
              </div>
              <div className={`flex flex-col`}>
                <p className="text-moon-14 leading-6 w-full ">
                  {item[`${columnItem.value}`]}
                </p>
                <p className="text-moon-12 leading-4 text-gray-600 ">
                  {item[`${columnItem.subname}`]}
                </p>
              </div>
              <div
                className="flex items-center justify-end relative cursor-pointer"
                id={item.id}
              >
                {item[`${columnItem.iconRight}`]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
