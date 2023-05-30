import React from 'react';

import { Container } from './Landing.styles';
import { Info } from './Info';
import { Header } from './Header';
import { Carousel } from './Carousel';
import Footer from './Footer';

import defaultBanner from '../../assets/banner.jpeg';

const Landing: React.FC = () => {
  return (
    <Container flexDirection="column">
      <Header />
      <img
        src={defaultBanner}
        style={{ height: '80vh', objectFit: 'cover' }}
        alt="Banner"
      />
      <Carousel />
      <Info />
      <Footer />
    </Container>
  );
};

export default Landing;
