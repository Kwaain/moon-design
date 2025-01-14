import React from 'react';
const GenericIdea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.25 25.5h7.5m-1.5-8.77c0 1.212-1.007 2.193-2.25 2.193s-2.25-.981-2.25-2.192M8.5 13.645C8.5 9.3 11.858 6.5 16 6.5c4.142 0 7.5 2.8 7.5 7.146 0 3.238-2.804 5.81-3.563 7.954-.184.52-.635.977-1.187.977h-5.5c-.552 0-1.003-.456-1.187-.977-.76-2.145-3.563-4.716-3.563-7.955z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
export default GenericIdea;
