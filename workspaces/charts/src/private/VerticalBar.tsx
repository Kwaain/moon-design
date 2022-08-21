import React, { useRef } from 'react';
import { rem } from '@heathmont/moon-utils';
import { Transition } from 'react-transition-group';
import { Cell, Count, Table, TableItem, Value } from './Table';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const Container: React.FC = ({ children }) => {
  return <div className={classNames('w-full h-full')}>{children}</div>;
};

export const Bar: React.FC<any> = ({ isNegative, axisPosition, children }) => {
  return (
    <div
      className={classNames(
        'relative h-5 block',
        axisPosition === 'left' ? 'w-full' : '',
        // axisPosition === 'center' ? `w-[50%]` : '',
        axisPosition === 'center' && isNegative
          ? 'rotate-180'
          : 'translate-x-full',
        axisPosition === 'right' ? 'w-full rotate-180' : ''
      )}
      style={
        axisPosition === 'center'
          ? { width: '50%' }
          : axisPosition === 'right'
          ? { width: '100%', transform: 'rotate(180deg)' }
          : axisPosition === 'center' && isNegative
          ? { transform: 'rotate(180deg)' }
          : { transform: 'translateX(100%)' }
      }
    >
      {children}
    </div>
  );
};

// const Line = styled.div(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   height: '100%',
//   width: 0,
//   borderRadius: `0 ${rem(4)} ${rem(4)} 0`,
//   willChange: 'width',
//   transition: `width ${theme.newTokens.transition.slow}`,
// }));

export const Line: any = ({ children }: any) => {
  return (
    <div
      className={classNames('absolute top-0 bg-trunks left-0 h-full w-0')}
      style={{
        borderRadius: `0 ${rem(4)} ${rem(4)} 0`,
        willChange: 'width',
        transition: `width 0.4s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

// const Center = styled.div(({ theme }) => ({
//   position: 'absolute',
//   top: 0,
//   left: '50%',
//   transform: 'translateX(-50%)',
//   height: '100%',
//   width: rem(1),
//   background: theme.colorNew.beerus,
// }));

export const Center: React.FC = ({ children }) => {
  return (
    <div
      className={classNames('absolute top-0 left-1/2 h-full w-4 bg-beerus')}
      style={{ transform: 'translateX(-50%)' }}
    >
      {children}
    </div>
  );
};

type Props = {
  data: {
    label: string | React.ReactNode;
    value: number;
    opacity: number;
    percent: number;
    isNegative: boolean;
    color: string;
  }[];
  axisPosition: 'left' | 'center' | 'right';
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
