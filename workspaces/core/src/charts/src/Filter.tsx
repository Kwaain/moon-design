import React, { useState, useRef, useEffect } from 'react';
import { FilterDropdown } from '@heathmont/moon-components';
import { Text } from '@heathmont/moon-core';
import { ControlsChevronDown } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import { useClickAway, useKey } from 'react-use';
import classNames from '../private/utils/classnames';
//check z-index on 35 line

const Title = styled(Text)(({ theme }) => ({
  color: theme.colorNew.trunks,
}));

const Toggle = ({ isOpen, theme, children }) => {
  return (
    <button
      className={classNames(
        'flex items-center text-xs rounded-moon-s-sm h-max flex flex-col items-center',
        'bg-none border-none p-0 m-0 cursor-pointer',
        isOpen
          ? `text-${theme.colorNew.piccolo}`
          : `text-${theme.colorNre.trunks}`,
        'first:mr-2'
      )}
    >
      {children}
    </button>
  );
};

const Container = ({ children }) => {
  return <div className={classNames('inline-block relative')}>{children}</div>;
};

const DropdownWrapper = ({ theme, children }) => {
  return (
    <div
      className={classNames(
        'absolute top-full left-1/2	-translate-x-1/2	pt-2 ',
        `text-${theme.colorNew.bulma} z-${theme.newTokens.zIndex.toggle}`
      )}
    >
      {children}
    </div>
  );
};

type ChildrenProps = {
  setIsOpen: (isOpen: boolean) => void;
};

type Props = {
  forceOpen?: boolean;
  title: string;
  children: (props: ChildrenProps) => React.ReactNode;
};

const Filter: React.FC<Props> = ({ forceOpen = false, title, children }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(forceOpen);
  useClickAway(ref, () => setIsOpen(false));
  useKey('Escape', () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(forceOpen);
  }, [setIsOpen, forceOpen]);

  return (
    <Container ref={ref}>
      <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Title size={14}>{title}</Title>
        <ControlsChevronDown fontSize={rem(24)} />
      </Toggle>
      {isOpen && (
        <DropdownWrapper>
          <FilterDropdown>{children({ setIsOpen })}</FilterDropdown>
        </DropdownWrapper>
      )}
    </Container>
  );
};

export default Filter;