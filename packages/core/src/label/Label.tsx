import React from 'react';
import Size from '../private/enums/Size';
import IconLeftWrapper from './styles/IconLeftWrapper';
import IconRightWrapper from './styles/IconRightWrapper';
import LabelContainer from './styles/LabelContainer';
import type LabelProps from './private/types/LabelProps';

const Label: React.FC<LabelProps> = ({
  children,
  color,
  backgroundColor,
  iconLeft,
  iconRight,
  size = Size.XSMALL,
  isUppercase = true,
}) => (
  <LabelContainer
    backgroundColor={backgroundColor}
    color={color}
    size={size}
    isUppercase={isUppercase}
    iconLeft={iconLeft}
    iconRight={iconRight}
  >
    {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
    {children}
    {iconRight && <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>}
  </LabelContainer>
);

export default Label;
