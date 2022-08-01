import React from 'react';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import ChartIcons from './ChartIcons';
import { Header } from './private/Header';
import { Loader } from './private/Loader';
import { Map } from './private/Map';
import { Panel } from './private/Panel';
import { getAxisPosition, getBarChartData } from './private/utils';
import { VerticalBar } from './private/VerticalBar';
import { Props } from './private/types/GeoMapChartTypes';

const Container = styled.div({
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

const BarChartContainer = styled.div({
  flex: 1,
  height: '100%',
  overflow: 'auto',
});

const GeoMapChart: React.FC<Props> = ({
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
            <Loader
              icon={<ChartIcons.GeoMapChartLoading />}
              title={loaderText}
            />
          ) : (
            <>
              <BarChartContainer>
                <VerticalBar
                  axisPosition={getAxisPosition(data)}
                  data={chartData}
                />
              </BarChartContainer>
              <Map data={chartData} />
            </>
          )}
        </Container>
      </>
    </Panel>
  );
};

export default GeoMapChart;
