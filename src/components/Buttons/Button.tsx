import {styled} from '@stitches';
import {motion, Variants} from 'framer-motion';
import React from 'react';

const StyledButton = styled(motion.button, {
  border: 'none',
  color: '$white',
  fontFamily: 'Inter',
  fontSize: '$1',
  fontWeight: '$500',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$lg',
  py: '1rem',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',

  '& svg': {
    marginRight: '0.5rem',
  },

  '@supports selector(:focus-visible)': {
    '&:focus-visible': {
      outline: 'none',
      boxShadow:
        '0 20px 40px hsla(176, 68%, 64%,0.5) 0 0 0 3px  hsla(176, 68%, 64%,0.3)',
    },
  },

  variants: {
    variant: {
      circle: {
        py: '$5',
        px: '$5',
        backgroundColor: 'white',
        borderRadius: '$full',
        alignSelf: 'center',
      },
    },
  },
});

type ButtonProps = {
  icon?: 'arrow' | 'email' | 'github';
};

type StyledButtonProps = React.ComponentProps<typeof StyledButton>;
type Props = StyledButtonProps & ButtonProps;

export const Button: React.FC<Props> = ({icon, children, ...rest}) => {
  const isIcon = icon !== undefined;

  const buttonVariants: Variants = {
    idle: {
      scale: 1,
    },
    hover: {
      scale: 1.03,
    },
    tap: {
      scale: 0.99,
    },
  };

  return (
    <>
      <StyledButton
        css={{px: isIcon ? '10px' : '$3'}}
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        {...rest}
      >
        {children}
      </StyledButton>
    </>
  );
};
