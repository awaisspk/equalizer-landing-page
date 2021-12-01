import {Flex} from '@components/Flex';
import {Typography} from '@components/Typography';

export const HeroSection = () => {
  return (
    <Flex flow="col" gap="4" css={{mt: '$10', width: 'min(700px, 100%)'}}>
      <Typography variant="heading">
        We make your music sound extraordinary.
      </Typography>
      <Typography variant="para">
        A system audio equalizer specifically designed for Android and IOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </Typography>
    </Flex>
  );
};
