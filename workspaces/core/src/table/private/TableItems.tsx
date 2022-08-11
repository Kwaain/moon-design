import React, { useState , ReactElement } from "react";
import { GenericDelete } from '@heathmont/moon-icons-tw';
import Checkbox from "../../checkbox/Checkbox";
import TriangleIcon from './triangleIcon';


// export type TableRowProps = {
//   column?: any;
//   item?: any;
//   iconRight?: ReactElement;
//   useCheckbox?: boolean;
//   handleCheckbox?: () => void;
//   deleteRow?: () => void;
// };

// export type TableHeaderProps = {
//   item?: any;
//   useCheckbox?: boolean;
//   index?:number;
//   onIconClick?: () => void;
// };

export type TableItemsProps = {
  column?: any;
  item?: any;
  iconRight?: ReactElement;
  useCheckbox?: boolean;
  index?: number;
  handleSelectAll?: () => void;
  onIconClick?: () => void;
  handleCheckbox?: () => void;
  deleteRow?: () => void;
};

export const TableHeader = ({
  item,
  useCheckbox,
  index,
  handleSelectAll,
  onIconClick,
}: TableItemsProps) => {
  return (
    <div className=" flex items-center p-1">
      {useCheckbox && index === 0 && (
        <Checkbox
          id={'selectAll'}
          checked={item.isChecked}
          onClick={handleSelectAll}
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


export const TableRow = ({
  item,
  column,
  useCheckbox,
  handleCheckbox,
  deleteRow,
}: TableItemsProps) => {
  
  const [hoveredIcon, setHoveredIcon] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`w-full flex items-center p-4 mb-1 justify-between rounded-lg bg-gohan hover:bg-[#4841a5]/[.12] min-w-[600px] ${
        isChecked === true && 'bg-[#4841a5]/[.12]'
      }`}
      onMouseOver={() => setHoveredIcon(true)}
      onMouseOut={() => setHoveredIcon(false)}
    >
      {column.map((columnItem: any, index: number) => {
        return (
          <div className={`p-1 flex items-center `} key={item.index}>
            {useCheckbox && index === 0 && (
              <Checkbox
                id={item.index}
                checked={item.isChecked}
                onClick={handleCheckbox}
              />
            )}
            <div className="flex items-center relative ">
              {!useCheckbox && hoveredIcon && columnItem.value === 'iconRight' && (
                <div
                  className="bg-[#4841a5] rounded-[4px] p-1 absolute items-center -translate-x-1/4"
                  onMouseOver={() => setShowPopup(true)}
                  onMouseOut={() => setShowPopup(false)}
                  onClick={deleteRow}
                >
                  <GenericDelete color="white" width={20} height={20} />
                </div>
              )}

              {columnItem.value === 'iconRight' && showPopup && (
                <div className=" flex items-center absolute -translate-x-full p-1">
                  <div className="bg-gohan rounded ">
                    <p className="p-3 text-moon-12 leading-4 ">Delete</p>
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
              <div className=" flex flex-col py-1 ">
                <p className="text-moon-14 leading-6 ">
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
