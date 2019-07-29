import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.981 0C4.467 0 0 4.472 0 9.994c0 .325.012.65.05.974.012.113.037.225.05.35.025.187.05.387.087.587.025.138.063.275.1.425.037.162.075.325.125.475.05.15.1.312.15.462.05.137.1.262.15.4a8.229 8.229 0 00.373.812c.088.174.175.337.275.5.05.087.1.162.15.249l.337.525c.037.05.087.112.124.162a9.95 9.95 0 004.779 3.523.597.597 0 01.087.037c.462.15.936.275 1.423.363.087.012.162.025.25.037.486.075.985.125 1.496.125.512 0 1.01-.05 1.497-.125.088-.012.163-.025.25-.037.487-.088.96-.2 1.422-.363.038-.012.063-.025.088-.037a10.029 10.029 0 004.778-3.523c.038-.05.075-.1.113-.162.124-.175.236-.35.349-.525.05-.088.1-.162.15-.25.1-.162.187-.337.274-.512.05-.1.1-.212.15-.325.075-.162.137-.325.212-.487.05-.125.1-.262.15-.4.05-.15.1-.3.15-.462.05-.162.087-.312.124-.475.037-.137.075-.274.1-.424.037-.2.062-.388.087-.588.013-.112.038-.224.05-.35.025-.324.05-.636.05-.974C19.963 4.472 15.496 0 9.981 0zm0 17.989a7.954 7.954 0 01-6.138-2.886c.836-.45 1.859-.824 2.67-1.187 1.447-.65 1.297-1.049 1.347-1.586.013-.075.013-.138.013-.213-.512-.45-.924-1.074-1.198-1.798v-.013c0-.012-.012-.025-.012-.025a3.634 3.634 0 01-.15-.487c-.35-.063-.55-.437-.624-.787a1.57 1.57 0 01-.187-.862c.05-.512.25-.737.474-.837v-.075c0-.637.062-1.549.175-2.149.025-.162.062-.324.112-.487a3.64 3.64 0 011.26-1.861c.611-.475 1.485-.737 2.27-.737.774 0 1.648.25 2.271.737a3.64 3.64 0 011.26 1.861c.05.163.088.325.113.5.112.6.175 1.511.175 2.148v.088c.224.1.411.325.461.824.038.388-.124.725-.2.862-.074.338-.261.712-.598.775a2.997 2.997 0 01-.15.475c0 .012-.012.05-.012.05a4.462 4.462 0 01-1.173 1.773c0 .075.012.163.012.238.05.537-.15.937 1.31 1.586.811.363 1.834.75 2.67 1.187a8 8 0 01-6.15 2.886z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconProfile = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
