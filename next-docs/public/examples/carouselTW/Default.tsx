import { Carousel } from '@heathmont/moon-core-tw';
import { rem } from '@heathmont/moon-themes';
import styled from 'styled-components';

const ExampleContent = styled.div(({ theme: { color, newTokens } }) => ({
  width: rem(320),
  height: rem(192),
  borderRadius: newTokens.borderRadius.surface.xsmall,
  background: color.popo,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Example = () => {
  const items = Array.from(Array(10).keys());
  return (
    <div className="h-60 w-9/12">
      <Carousel 
         items={items.map((item, index) => (
          <ExampleContent>{index}</ExampleContent>
        ))}
        // step={1}
        slidesOnly
        scrollTo={5}
      />
    </div>
  );
};

export default Example;
