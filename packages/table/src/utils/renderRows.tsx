import React, { Fragment } from 'react';
import { ColorNames } from '@heathmont/moon-themes';
import { Cell, Row, UseExpandedRowProps } from 'react-table';
import BodyTR from '../components/BodyTR';
import SelectedTR from "../components/SelectedTR";
import TD from '../components/TD';
import { RowSubComponentProps } from '../Table';

type RenderRowsProps<D extends object = {}> = {
  rows: Row<D>[];
  prepareRow: (row: Row<D>) => void;
  evenRowBackgroundColor: ColorNames;
  defaultRowBackgroundColor: ColorNames;
  getOnRowClickHandler: (
    row: Row<D>
  ) => ((row: Row<D>) => void | (() => void)) | undefined;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
};

const renderRows = ({
  rows,
  prepareRow,
  evenRowBackgroundColor,
  defaultRowBackgroundColor,
  getOnRowClickHandler,
  renderRowSubComponent,
}: RenderRowsProps) => {
  if (!rows) return;
  return rows.map((row: Row<{ isSelected?: boolean }>, index: number) => {
    prepareRow(row);
    const rowProps = row.getRowProps();
    const onRowClickHandler = getOnRowClickHandler
      ? getOnRowClickHandler(row)
      : () => undefined;
    const rowId = row.id ? row.id.split('.') : [];
    const nextRow = rows[index + 1];
    const nextRowItem = nextRow as Row;
    const nextRowId =
      nextRowItem && nextRowItem.id ? nextRowItem.id.split('.') : [];

    const mainRowIndex = Number(rowId[0]);
    const backgroundColor =
      mainRowIndex % 2 ? evenRowBackgroundColor : defaultRowBackgroundColor;

    const isLastNestedRow = rowId.length > nextRowId.length;
    const isLastRow = nextRowId.length === 0 || nextRowId.length === 1;
    const isSelected = row.original?.isSelected;

    const expandedRow = row as unknown as UseExpandedRowProps<{}>;

    const cells = row.cells.map((cell: Cell<{}, any>) => (
      <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
    ));
    const propsBodyTR = {
      ...rowProps,
      depth: expandedRow.depth,
      isExpanded: expandedRow.isExpanded,
      hasChildren: expandedRow.canExpand,
      hasParent: !!expandedRow.depth,
      isLastNestedRow: isLastNestedRow,
      isLastRow: isLastRow,
      isSelected: isSelected,
      backgroundColor: backgroundColor,
      onClick: onRowClickHandler ? () => onRowClickHandler(row) : undefined
    };

    return (
      <Fragment key={`${row.id}-${rowProps.key}`}>
        <BodyTR { ...propsBodyTR }>
          {cells}

          {isSelected && <SelectedTR>
            <BodyTR { ...propsBodyTR }>
              {cells}
            </BodyTR>
          </SelectedTR>}
        </BodyTR>

        {expandedRow.isExpanded && !!renderRowSubComponent
          ? renderRowSubComponent({ row, backgroundColor })
          : null}
      </Fragment>
    );
  });
};

export default renderRows;
