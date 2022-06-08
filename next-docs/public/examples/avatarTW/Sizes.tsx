import { Avatar } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar size="xs" />
      <Avatar size="sm" />
      <Avatar />
      <Avatar size="lg" />
      <Avatar size="xl" />
      <Avatar size="2xl" />
    </div>
    <div className="flex justify-around items-center w-full mb-4">
      <Avatar name="JS" size="xs" />
      <Avatar name="JS" size="sm" />
      <Avatar name="JS" />
      <Avatar name="JS" size="lg" />
      <Avatar name="JS" size="xl" />
      <Avatar name="JS" size="2xl" />
    </div>
    <div className="flex justify-around items-center w-full">
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xs" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="sm" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="lg" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="xl" />
      <Avatar imageUrl="https://www.fillmurray.com/200/200" size="2xl" />
    </div>
  </>
);

export default Example;