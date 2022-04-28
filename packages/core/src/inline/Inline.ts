import { SpaceProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';

import inlineMixin from './inlineMixin';

import type { JustifyContent } from './inlineMixin';

type InlineSpace = CSSObject['marginLeft'];

export type InlineProps = {
  fontSize?: CSSObject['fontSize'];
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<Stack space="large" />` returns `space.large` as a rem unit.
   */
  space?: SpaceProps | InlineSpace;
  justifyContent?: JustifyContent;
};

const Inline = styled.div<InlineProps>(
  ({ fontSize, justifyContent, space = 'default', theme }) => ({
    ...inlineMixin(themed('space', space)(theme), justifyContent),
    fontSize,
  })
);

export default Inline;
