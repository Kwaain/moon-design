import { Table } from '@heathmont/moon-core-tw';
import { ArrowsUp, OtherFrame } from '@heathmont/moon-icons-tw';
import React from 'react';

const Example = () => {
const deleteRow = () => {
  console.log('delete')
}

const onIconClick = () => {
  console.log('Clicked right icon')
}

  const column = [
    {
      name: 'Name',
      iconRight: <ArrowsUp height={20} width={20} />,
      value: 'name',
    },
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Name',
      value: 'name',
    },
    {
      iconRight: <OtherFrame width={20} height={20} />,
      value: 'iconRight',
    },
  ];

  const dataTable = [
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
    },
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
    },
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
    },
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
      
    },
  ];

  return (
    <Table
      data={dataTable}
      column={column}
      onDelete={deleteRow}
      onIconClick={onIconClick}
    />
  );
};

export default Example;
