import React from 'react';
import { useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import ChartIcons from './ChartIcons';
import { Header } from './private/Header';
import { Loader } from './private/Loader';
import { Panel } from './private/Panel';
import { getAxisPosition, getBarChartData } from './private/utils';
import { VerticalBar } from './private/VerticalBar';
import { Props } from './types/VerticalBarChartProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Container: React.FC = ({ children }) => {
  return (
    <div className={classNames('flex grow h-full overflow-hidden')}>
      {children}
    </div>
  );
};

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
