import React from 'react';

const TypeHelp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#TypeHelp_svg__filter0_d_4798_4677)">
      <path
        clipRule="evenodd"
        d="M14.752 19.803h2.474v2.395h-2.474v-2.395z"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <path
        clipRule="evenodd"
        d="M13.315 10.881c.606-.488 1.73-.875 2.685-.88 1.515-.01 2.311.455 3.026 1.15.689.67 1.005 1.352.954 2.4-.041.853-.268 1.348-.605 1.811-.198.281-.576.641-1.137 1.078l-.534.43c-.33.32-.474.463-.6.82-.093.266-.116.506-.12.922h-1.978c-.002-1.016-.018-1.375.09-1.813.107-.426.502-.734 1.064-1.17l.567-.447c.189-.14.494-.414.608-.58.209-.287.334-.683.351-1.026a1.53 1.53 0 00-.343-1.027c-.313-.39-.703-.638-1.466-.604a2.014 2.014 0 00-1.341.622c-.33.34-.474.904-.498 1.35H12.06c.063-1.484.354-2.312 1.255-3.036v0z"
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        d="M15.013 19.956h1.979v1.984h-1.98v-1.984zM13.515 10.86c.697-.448 1.342-.793 2.426-.793 1.617 0 1.983.242 2.812.904.75.599 1.207 1.376 1.207 2.48 0 .677-.364 1.408-.702 1.87-.197.282-.459.56-1.02.999l-.612.47c-.3.234-.598.588-.697.9-.062.198-.058.623-.062 1.039h-1.86c.031-.88.034-1.605.169-1.941.135-.336.483-.723 1.044-1.16l.547-.446c.187-.14.475-.354.589-.521.208-.286.389-.701.389-1.045 0-.396.022-.676-.209-1.002-.27-.378-.516-.794-1.678-.814-.905-.016-1.291.447-1.542.847-.252.402-.338.858-.338 1.29H12c.063-1.484.541-2.456 1.515-3.076z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="TypeHelp_svg__filter0_d_4798_4677"
        x={-2}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_4798_4677"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4798_4677"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default TypeHelp;