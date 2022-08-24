import React from 'react';
import { rem } from '@heathmont/moon-utils';

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const TD: React.FC<TDProps> = ({ selectable, children }) => {
  return (
    <div
      className={classNames(
        'p-3 pr-1 relative box-border',
        'first:border-l-[4px] first:border-solid first:border-transparent first:rounded-tl-[4px] first:rounded-bl-[4px]',
        'last:border-r-[4px] last:border-solid last:border-transparent last:rounded-tr-[4px] last:rounded-br-[4px]', //chain::afer:w-0
        `after:content-[""] after:absolute after:w-[1px] after:bg-beerus after:h-3/5 after:b-[20%] after:r-0`
      )}
      style={
        selectable
          ? {
              paddingLeft: rem(12),
              color: 'rgb(var(--bulma))',
              borderTop: `${rem(4)} solid transparent`,
              borderBottom: `${rem(4)} solid transparent`,
            }
          : {
              paddingLeft: rem(4),
              color: 'rgb(var(--bulma))',
              borderTop: `${rem(4)} solid transparent`,
              borderBottom: `${rem(4)} solid transparent`,
            }
      }
    >
      {children}
    </div>
  );
};

type TDProps = {
  selectable?: boolean;
};

export default TD;
