import {css, styled} from '@stitches';

export const Shadow = () => {
  return (
    <>
      <Shadow1 />
      <Shadow2 />
      <Shadow3 />
    </>
  );
};

const StyledShadow = css({
  position: 'absolute',
  size: '25vmax',
  borderRadius: '100%',
  opacity: '0.30',
  filter: 'blur(50px)',
});

const Shadow1 = styled('div', StyledShadow, {
  backgroundColor: '#fa7353',
  top: '-5%',
  left: '-5%',
  display: 'none',
  '@bp1': {
    display: 'initial',
  },
});

const Shadow2 = styled('div', StyledShadow, {
  backgroundColor: '#65e2dc',
  top: '0%',
  right: '0%',
  size: '30vmax',
  zIndex: 2,
});

const Shadow3 = styled('div', StyledShadow, {
  backgroundColor: '#fa7353',
  top: '24%',
  right: '0%',
  zIndex: 1,
  // transform: 'scale(0.8)',
});
