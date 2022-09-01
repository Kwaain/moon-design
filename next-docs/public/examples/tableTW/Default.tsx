import { Table } from '@heathmont/moon-core-tw';
import React, { useState } from 'react';

interface TableItem {
  id: string;
  name: string;
  iconRight?: React.ReactElement;
  isChecked?: boolean;
}

const Example = () => {
  const [tableData, setTableData] = useState<TableItem[]>([
    {
      name: 'Name #1',
      id: 'first-name',
    },
    {
      name: 'Name #2',
      id: 'last-name',
    },
    {
      name: 'Name #3',
      id: 'age',
    },
    {
      name: 'Name #4',
      id: 'visits',
    },
  ]);
  const column = [
    {
      name: 'First name',
      value: 'name',
    },
    {
      name: 'Last name',
      value: 'name',
    },
    {
      name: 'Age',
      value: 'name',
    },
    {
      name: 'Visits',
      value: 'name',
    },
    {
      name: 'Activity',
      value: 'name',
    }
  ];

  return (
    <Table
      data={tableData}
      column={column}
    />
  );
};

export default Example;
