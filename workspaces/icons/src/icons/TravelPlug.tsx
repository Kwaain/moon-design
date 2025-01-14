import React from 'react';
const TravelPlug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 26v-5.16M11.937 6v5.353M20.063 6v5.353M12.75 20.84h6.5c.862 0 1.689-.34 2.298-.945.61-.605.952-1.426.952-2.282v-6.26h-13v6.26c0 .856.342 1.677.952 2.282.61.605 1.436.945 2.298.945z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default TravelPlug;
