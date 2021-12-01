import {styled} from '@stitches';
import {PriceCard} from './PriceCard';

export const Main = () => {
  return (
    <Wrapper>
      <Grid>
        <Img src="/assets/illustration-app.png" alt="illustration" />
        <PriceCard />
      </Grid>
    </Wrapper>
  );
};

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Wrapper = styled('div', {
  width: '100%',
  minH: '400px',
  background: 'url(/assets/bg-pattern-2.svg) no-repeat #191827',
  backgroundPosition: '50% 50%',
  backgroundSize: 'contain',
  marginTop: '200px',
  position: 'relative',
  borderRadius: '20px',
});

const Img = styled('img', {
  width: '250px',
  margin: 'auto',
  position: 'relative',
  top: '-100px',
});
