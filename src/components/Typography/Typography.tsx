import {styled} from '@stitches';

export const Typography = styled('p', {
  all: 'unset',
  color: '$white',
  fontFamily: '$primary',
  display: 'block',

  variants: {
    variant: {
      heading: {
        fontSize: 'clamp($7,1vw + 0.5rem , $12)',
        fontWeight: '$700',
        lineHeight: '$1',
        color: '#181826',
      },
      title: {
        fontSize: '$4',
        fontWeight: '$600',
        lineHeight: '$4',
      },
      para: {
        fontSize: 'clamp($2, 2vw + 0.2rem , $4)',
        fontWeight: '$500',
        lineHeight: '$2',
        color: '#181826',
      },
    },
    align: {
      center: {
        textAlign: 'center',
      },
    },
  },
});
