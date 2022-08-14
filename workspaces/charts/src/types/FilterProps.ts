export type ChildrenProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export type Props = {
  forceOpen?: boolean;
  title: string;
  children: React.ReactNode;
};

export type ToggleProps = {
  isOpen?: boolean;
  theme?: any;
  onClick: (v: string) => void;
};
export type ContainerProps = {
  ref: React.RefObject<HTMLInputElement>;
};
export type DropdownWrapperProps = {
  theme?: any;
  children?: React.ReactNode;
};
