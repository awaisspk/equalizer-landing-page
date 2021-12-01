import {HeroSection} from '@components/Sections/HeroSection';
import {Box} from '@components/Box';
import {Layout} from '@components/Layout';
import {Logo} from '@components/Logo';
import {Shadow} from '@components/Shadow';
import type {NextPage} from 'next';
import {Main} from '@components/Sections/Main';

const Home: NextPage = () => {
  return (
    <Box css={{position: 'relative'}}>
      <Shadow />
      <Layout>
        <Logo />
        <HeroSection />
        <Main />
      </Layout>
    </Box>
  );
};

export default Home;
