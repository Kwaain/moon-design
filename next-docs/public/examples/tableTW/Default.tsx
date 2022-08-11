import { Table } from '@heathmont/moon-core-tw';
import {  OtherFrame } from '@heathmont/moon-icons-tw';
import React, { useEffect, useState } from 'react';

const Example = () => {
 const handleSelectAll = () => {};
 
  const onIconClick = () => {
    console.log('Clicked right icon')
  }

  const column = [
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
      name: 'Name',
      value: 'name',
    },
    {
      iconRight: <OtherFrame width={20} height={20}/>,
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
      useCheckbox
      onIconClick={onIconClick}
      handleSelectAll={handleSelectAll}
    />
  );
}

export default Example;
