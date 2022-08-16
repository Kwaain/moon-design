import React, { useState, useRef, useEffect } from 'react';
import { FilterDropdown } from '@heathmont/moon-components';
import { ControlsChevronDown } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import { useClickAway, useKey } from 'react-use';
import {
  ContainerProps,
  DropdownWrapperProps,
  Props,
  ToggleProps,
} from './types/FilterProps';

const Title: React.FC = ({ children }) => {
  return <p className={classNames(`text-trunks text-sm mr-2`)}>{children}</p>;
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Toggle: React.FC<ToggleProps> = ({ isOpen, children }) => {
  return (
    // rounded-moon-s-sm h-max flex flex-col items-center
    <button
      className={classNames(
        'flex items-center text-xs',
        'bg-none border-none p-0 m-0 cursor-pointer',
        isOpen ? `text-piccolo` : `text-trunks`
      )}
    >
      {children}
    </button>
  );
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={classNames('relative inline-block')}>{children}</div>;
};

const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ children }) => {
  return (
    <div
      className={classNames(
        'absolute top-full left-1/2	-translate-x-1/2	pt-2 ',
        `text-bulma z-1`
      )}
    >
      {children}
    </div>
  );
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
        <Title>{title}</Title>
        <ControlsChevronDown fontSize={rem(24)} />
      </Toggle>
      {isOpen && (
        <DropdownWrapper>
          {/* ovdje je bilo nesto children kao prefix */}
          <FilterDropdown>{{ setIsOpen }}</FilterDropdown>
        </DropdownWrapper>
      )}
    </Container>
  );
};

export default Filter;
