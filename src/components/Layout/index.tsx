import {styled} from '@stitches';
import React from 'react';

export const Layout: React.FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled('div', {
  width: 'min(1100px, 100% - 40px)',
  minHeight: '100vh',
  margin: 'auto',
  position: 'relative',
  zIndex: 5,
});
