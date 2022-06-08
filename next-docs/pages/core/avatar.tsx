import { Avatar } from '@heathmont/moon-core-tw';
import Preview from '../../components/codePreview/Preview';
import Active from '../../public/examples/avatarTW/Active';
import Colours from '../../public/examples/avatarTW/Colours';
import Sizes from '../../public/examples/avatarTW/Sizes';
import StatusOrigin from '../../public/examples/avatarTW/StatusOrigin';
import Variants from '../../public/examples/avatarTW/Variants';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('avatarTW');
  return (
    <>
      <Preview
        title="Variants"
        preview={<Variants />}
        code={examples ? examples.Variants : 'Loading'}
      />

      <Preview
        title="Different colours"
        preview={<Colours />}
        code={examples ? examples.Colours : 'Loading'}
      />

      <Preview
        title="Sizes"
        preview={<Sizes />}
        code={examples ? examples.Sizes : 'Loading'}
      />

      <Preview
        title="Active status"
        preview={<Active />}
        code={examples ? examples.Active : 'Loading'}
      />

      <Preview
        title="Status origin"
        preview={<StatusOrigin />}
        code={examples ? examples.StatusOrigin : 'Loading'}
      />
    </>
  );
};

export default Example;