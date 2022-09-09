import React, {ReactElement, useState} from "react";
import {Carousel} from "@heathmont/moon-components";
import ChevronLeft from "../../pages/templates/icons/ChevronLeft";
import ChevronRight from "../../pages/templates/icons/ChevronRight";
import ExploreCarouselItem from "./explore-carousel-item";
import { Tabs, TabLinkFill } from '@heathmont/moon-core';

interface Props {
  title: ReactElement;
  subtitle: ReactElement;
  carouselItems: Array<Array<{ title: string; image: any;}>>;
  carouselItemBackground?: string;
  tabTitle: string;
  tabTitleSecond: string; 
}

const Explore = ({
 title,
 subtitle,
 carouselItems = [],
 carouselItemBackground = 'gohan',
 tabTitle,
 tabTitleSecond
}: Props) => {
  return (
    <div className="flex flex-col items-center sm:flex-row-reverse sm:flex-wrap sm:justify-center">
      <div className="flex flex-col justify-center w-[380px] sm:self-stretch sm:w-[100%] sm:mb-[12] lg:mb-20 lg:pl-9 lg:ml-16 lg:px-0 xl:w-[30%] 2xl:ml-24">
        <Tabs
          isContainer
          isSegmented={true}
          items={[
            <TabLinkFill href="#2">{tabTitle}</TabLinkFill>,
            <TabLinkFill href="#3">{tabTitleSecond}</TabLinkFill>,
          ]}
          
        />
        {title}
        {subtitle}
      </div>
      <div className="flex items-center justify-center w-[410px] max-w-[100vw] py-8 sm:h-full sm:ml-0 sm:px-5 lg:w-[630px] lg:h-[684px]">
        <Carousel
          step={1}
          scrollToLeftButton={({
            scrollToStep,
            disabled,
          }: {
            scrollToStep: any;
            disabled: boolean;
          }) =>
            disabled ? (
              <></>
            ) : (
              <div
                className={`flex justify-center items-center w-8 h-8 bg-${carouselItemBackground} absolute top-[50%] -translate-y-[50%] -translate-x-[150%] rounded-full`}
                onClick={() => {
                  if (!disabled) scrollToStep();
                }}
              >
                <ChevronLeft fontSize="1.5rem" />
              </div>
            )
          }
          scrollToRightButton={({
            scrollToStep,
            disabled,
          }: {
            scrollToStep: any;
            disabled: boolean;
          }) =>
            disabled ? (
              <></>
            ) : (
              <div
                className={`flex justify-center items-center w-8 h-8 bg-${carouselItemBackground} absolute top-[50%] right-0 -translate-y-[50%] translate-x-[150%] rounded-full`}
                onClick={() => {
                  if (!disabled) scrollToStep();
                }}
              >
                <ChevronRight fontSize="1.5rem" />
              </div>
            )
          }
          items={carouselItems?.map((items) => (
            <ExploreCarouselItem items={items} />
          ))}
        />
      </div>
    </div>
  );
};

export default Explore;
