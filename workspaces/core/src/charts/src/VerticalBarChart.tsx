import React from 'react';
import { useTheme } from '../../../../../packages/icons/node_modules/@heathmont/moon-themes/lib';
import { themed } from '../../../../../packages/components/node_modules/@heathmont/moon-utils/lib';
import styled from 'styled-components';
import ChartIcons from './ChartIcons';
import { Header } from './private/Header';
import { Loader } from './private/Loader';
import { Panel } from './private/Panel';
import { getAxisPosition, getBarChartData } from './private/utils';
import { VerticalBar } from './private/VerticalBar';
import { Props } from './private/types/VerticalBarChartProps';

const Container = styled.div({
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

const VerticalBarChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.Countries />,
  positiveColor = 'krillin.100',
  negativeColor = 'chiChi.100',
  formatFn = ({ value }) => value,
  loaderText = 'No data',
}) => {
  const theme = useTheme();
  const isLoading = !data.length;

  const chartData = getBarChartData({
    data,
    formatFn,
    positiveColor: themed('color', positiveColor)(theme),
    negativeColor: themed('color', negativeColor)(theme),
  });

  return (
    <Panel
      isUpdating={isUpdating}
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header icon={icon} title={title} filter={filter} />
        <Container>
          {isLoading ? (
            <Loader icon={<ChartIcons.BarChartLoading />} title={loaderText} />
          ) : (
            <VerticalBar
              axisPosition={getAxisPosition(data)}
              data={chartData}
            />
          )}
        </Container>
      </>
    </Panel>
  );
};

export default VerticalBarChart;
