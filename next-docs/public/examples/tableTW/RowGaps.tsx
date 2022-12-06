import React from 'react';
import { Table } from '@heathmont/moon-table-tw';

const makeData = (length: number) => {
  return Array.from('_'.repeat(length)).map((_, index) => {
    return {
      firstName: 'Test',
      lastName: 'Test',
      age: <span>{Math.floor(index * 30)}</span>,
      visits: <span>{Math.floor(index * 100)}</span>,
      progress: <span>{Math.floor(index * 100)}</span>,
      status: Math.floor(index * 100),
      activity: Math.floor(index * 100),
    };
  });
};

const Example = () => {
  const columnsInitial = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Visits',
      accessor: 'visits',
    },
    {
      Header: 'Activity',
      accessor: 'activity',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ];

  const columns = React.useMemo(() => columnsInitial, []);
  const data = React.useMemo(() => makeData(2), []);

  return (
    <>
      <Table columns={columns} data={data} rowGap="gap-0" />
      <Table columns={columns} data={data} />
      <Table columns={columns} data={data} rowGap="gap-2" />
      <Table columns={columns} data={data} rowGap="gap-3" />
      <Table columns={columns} data={data} rowGap="gap-4" />
    </>
  );
};

export default Example;
