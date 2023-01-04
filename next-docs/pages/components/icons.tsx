import { useState } from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import DeprecationWarning from '../../components/facing/DeprecationWarning';
import IconsBlock from '../../components/IconsBlock';
import IconsImportHelper from '../../components/IconsImportHelper';
import PageSection from '../../components/PageSection';
import Arrows from '../../public/examples/styled/icons/Arrows';
import Chart from '../../public/examples/styled/icons/Chart';
import Chat from '../../public/examples/styled/icons/Chat';
import Controls from '../../public/examples/styled/icons/Controls';
import DefaultIconSet from '../../public/examples/styled/icons/DefaultIconSet';
import Devices from '../../public/examples/styled/icons/Devices';
import Files from '../../public/examples/styled/icons/Files';
import Generic from '../../public/examples/styled/icons/Generic';
import Mail from '../../public/examples/styled/icons/Mail';
import Maps from '../../public/examples/styled/icons/Maps';
import Media from '../../public/examples/styled/icons/Media';
import Notifications from '../../public/examples/styled/icons/Notifications';
import Other from '../../public/examples/styled/icons/Other';
import Security from '../../public/examples/styled/icons/Security';
import Shop from '../../public/examples/styled/icons/Shop';
import Software from '../../public/examples/styled/icons/Software';
import Sport from '../../public/examples/styled/icons/Sport';
import Text from '../../public/examples/styled/icons/Text';
import Time from '../../public/examples/styled/icons/Time';
import Travel from '../../public/examples/styled/icons/Travel';
import Type from '../../public/examples/styled/icons/Type';
import useExamples from '../../utils/useExamples';

const PageIcons = () => {
  const [selectedIcons, setSelectedIcons] = useState<string[]>([]);
  const props = { fontSize: '2rem' };
  const addIconToSelected: (iconName: string) => string[] = (iconName) =>
    selectedIcons.concat(iconName);
  const removeIconFromSelected = (removedIconName: string) =>
    selectedIcons.filter((name) => name !== removedIconName);
  const toggleSelectedIcons: (iconName: string) => string[] = (iconName) => {
    if (selectedIcons.includes(iconName)) {
      return removeIconFromSelected(iconName);
    }
    return addIconToSelected(iconName);
  };
  const displaySelectedIconsImport = selectedIcons.length > 0;
  const onClick = (iconName: string) =>
    setSelectedIcons(toggleSelectedIcons(iconName));
  const wrapperProps = { onClick, selectedIcons };
  const examples = useExamples('icons', 'styled');
  return (
    <>
      <ComponentPageDescription title="Icons">
        <DeprecationWarning href="/core/icons" name="Icons" />
      </ComponentPageDescription>
      <Preview
        title="Sizes and colours"
        preview={<DefaultIconSet />}
        code={examples ? examples.DefaultIconSet : 'Loading'}
      />
      <p className="text-moon-16">Please select icons for Import</p>
      {displaySelectedIconsImport ? (
        <IconsImportHelper
          text={`import { ${selectedIcons.join(
            ', '
          )} } from '@heathmont/moon-icons';`}
        />
      ) : null}
      <PageSection title="Arrows">
        <IconsBlock>
          <Arrows wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Chart">
        <IconsBlock>
          <Chart wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Chat">
        <IconsBlock>
          <Chat wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Controls">
        <IconsBlock>
          <Controls wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Devices">
        <IconsBlock>
          <Devices wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Files">
        <IconsBlock>
          <Files wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Generic">
        <IconsBlock>
          <Generic wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Mail">
        <IconsBlock>
          <Mail wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Maps">
        <IconsBlock>
          <Maps wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Media">
        <IconsBlock>
          <Media wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Notifications">
        <IconsBlock>
          <Notifications wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Other">
        <IconsBlock>
          <Other wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Security">
        <IconsBlock>
          <Security wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Shop">
        <IconsBlock>
          <Shop wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Software">
        <IconsBlock>
          <Software wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Sport">
        <IconsBlock>
          <Sport wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Text">
        <IconsBlock>
          <Text wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Time">
        <IconsBlock>
          <Time wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Travel">
        <IconsBlock>
          <Travel wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
      <PageSection title="Type">
        <IconsBlock>
          <Type wrapperProps={wrapperProps} props={props} />
        </IconsBlock>
      </PageSection>
    </>
  );
};

export default PageIcons;
