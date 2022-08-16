import React from 'react';
import styled from 'styled-components';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export type CellProps = {
  ref?: React.RefObject<HTMLInputElement>;
  wide?: boolean;
  align?: 'left' | 'center' | 'right';
  opacity?: number;
};

export const Cell: React.FC<CellProps> = ({
  wide,
  align,
  opacity,
  children,
}) => {
  return (
    <div
      className={classNames(
        'py-1 px-2 relative opacity-100',
        'transition-[opacity] ease-in-out duration-600',
        opacity ? `opacity-${opacity}` : 'opacity-100',
        align ? `text-${align}` : 'text-left',
        wide ? `w-full` : 'w-auto'
      )}
    >
      {children}
    </div>
  );
};

export const Table = styled.div<{ withAdditionalCell?: boolean }>(
  ({ withAdditionalCell }) => ({
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: withAdditionalCell
      ? 'auto auto 1fr auto'
      : 'auto 1fr auto',
    gridTemplateRows: 'repeat(5, 1fr)',
    justifyItems: 'stretch',
    alignItems: 'center',
    // ...(withAdditionalCell
    //   ? {
    //       [Cell]: {
    //         '&:nth-child(4n  + 1)': {
    //           paddingLeft: 0,
    //         },
    //         '&:nth-child(4n)': {
    //           paddingRight: 0,
    //         },
    //         '&:nth-child(4n + 3)': {
    //           alignSelf: 'stretch',
    //           display: 'flex',
    //           alignItems: 'center',
    //         },
    //       },
    //     }
    //   : {
    //       [Cell]: {
    //         '&:nth-child(3n  + 1)': {
    //           paddingLeft: 0,
    //         },
    //         '&:nth-child(3n)': {
    //           paddingRight: 0,
    //         },
    //       },
    //     }),
  })
);

// popravi margin left
export const TableItem: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'flex items-center',
        '[&>*]:ml-2',
        '[&>:first-child]:ml-0'
      )}
    >
      {children}
    </div>
  );
};

export const Count: React.FC = ({ children }) => {
  return (
    <span className={classNames('text-xs leading-5 text-trunks')}>
      {children}
    </span>
  );
};

export const Value: React.FC = ({ children }) => {
  return <div className={classNames('whitespace-nowrap')}>{children}</div>;
};
