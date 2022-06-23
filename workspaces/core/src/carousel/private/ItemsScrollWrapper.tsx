import React from 'react';
import classNames from '../../private/utils/classnames';
import CarouselProps from './types/CarouselType';

interface ItemsScrollWrapperProps {
  horizontalEdgeGap?: number | boolean;
  hideScrollbar?: boolean;
  children: any;
  ref: any;
  space: any;
  slidesOnly?: boolean;
}

const ItemsScrollWrapper: React.FC<ItemsScrollWrapperProps> = ({ 
  horizontalEdgeGap, 
  hideScrollbar, 
  children, 
  ref, 
  space,
  slidesOnly
}) => {
  return (
    <ul className={classNames(
        "overflow-y-hidden overflow-x-auto w-full h-full flex",
      )}
    >
      {children}
    </ul>
  );
};

export default ItemsScrollWrapper;