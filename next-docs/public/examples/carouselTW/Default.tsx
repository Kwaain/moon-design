import { Carousel } from '@heathmont/moon-components';

const Example = () => {
  const items = Array.from({ length: 15 }, (index) => index);
  return (
    <Carousel
      scrollTo={15}
      items={items.map((item, index) => (
        <div className='w-[280px] h-[320px] bg-gohan flex items-center justify-center rounded-md'>{index}</div>
      ))}
    />
  );
};

export default Example;
