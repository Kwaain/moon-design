import React from 'react';
import { Loader } from '@heathmont/moon-core-tw';
import {
  ArrowsUpdate,
  GenericDownload,
  ControlsDiagonalsOutsight,
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { Props, ButtonProps, ContainerProps } from '../types/PanelProps';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

//ne radi before, after, adaptiraj sve
const Button: React.FC<ButtonProps> = ({ hasUpdates, children, isActive }) => {
  return (
    <button
      className={classNames(
        `border-none bg-none outline-none cursor-pointer flex text-center justify-center relative w-8 h-8 p-2 text-base color-trunks`,
        `before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0`,
        `before:ease-in-out before:duration-200 before:bg-piccolo before:rounded-md before:opacity-0 before:scale-0 before:transition-transform before:transition-opacity`,
        `hover:color-piccolo focus:color-piccolo before:scale-100 before:opacity-10`,
        hasUpdates
          ? `after:content-[''] after:absolute after:top-1 after:right-1 after:w-1 after:h-1 after:rounded-lg after:bg-piccolo`
          : '',
        isActive ? `color-goten after:bg-goten ` : ``
      )}
      style={{
        background: 'none',
        fontSize: '1rem',
        color: 'rgb(var(--trunks))',
      }}
    >
      {children}
    </button>
  );
};

//provjeri isActive text-goten i drugi dio ternarnog
const Container: React.FC<ContainerProps> = ({ isActive, children }) => {
  return (
    <div
      className={classNames(
        `flex flex-col p-4 rounded-xl w-full`,
        isActive ? 'text-goten bg-piccolo' : 'text-bulma bg-gohan'
      )}
    >
      {children}
    </div>
  );
};

const Header = ({ children }: any) => {
  return (
    <div
      className="grid gap-4"
      style={{
        flexShrink: 0,
        gridTemplateColumns: 'auto 1fr auto auto',
        minHeight: '1.5rem',
      }}
    >
      {children}
    </div>
  );
};

const IconRefreshStyled = () => {
  return <ArrowsUpdate className={classNames(`rotate-90`)} />;
};

export const Panel: React.FC<Props> = ({
  onUpdate,
  onShare,
  onExpand,
  children,
  height,
  hasUpdates,
  isUpdating,
  isActive = false,
}) => (
  <Container isActive={isActive}>
    <Header>
      {onUpdate && (
        <Button
          hasUpdates={hasUpdates && !isUpdating}
          onClick={() => onUpdate()}
        >
          {isUpdating ? (
            <Loader size="2xs" color="piccolo.100" />
          ) : (
            <IconRefreshStyled />
          )}
        </Button>
      )}
      <div />
      {onShare && (
        <Button onClick={() => onShare()}>
          <GenericDownload fontSize={rem(24)} />
        </Button>
      )}
      {onExpand && (
        <Button onClick={() => onExpand()}>
          <ControlsDiagonalsOutsight fontSize={rem(24)} />
        </Button>
      )}
    </Header>
    {children}
  </Container>
);
