import React from 'react';

import { Banner, Container } from './Landing.styles';
import { Info } from './Info';
import { Header } from './Header';
import { Carousel } from './Carousel';
import Footer from './Footer';

import defaultBanner from '../../assets/banner.jpeg';
import Ranking from './Ranking';
import { Contributors } from './Contributors';

const Landing: React.FC = () => {
  return (
    <Container flexDirection="column">
      <Header />
      <Banner src={defaultBanner} alt="Banner" />
      <Carousel />
      <Info />
      <Ranking />
      <Contributors />
      <Footer />
    </Container>
  );
};

export default Landing;
