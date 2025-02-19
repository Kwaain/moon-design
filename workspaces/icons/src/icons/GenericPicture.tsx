import React from 'react';
const GenericPicture = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.115 25.5l-4.019-4.02m8.404.366l-4.385-4.384-4.019 4.019m0 0l-6.211-6.212-3.654 3.654-.731.73m0 0V9.424A2.923 2.923 0 019.423 6.5h13.154A2.923 2.923 0 0125.5 9.423v13.154a2.923 2.923 0 01-2.923 2.923H9.423A2.923 2.923 0 016.5 22.577v-2.923zm16.077-8.038a2.192 2.192 0 11-4.385 0 2.192 2.192 0 014.385 0z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default GenericPicture;
