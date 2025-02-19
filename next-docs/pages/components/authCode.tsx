import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import PropsTable from '../../components/PropsTable';
import Default from '../../public/styledExamples/authCode/Default';
import ErrorState from '../../public/styledExamples/authCode/ErrorState';
import ErrorStateCentered from '../../public/styledExamples/authCode/ErrorStateCentered';
import FourChars from '../../public/styledExamples/authCode/FourChars';
import OnlyDigits from '../../public/styledExamples/authCode/OnlyDigits';
import Stretch from '../../public/styledExamples/authCode/Stretch';
import useExamples from '../../utils/useExamples';

const PageAuthCodeGroup = () => {
  const examples = useExamples('authCode', 'styled');

  return (
    <>
      <ComponentPageDescription title="AuthCode">
        <DeprecationWarning href="/core/authCode" name="AuthCode" />
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Custom length"
        preview={<FourChars />}
        code={examples ? examples.FourChars : 'Loading'}
      />
      <Preview
        title="Only digits"
        preview={<OnlyDigits />}
        code={examples ? examples.OnlyDigits : 'Loading'}
      />
      <Preview
        title="Error state"
        preview={<ErrorState />}
        code={examples ? examples.ErrorState : 'Loading'}
      />
      <Preview
        title="Error state position"
        preview={<ErrorStateCentered />}
        code={examples ? examples.ErrorStateCentered : 'Loading'}
      />
      <Preview
        title="Stretch"
        preview={<Stretch />}
        code={examples ? examples.Stretch : 'Loading'}
      />
      <PropsTable
        title="Props"
        data={[
          {
            name: 'length',
            type: 'number',
            required: false,
            default: '6',
            description: 'Number of inputs for inserting single values.',
          },
          {
            name: 'onlyDigits',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'If true, inputs would allow only digit values. Default is alphanumeric.',
          },
          {
            name: 'placeholder',
            type: 'string',
            required: false,
            default: '-',
            description: 'Default placeholder for input elements.',
          },
          {
            name: 'errorMessage',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Puts element in error state and displays the message.',
          },
          {
            name: 'onChange',
            type: 'function',
            required: false,
            default: '-',
            description:
              'Callback function that gets triggered on single value change.',
          },
          {
            name: 'onSubmit',
            type: 'function',
            required: false,
            default: '-',
            description:
              'Callback function that gets triggered when all single values are entered.',
          },
        ]}
      />
    </>
  );
};

export default PageAuthCodeGroup;
