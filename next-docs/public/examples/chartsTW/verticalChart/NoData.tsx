// @ts-nochecka
import React from 'react';
import { Filter, VerticalBarChart } from '@heathmont/moon-charts-tw';
import { SingleItemSelect } from '@heathmont/moon-components';
//TODO 11.

const Example = () => {
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
    <VerticalBarChart
      title="Top Countries"
      data={[]}
      filter={filter}
      hasUpdates={true}
      onUpdate={() => {}}
      onShare={() => {}}
      onExpand={() => {}}
    />
  );
};

export default Example;
