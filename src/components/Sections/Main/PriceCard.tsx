import {Box} from '@components/Box';
import {Button} from '@components/Buttons';
import {Flex} from '@components/Flex';
import {Typography} from '@components/Typography';
import {styled} from '@stitches';

export const PriceCard = () => {
  return (
    <Wrapper>
      <Flex flow="col" css={{margin: 'auto', width: '78%', py: '2rem'}}>
        <Box>
          <Typography as="h1" variant="heading" css={{color: 'white'}}>
            Premium EQ
          </Typography>
          <Typography as="p" variant="para" css={{color: 'white'}}>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to whole new level and
            access all our amaing features
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="para"
            css={{
              color: 'white',
              '& span': {
                fontSize: '$9',
                fontWeight: '$700',
              },
            }}
          >
            <span>$4</span> /month
          </Typography>
        </Box>
        <Button css={{backgroundColor: '#191826', color: 'white', mb: '1rem'}}>
          ios Download
        </Button>
        <Button css={{backgroundColor: '#fbfaf8'}}>Android Download</Button>
      </Flex>
    </Wrapper>
  );
};
const Wrapper = styled('section', {
  backgroundColor: '#fa7353',
  width: 'min(400px, 100%)',
  padding: '10px',
  borderRadius: '1rem',
  margin: 'auto',
  position: 'relative',

  '@bp1': {
    bottom: '-20%',
  },
});
