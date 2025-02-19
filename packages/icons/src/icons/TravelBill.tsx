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
      d="M8 6l.34-.367A.5.5 0 007.5 6H8zm1.625 1.5l-.34.367a.5.5 0 00.68 0l-.34-.367zM11.25 6l.34-.367a.5.5 0 00-.68 0l.34.367zm1.625 1.5l-.34.367a.5.5 0 00.68 0l-.34-.367zM14.5 6l.34-.367a.5.5 0 00-.68 0L14.5 6zm1.625 1.5l-.34.367a.5.5 0 00.68 0l-.34-.367zM17.75 6l.34-.367a.5.5 0 00-.68 0l.34.367zm1.625 1.5l-.34.367a.5.5 0 00.68 0l-.34-.367zM21 6h.5a.5.5 0 00-.84-.367L21 6zm-.5 14a.5.5 0 001 0h-1zM14 22v-.5a.5.5 0 00-.5.5h.5zm11.5 0h.5v-.5h-.5v.5zM11 16.8a.5.5 0 000 1v-1zm6.5 1a.5.5 0 100-1v1zM11 19a.5.5 0 000 1v-1zm5.5 1a.5.5 0 000-1v1zm-.033-8.969a.5.5 0 100-1v1zM12.8 13.47a.5.5 0 000 1v-1zM15.133 9.5a.5.5 0 00-1 0h1zm-1 5.5a.5.5 0 101 0h-1zM7.661 6.367l1.625 1.5.678-.734-1.625-1.5-.678.734zm2.303 1.5l1.625-1.5-.678-.734-1.625 1.5.678.734zm.947-1.5l1.625 1.5.678-.734-1.625-1.5-.678.734zm2.303 1.5l1.625-1.5-.678-.734-1.625 1.5.678.734zm.947-1.5l1.625 1.5.678-.734-1.625-1.5-.678.734zm2.303 1.5l1.625-1.5-.678-.734-1.625 1.5.678.734zm.947-1.5l1.625 1.5.678-.734-1.625-1.5-.678.734zm2.303 1.5l1.625-1.5-.678-.734-1.625 1.5.678.734zM7.5 6v16h1V6h-1zm13 0v14h1V6h-1zm-7 16a2.5 2.5 0 01-2.5 2.5v1a3.5 3.5 0 003.5-3.5h-1zM11 24.5A2.5 2.5 0 018.5 22h-1a3.5 3.5 0 003.5 3.5v-1zm3-2h11.5v-1H14v1zm11-.5a2.5 2.5 0 01-2.5 2.5v1A3.5 3.5 0 0026 22h-1zm-2.5 2.5H11v1h11.5v-1zM11 17.8h6.5v-1H11v1zm0 2.2h5.5v-1H11v1zm2.717-8.25c-.261 0-.417-.19-.417-.36h-1c0 .781.665 1.36 1.417 1.36v-1zm-.417-.36c0-.168.156-.359.417-.359v-1c-.752 0-1.417.579-1.417 1.36h1zm.417-.359h.916v-1h-.916v1zm.916 0h1.834v-1h-1.834v1zm-.916 1.719h1.833v-1h-1.833v1zm1.833 1.719c.752 0 1.417-.579 1.417-1.36h-1c0 .169-.156.36-.417.36v1zm1.417-1.36c0-.78-.665-1.359-1.417-1.359v1c.261 0 .417.19.417.36h1zm-1.417.36h-.917v1h.917v-1zm-.917 0H12.8v1h1.833v-1zm.5-2.938V9.5h-1v1.031h1zm0 4.469v-1.031h-1V15h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelBill =
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
export default TravelBill;
