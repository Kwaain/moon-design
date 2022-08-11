import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import classNames from '../../../../next-docs/utils/classNames';
import { Props } from '../types/VerticalBarProps';
import { Cell, Count, Table, TableItem, Value } from './Table';

export const Container: React.FC = ({ children }) => {
  return <div className={classNames('w-full h-full')}>{children}</div>;
};
export type BarProps = {
  isNegative: boolean;
  axisPosition: 'left' | 'center' | 'right';
};

export const Bar: React.FC<BarProps> = ({
  isNegative,
  axisPosition,
  children,
}) => {
  return (
    <div
      className={classNames(
        'relative h-5 block',
        axisPosition === 'left' ? 'w-full' : '',
        axisPosition === 'center' ? `w-1/2` : '',
        axisPosition === 'center' && isNegative
          ? 'rotate-180'
          : 'translate-x-full',
        axisPosition === 'right' ? 'w-full rotate-180' : ''
      )}
    >
      {children}
    </div>
  );
};

export const Line: any = ({ children }: any) => {
  return (
    <div
      className={classNames(
        'absolute top-0 left-0 h-full w-0 rounded-[0 1rem 1rem 0] will-change-[width] transition-[width] ease-in-out duration-600'
      )}
    >
      {children}
    </div>
  );
};

export const Center: React.FC = ({ children }) => {
  return (
    <div
      className={classNames(
        'absolute top-0 left-1/2 -translate-x-1/2	h-full w-px bg-beerus'
      )}
    >
      {children}
    </div>
  );
};

export const VerticalBar: React.FC<Props> = ({ data, axisPosition }) => {
  const lineRef = useRef(null);
  const minWidth = 5;

  return (
    <Container>
      <Table withAdditionalCell>
        {data.map(
          (
            { label, value, opacity, percent, isNegative, color },
            index: number
          ) => {
            const percentWidth = percent < minWidth ? minWidth : percent;

            return (
              // eslint-disable-next-line
              <React.Fragment key={`${index}-${value}`}>
                <Cell>
                  <Count>{index + 1}</Count>
                </Cell>
                <Cell>
                  <TableItem>{label}</TableItem>
                </Cell>
                <Cell wide>
                  {axisPosition === 'center' && <Center />}
                  <Bar isNegative={isNegative} axisPosition={axisPosition}>
                    <Transition nodeRef={lineRef} in appear timeout={0}>
                      {(state) => (
                        <Line
                          ref={lineRef}
                          style={{
                            width: `${
                              state === 'entered' ? percentWidth : minWidth
                            }%`,
                            opacity,
                            background: color,
                          }}
                        />
                      )}
                    </Transition>
                  </Bar>
                </Cell>
                <Cell>
                  <Value>{value}</Value>
                </Cell>
              </React.Fragment>
            );
          }
        )}
      </Table>
    </Container>
  );
};
