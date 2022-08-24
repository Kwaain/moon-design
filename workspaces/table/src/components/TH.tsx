import React from 'react';
import { ColorNames } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const TH: React.FC<THProps> = ({ headerBackgroundColor, children }) => {
  return (
    <div
      className={classNames(
        'p-2 relative text-[12px]',
        `after:content-[""] after:absolute after:w-[1px] after:bg-beerus after:h-[70%] after:b-[15%] after:r-0`,
        'last:br-0'
      )}
      style={{
        fontSize: rem(12),
        color: 'rgb(var(--trunks))',
        backgroundColor: `rgb(var(--${headerBackgroundColor}))`,
      }}
    >
      {children}
    </div>
  );
};

// '.resizer': {
//   display: 'inline-block',
//   width: rem(8),
//   height: '100%',
//   position: 'absolute',
//   right: 0,
//   top: 0,
//   zIndex: 1,
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     width: '1px',
//     height: '70%',
//     bottom: '15%',
//     right: 0,
//   },
//   '&.isResizing': {
//     '&::after': {
//       background: colorNew.piccolo,
//     },
//   },
// },

type THProps = {
  headerBackgroundColor?: ColorNames;
};

export default TH;
