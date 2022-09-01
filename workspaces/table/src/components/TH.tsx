import React from 'react';
import { ColorNames } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';

const classNames = (...classes: string[]) => {
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

type THProps = {
  headerBackgroundColor?: ColorNames;
};

export default TH;
