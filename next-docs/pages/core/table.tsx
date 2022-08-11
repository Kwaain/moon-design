import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/tableTW/Default';
import HoverActions from '../../public/examples/tableTW/HoverActions';
import useExamples from '../../utils/useExamples';

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
          designing layouts. Use them only when data you are presenting calls
          for a tabular structure, for example prices for various travel dates
          or multiple options for baggage.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Table with hover actions"
        preview={<HoverActions />}
        code={examples ? examples.Default : 'Loading'}
      />
    </>
  );
}
