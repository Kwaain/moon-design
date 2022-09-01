import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Default from '../../public/examples/tableTW/Default';
import useExamples from '../../utils/useExamples';
import PropsTable from "../../components/PropsTable";

export default function PageTable() {
  const examples = useExamples('tableTW');
  return (
    <>
      <ComponentPageDescription title="Table">
        <p className="w-[416px] text-moon-16 leading-6">
          Tables are great for presenting information with a clear, repeating
          structure. Our users are busy and may not want to read long sections
          of text. Breaking structured data into tables can help them scan it
          and find what they need to make informed decisions.
          <br />
          <br /> While tables present a clear structure, they are not good for
          designing layouts. Use them only when data you are presenting cells
          for a tabular structure, for example prices for various travel dates
          or multiple options for baggage.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'width',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Width of the table',
          },
          {
            name: 'height',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Height of the table',
          },
          {
            name: 'maxWidth',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Max width of the table',
          },
          {
            name: 'maxHeight',
            type: 'string | number',
            required: false,
            default: '-',
            description: 'Max height of the table',
          },
          {
            name: 'withFooter',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Display table footer',
          },
          {
            name: 'selectable',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Allow rows to be selected',
          },
          {
            name: 'getOnRowSelect',
            type: 'function',
            required: false,
            default: '-',
            description: 'Callback on selected row',
          },
          {
            name: 'getOnRowClickHandler',
            type: 'function',
            required: false,
            default: '-',
            description: 'Callback on clicked row',
          },
        ]}
      />
    </>
  );
}
