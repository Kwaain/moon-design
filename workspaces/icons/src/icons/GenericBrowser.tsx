import React from 'react';
const GenericBrowser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 13.077h18.683M10 10.105a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0zm3 0a.5.5 0 11-1 0 .5.5 0 011 0zM22.577 6.5H9.423A2.923 2.923 0 006.5 9.423v13.154A2.923 2.923 0 009.423 25.5h13.154a2.923 2.923 0 002.923-2.923V9.423A2.923 2.923 0 0022.577 6.5z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default GenericBrowser;
