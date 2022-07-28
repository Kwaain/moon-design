// @ts-nocheck
import React from 'react';
import { Filter, VerticalBarChart } from '@heathmont/moon-charts-tw';
import { SingleItemSelect } from '@heathmont/moon-components';
//TODO 10.

const Example = () => {
  const dataPositive = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 80 },
    { label: 'Argentina', code: 'ARG', value: 60 },
    { label: 'USA', code: 'USA', value: 40 },
  ];

  const dataMix = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 20 },
    { label: 'Argentina', code: 'ARG', value: -60 },
    { label: 'USA', code: 'USA', value: -80 },
  ];

  const dataNegative = [
    { label: 'Estonia', code: 'EST', value: -40 },
    { label: 'Russia', code: 'RUS', value: -60 },
    { label: 'Belarus', code: 'BLR', value: -80 },
    { label: 'Argentina', code: 'ARG', value: -100 },
    { label: 'USA', code: 'USA', value: -120 },
  ];

  const filter = (
    <Filter title="by GGR">
      {() => (
        <SingleItemSelect
          onChange={() => {}}
          value="ggr"
          options={[
            { label: 'Active players', value: 'actives' },
            { label: 'GGR', value: 'ggr' },
            { label: 'Bets', value: 'bets' },
          ]}
        />
      )}
    </Filter>
  );

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <VerticalBarChart
        title="Top Countries"
        data={dataPositive}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
      <VerticalBarChart
        title="Top Countries"
        data={dataMix}
        filter={filter}
        isUpdating={true}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
      <VerticalBarChart
        title="Top Countries"
        data={dataNegative}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

export default Example;
