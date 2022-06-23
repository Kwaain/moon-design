import React, { useEffect } from 'react';
import { ControlsChevronLeft, ControlsChevronRight } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';
import withHorizontalScroll from '../withHorizontalScroll/withHorizontalScroll';
import Slide from './private/CarouselScrollItem';
import CarouselScrollItem from './private/CarouselScrollItem';
import HeaderSection from './private/HeaderSection';
import ItemsScrollWrapper from './private/ItemsScrollWrapper';
import CarouselProps from './private/types/CarouselType';

const generateItems = (
  items: Array<any> | Function,
  itemRef: HTMLElement,
  isRtl: boolean,
  firstVisibleIndex: number,
  lastVisibleIndex: number
) => {
  const elements: HTMLElement[] =
    typeof items === 'function'
      ? items({ firstVisibleIndex, lastVisibleIndex }).map(
          (item: React.ReactNode, index: string | number | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselScrollItem key={index} ref={itemRef}>
              {item}
            </CarouselScrollItem>
          )
        )
      : items.map(
          (item: React.ReactNode, index: string | number | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselScrollItem key={index} ref={itemRef}>
              {item}
            </CarouselScrollItem>
          )
        );

  return isRtl ? (elements as HTMLElement[]).reverse() : elements;
};

const Carousel: React.FC<CarouselProps> = ({
  items,
  step,
  slidesOnly= true,
  controls = true,
  slideClassName = '',
  indicators,
  headerSection,
  title,
  seeAllButton,
  description,
  headerControls,
  scrollToRightButton,
  scrollToLeftButton,
  scaleOutOnFocus,
  scaleOutValue,
  indicatorsClassName = '',
  controlsClassName = '',
  spacing,
  scrollTo,
  selectedIndex,
  hideScrollbar,
  horizontalEdgeGap,
  space,
  isRtl
}) => {
  const {
    itemRef,
    scrollLeftToStep,
    scrollRightToStep,
    containerRef,
    scrollToIndex,
    canScrollLeft, 
    canScrollRight, // da li je button disabled ili ne
    firstVisibleIndex,
    lastVisibleIndex,
  } = withHorizontalScroll({ scrollStep: step || 5 });

  useEffect(() => {
    if (!selectedIndex) {
      return;
    }
    scrollToIndex(selectedIndex);
  }, []);

  useEffect(() => {
    if (!scrollTo) {
      return;
    }
    // We scroll for another extra item because we defined our THRESHOLD = 0.75;
    // It means that item will be visible for 75%.
    // We scroll one more to guarantee 100% visibility.
    // "items.length - 1" because indices start from 0.
    if (scrollTo && scrollTo < items.length - 1) {
      scrollToIndex(scrollTo + 1);
    }
    // No point for scroll another extra item because that's the last one
    if (scrollTo && scrollTo === items.length - 1) {
      scrollToIndex(scrollTo);
    }
  }, []);
  
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col">
        {headerSection && !slidesOnly 
          ? headerSection 
          : (
            <HeaderSection 
              title={title} 
              description={description} 
              seeAllButton={seeAllButton}
            />
        )}
        <div className={classNames(
            'w-full bg-ghost h-full relative',
            slidesOnly ? 'overflow-hidden' : 'grid ',
          )}
        >
          <ItemsScrollWrapper
            space={space}
            ref={containerRef}
            horizontalEdgeGap={horizontalEdgeGap}
            hideScrollbar={hideScrollbar}
            slidesOnly={slidesOnly}
          >
            {generateItems(
              items,
              itemRef,
              isRtl === true,
              firstVisibleIndex,
              lastVisibleIndex
            )}
          </ItemsScrollWrapper>

          {controls && (
            <>
              <div className='absolute top-1/2 translate-y-[-50%] -left-4 cursor-pointer' onClick={scrollLeftToStep}>
                {scrollToRightButton || (
                  <div className='rounded-full w-8 h-8 bg-gohan flex justify-center items-center shadow-[0_6px_6px_-6px_rgba(0,0,0,0.16),_0_0px_1px_rgba(0,0,0,0.4)]'>
                    <ControlsChevronLeft/>
                  </div>
                )}
              </div>
              <div className='absolute top-1/2 translate-y-[-50%] -right-4 cursor-pointer' onClick={scrollRightToStep}>
                {scrollToLeftButton || (
                  <div className='rounded-full w-8 h-8 bg-gohan flex justify-center items-center shadow-[0_6px_6px_-6px_rgba(0,0,0,0.16),_0_0px_1px_rgba(0,0,0,0.4)]'>
                    <ControlsChevronRight/>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Carousel;
