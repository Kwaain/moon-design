import React from 'react';
const ChartArea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 25.5h19M7.23 15.27l4.385-3.655 2.924 2.193L24.769 6.5v15.34H7.231v-6.57z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChartArea;
