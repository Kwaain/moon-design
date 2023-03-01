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
      d="M15.625 17.796L7.862 14.36a1.328 1.328 0 00-1.744.644c-.3.65-.007 1.416.656 1.71l6.783 3.028m-5.312-2.371c-.663-.295-1.472.007-1.772.657-.3.65-.007 1.415.656 1.71l6.298 2.813m-4.334-1.936c-.663-.294-1.479.003-1.778.653-.3.65-.007 1.415.656 1.71l7.267 3.243.866.345c2.958 1.177 6.339-.116 7.706-2.945.26-.536.41-.842.697-1.449.741-1.567.218-3.72-1.166-4.781l-.038-.03c-1.709-1.63-2.792-3.744-3.334-4.992-.268-.617-.988-.916-1.636-.676h-.002c-.709.262-1.039 1.054-.714 1.715l1.53 3.089-8.733-3.866a1.328 1.328 0 00-1.743.643c-.3.65.001 1.445.664 1.74m7.305-4.242l-5.517-4.457a1.322 1.322 0 00-1.846.175 1.285 1.285 0 00.187 1.823l5.744 4.673m-4.505-3.663a1.355 1.355 0 00-1.872.184c-.4.483-.368 1.219.019 1.688m16.716 6.279c.667-1.32.569-3.083-.323-4.25l-.029-.039c-1.22-2.016-1.713-4.341-1.91-5.687a1.282 1.282 0 00-1.4-1.075H21.9c-.75.071-1.275.754-1.134 1.475l.67 3.382-7.406-5.984a1.322 1.322 0 00-1.846.175 1.317 1.317 0 00.183 1.85"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherClaps =
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
export default OtherClaps;
