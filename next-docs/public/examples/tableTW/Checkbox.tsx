import { Table } from '@heathmont/moon-core-tw';
import React, {useState} from 'react';

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
      isCheckbox
      data={tableData}
      column={column}
      onSelectAll={(items: TableItem[], selected: boolean) => {
        setTableData(
          items.map((item: TableItem) => {
            return {
              ...item,
              isChecked: selected,
            };
          })
        );
      }}
      onSelectItem={(item: TableItem, selected: boolean) => {
        console.log('onSelectItem - item', item);
        setTableData(
          tableData.map((tableItem: TableItem) => {
            if (tableItem.id === item.id) {
              return {
                ...tableItem,
                isChecked: selected,
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
