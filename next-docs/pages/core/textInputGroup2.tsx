import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import Default from '../../public/examples/textInputGroupTW/Default';

import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('textInputGroupTW');
  return (
    <>
      <ComponentPageDescription title="TextInput Group">
        <p>
          Indeed, forms require input from all users, including astronauts. Text
          input fields help to gather both short and long-form information. The
          size of the text field should correspond to the length of information
          that's required.
        </p>
        <p>
          Text input fields can contain various rules to ensure the right
          information is obtained from users. Users should also be given prompts
          to guide them on what's needed, or if they've made an error while
          doing so.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />



    </>
  );
};

export default Example;
