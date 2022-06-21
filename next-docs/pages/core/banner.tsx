import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/examples/bannerTW/Default';
import Multiline from '../../public/examples/bannerTW/Multiline';
import MultilineWithButtons from '../../public/examples/bannerTW/MultilineWithButtons';
import Singleline from '../../public/examples/bannerTW/Singleline';
import useExamples from '../../utils/useExamples';

const PageBanner = () => {
  const examples = useExamples('banner');
  return (
    <>
      <ComponentPageDescription title="Banner">
        <p>
          Banners are used to show users important, succinct messages, or space
          alerts, that users should know about. They can interact or ignore
          banners at any time, as they are non-modal. What to take note of when
          using banners Only one banner should be shown at a time. Banners
          require user action in order to be dismissed. Messages should consist
          of no longer than one headline, one description sentence and one short
          call-to-action.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Multiline"
        preview={<Multiline />}
        code={examples ? examples.Multiline : 'Loading'}
      />
      <Preview
        title="Multiline with buttons"
        preview={< MultilineWithButtons />}
        code={examples ? examples.Buttons : 'Loading'}
      />
   
      <Preview
        title="Singleline"
        preview={<Singleline />}
        code={examples ? examples.Singleline : 'Loading'}
      />
      
      <PropsTable
        title="Props"
        data={[
          {
            name: 'description',
            type: 'string',
            required: true,
            default: '-',
            description: 'Main text content of the banner',
          },
          {
            name: 'title',
            type: 'string',
            required: false,
            default: '-',
            description: 'Text to appear on the header for multiline mode',
          },
          {
            name: 'iconHeader',
            type: 'React.ReactElement',
            required: false,
            default: '-',
            description:
              'Icon to appear at  the top end of the header for multiline',
          }
        ]}
      />
    </>
  );
};
export default PageBanner;