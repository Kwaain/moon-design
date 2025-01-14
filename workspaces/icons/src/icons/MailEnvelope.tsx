import React from 'react';
const MailEnvelope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 11l7.322 4.753a4 4 0 004.356 0L25.5 11m-19 0v10a2 2 0 002 2h15a2 2 0 002-2V11m-19 0a2 2 0 012-2h15a2 2 0 012 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default MailEnvelope;
