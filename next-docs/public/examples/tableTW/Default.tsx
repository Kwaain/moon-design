import { Table } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';
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
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
      id: '1',
    },
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
      id: '2',
    },
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
      id: '3',
    },
    {
      name: 'Name',
      iconRight: <OtherFrame width={20} height={20} />,
      id: '4',
    },
  ]); 

  const onIconClick = () => {
    console.log('Clicked right icon');
  };

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
      iconRight: <OtherFrame width={20} height={20} />,
      value: 'iconRight',
    },
  ];

  return (
    <Table
      data={tableData}
      column={column}
      isCheckbox
      onIconClick={onIconClick}
      onSelectAll={(items: TableItem[], selected: boolean) => {
        setTableData(
          items.map((item: TableItem) => {
            return {
              ...item,
              isChecked: !!selected,
            };
          })
        );
      }}
      onSelectItem={(item: TableItem, selected: boolean) => {
        setTableData(
          tableData.map((tableItem: TableItem) => {
            if (tableItem.id === item.id) {
              return {
                ...tableItem,
                isChecked: !!selected,
              };
            }

            return tableItem;
          })
        );
      }}
    />
  );
};

export default Example;
