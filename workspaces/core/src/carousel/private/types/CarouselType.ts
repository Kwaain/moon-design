export type SpaceProps = keyof Space;

export type Space = {
  xsmall: number /* px */;
  small: number /* px */;
  default: number /* px */;
  medium: number /* px */;
  large: number /* px */;
  xlarge: number /* px */;
};

export default interface CarouselProps {
  items: any[];
  step: number;
  slidesOnly?: boolean;
  controls?: boolean;
  slideClassName?: string;
  indicators?: boolean;
  headerSection?: JSX.Element;
  title?: string | JSX.Element;
  seeAllButton?: boolean;
  description?: string | JSX.Element;
  headerControls?: boolean;
  scrollToRightButton?: JSX.Element | string;
  scrollToLeftButton?: JSX.Element | string;
  customIndicator?: JSX.Element;
  scaleOutOnFocus?: boolean;
  scaleOutValue?: string;
  indicatorsClassName?: string;
  controlsClassName?: string;
  spacing?: number;
  scrollTo?: number;
  selectedIndex?: number;
  hideScrollbar?: boolean;
  horizontalEdgeGap?: number | boolean;
  space?: SpaceProps;
  isRtl?: boolean;
};


// items: any;
//   scrollToLeftButton?: any;
//   scrollToRightButton?: any;
//   scrollLeftCaption?: any;
//   scrollRightCaption?: any;
//   step?: number;
//   scrollTo?: number;
//   selectedIndex?: number;
//   space?: SpaceProps | CSSObject['margin'];
//   horizontalEdgeGap?: number | boolean;
//   hideScrollbar?: boolean;
//   isRtl?: boolean;