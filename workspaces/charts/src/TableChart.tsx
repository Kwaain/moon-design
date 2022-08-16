import React, { ReactChildren, useRef } from 'react';
import { Transition } from 'react-transition-group';
import ChartIcons from './ChartIcons';
import { Header } from './private/Header';
import { Loader } from './private/Loader';
import { Panel } from './private/Panel';
import { Count, Table, Cell, TableItem, Value } from './private/Table';
import { Props } from './types/TableChartProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Container: React.FC<any> = ({
  isActive,
  children,
}: {
  isActive?: boolean;
  children: ReactChildren;
}) => {
  return (
    <div
      className={classNames(
        'flex flex-grow h-full overflow-auto',
        isActive ? '[tr>*]:text-goten' : ''
      )}
    >
      {children}
    </div>
  );
};

// const Container = styled.div<{ isActive: boolean }>(({ theme, isActive }) => ({
//   ...(isActive && {
//     'tr *': {
//       color: theme.colorNew.goten,
//     },
//     [`${CustomLoader} p`]: {
//       color: theme.colorNew.goten,
//     },
//   }),
// }));

const TableChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.TopPlayers />,
  isActive = false,
  loaderText = 'No data',
}) => {
  const isLoading = !data.length;
  const firstCellRef = useRef(null);

  return (
    <Panel
      isUpdating={isUpdating}
      isActive={isActive}
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header isActive={isActive} icon={icon} title={title} filter={filter} />
        {isLoading ? (
          <Loader
            icon={<ChartIcons.BarChartLoading />}
            title={loaderText}
            color={isActive ? 'gohan.100' : 'trunks.100'}
          />
        ) : (
          <Container isActive={isActive}>
            <Table>
              {data.map((item, index) => (
                <Transition
                  nodeRef={firstCellRef}
                  key={index}
                  in={true}
                  appear
                  timeout={100 * index}
                >
                  {(state) => (
                    <>
                      <Cell
                        ref={firstCellRef}
                        opacity={state === 'entered' ? 1 : 0}
                      >
                        {/* dodaj na cout text-trunks */}
                        <Count>{index + 1}</Count>
                      </Cell>
                      <Cell wide opacity={state === 'entered' ? 1 : 0}>
                        <TableItem>{item.label}</TableItem>
                      </Cell>
                      <Cell align="right" opacity={state === 'entered' ? 1 : 0}>
                        <Value>{item.value}</Value>
                      </Cell>
                    </>
                  )}
                </Transition>
              ))}
            </Table>
          </Container>
        )}
      </>
    </Panel>
  );
};

export default TableChart;
