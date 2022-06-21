import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/carouselTW/Default';
import useExamples from '../../utils/useExamples';

export default function PageCarousel() {
  const examples = useExamples('carousel');

  return (
    <>
      <ComponentPageDescription title="Carousel">
        <p>
          An interactive extension of the Reel component to cycle through
          content.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Carousel"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      
      <PropsTable
        title="Props"
        data={[
          {
            name: 'space',
            type: 'xlarge |',
            required: false,
            default: '',
            description: '-',
          },
          {
            name: 'items',
            type: 'React.ReactNode',
            required: false,
            default: '',
            description: 'Items to display inside carousel',
          },
          {
            name: 'scrollToLeftButton',
            type: '({ scrollToStep, disabled }: { { scrollToStep: function, disabled: boolean } }) => React.ReactElement',
            required: false,
            default: '',
            description: 'Scroll to left button',
          },
          {
            name: 'scrollToRightButton',
            type: '({ scrollToStep, disabled }: { { scrollToStep: function, disabled: boolean } }) => React.ReactElement',
            required: false,
            default: '',
            description: 'Scroll to right button',
          },
        ]}
      />
    </>
  );
}
