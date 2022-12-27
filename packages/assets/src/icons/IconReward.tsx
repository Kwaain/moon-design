import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.025 15.149a.4.4 0 10-.76.248l.76-.248zM11.84 22l-.38.124a.4.4 0 00.6.21L11.84 22zm3.715-2.465l.024-.4a.4.4 0 00-.246.066l.222.334zm4.445.27l-.024.399a.4.4 0 00.402-.532l-.378.132zm-1.973-6.844a.4.4 0 10-.755.264l.755-.264zm-2.977 6.617a.4.4 0 10.757-.26l-.757.26zm-.589-4.184a.4.4 0 10-.756.26l.756-.26zm-2.927 6.93a.4.4 0 10.443-.666l-.443.666zm-3.088-2.529l.22-.333a.4.4 0 00-.245-.066l.025.4zM4 20.066l-.382-.119a.4.4 0 00.406.518L4 20.065zm2.757-7.517a.4.4 0 00-.764-.237l.764.237zm1.497 7.088a.4.4 0 00.762.244l-.762-.244zm1.959-3.488a.4.4 0 10-.762-.244l.762.244zm8.319-7.323c0 3.55-2.864 6.426-6.394 6.426v.8c3.975 0 7.194-3.237 7.194-7.226h-.8zm-6.394 6.426c-3.529 0-6.393-2.875-6.393-6.426h-.8c0 3.989 3.219 7.226 7.193 7.226v-.8zM5.745 8.825c0-3.55 2.864-6.425 6.393-6.425v-.8c-3.974 0-7.193 3.237-7.193 7.225h.8zM12.138 2.4c3.53 0 6.394 2.875 6.394 6.425h.8c0-3.988-3.219-7.225-7.194-7.225v.8zm4.39 6.425c0 2.432-1.964 4.401-4.383 4.401v.8c2.864 0 5.183-2.33 5.183-5.2h-.8zm-4.383 4.401c-2.42 0-4.383-1.969-4.383-4.4h-.8c0 2.87 2.319 5.2 5.183 5.2v-.8zm-4.383-4.4c0-2.433 1.964-4.402 4.383-4.402v-.8c-2.864 0-5.183 2.33-5.183 5.201h.8zm4.383-4.402c2.42 0 4.383 1.97 4.383 4.401h.8c0-2.87-2.32-5.2-5.183-5.2v.8zM9.868 8.825v.005a.012.012 0 01-.007.006H9.86v.8a.81.81 0 00.809-.81h-.8zm-.01.012h-.002a.012.012 0 01-.006-.006l-.001-.006h-.8c0 .447.36.812.81.812v-.8zm-.009-.012V8.82a.012.012 0 01.007-.006h.003v-.8a.81.81 0 00-.81.811h.8zm.01-.011h.002l.004.003a.012.012 0 01.002.003l.001.005h.8a.81.81 0 00-.81-.811v.8zm2.253.011a.012.012 0 01-.007.011h-.003v.8a.81.81 0 00.81-.81h-.8zm-.01.012H12.1l-.003-.003a.015.015 0 01-.002-.004l-.001-.005h-.8c0 .447.36.812.81.812v-.8zm-.01-.012l.002-.005.002-.003a.011.011 0 01.003-.003h.003v-.8a.81.81 0 00-.81.811h.8zm.01-.011h.003l.003.003a.012.012 0 01.004.009h.8a.81.81 0 00-.81-.812v.8zm2.254.011a.012.012 0 01-.007.011h-.003v.8a.81.81 0 00.81-.81h-.8zm-.01.012h-.003a.01.01 0 01-.003-.003.012.012 0 01-.003-.009h-.8c0 .447.36.812.81.812v-.8zm-.01-.012a.012.012 0 01.004-.008.01.01 0 01.003-.003h.003v-.8a.81.81 0 00-.81.811h.8zm.01-.011h.003l.003.003a.012.012 0 01.004.009h.8a.81.81 0 00-.81-.812v.8zm-5.081 6.583l2.194 6.727.76-.248-2.194-6.727-.76.248zm2.796 6.936l3.715-2.465-.443-.666-3.715 2.465.443.666zm3.47-2.399l4.445.27.048-.799-4.445-.27-.049.8zm4.847-.262l-2.351-6.711-.755.264 2.35 6.711.756-.264zm-4.571-.353l-1.346-3.925-.756.26 1.345 3.924.757-.26zm-3.83 2.339l-3.31-2.196-.443.667 3.31 2.195.443-.666zM8.42 19.396l-4.445.27.048.798 4.446-.27-.049-.798zm-4.039.788l2.375-7.636-.764-.237-2.375 7.635.764.238zm4.634-.304l1.197-3.732-.762-.244-1.197 3.732.762.244z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconReward =
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
export default IconReward;
