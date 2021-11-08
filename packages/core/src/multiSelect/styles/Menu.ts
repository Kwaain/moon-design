import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Menu = styled.div(({ theme }) => ({
  width: '100%',
  overflowY: 'auto',
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  listStyle: 'none',
  padding: 0,
  left: 0,
  top: '100%',
  borderRadius: rem(theme.radius.default),
  boxShadow: theme.shadows.lg,
  marginTop: rem(8),
}));

export default Menu;