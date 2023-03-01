import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.391 9.572l-1.043 3.087m-1.044-3.087l-1.043 3.087M9.217 9.572L8.174 12.66m4.696 5.658l1.184-3.112a1.568 1.568 0 011.466-1.003h4.654m-4.696 0c-.37 1.585.522 2.572.522 2.572M26.956 8.03V7H24.87v1.029H10.783L9.739 7H7.652v1.543c-.375 0-.803-.03-1.043.515h-.522c-.647-.638-1.044.514-1.044.514l1.044 1.544v1.028c-.136.206-.386.402-.522.515-.433.355-1.043.283-1.043.514 0 .53-.157 1.543 1.043 1.543.97 0 1.044 1.276 1.044 2.058 0 .617-.809 1.595-.981 2.022-.167.427-1.08 2.696-1.32 3.472C4.068 23.05 4 23.55 4 23.971 4 24.393 4.657 25 5.043 25h5.74c1.043 0 .088-1.605.521-2.572.475-1.06 1.117-3.05 1.566-4.116h3.86c.825 0 1.545-.288 1.879-1.029l1.565-3.086h2.609c.761 0 1.043-.494 1.043-1.029h3.13c.564 0 1.044-.396 1.044-1.029V8.03h-1.044z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportRainbowSix =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default SportRainbowSix;
