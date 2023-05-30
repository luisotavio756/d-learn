import React, { useMemo } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel as CarouselComponent } from 'react-responsive-carousel';

import { uniqueId } from 'lodash';
import banner1 from '../../../assets/banners/banner-1.jpeg';
import banner2 from '../../../assets/banners/banner-2.jpeg';
import banner3 from '../../../assets/banners/banner-3.jpeg';

import { Container } from './Carousel.styles';
import { Headline, Text } from '../../../components/UI';
import { Flex, Grid } from '../../../components/Layout';

const Carousel = () => {
  const images = useMemo(() => [banner1, banner2, banner3], []);

  return (
    <Container justifyContent="center">
      <Grid
        templateColumns="1fr 1fr"
        gap={24}
        breakpoints={{
          lg: {
            templateColumns: '1fr',
          },
        }}
      >
        <CarouselComponent
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {images.map(item => (
            <img key={uniqueId()} src={item} alt="Imagem 1" />
          ))}
        </CarouselComponent>
        <Flex flexDirection="column" gap={16}>
          <Headline size="lg">Conheça o D-LEARN</Headline>
          <Flex flexDirection="column" gap={4}>
            <Text size="lg" align="justify">
              O D-LEARN (LEarning software ARchitecture fundameNtals) Board game
              é um jogo digital inspirado no jogo não-digital LEARN Board game,
              que é um jogo que faz uso de cartas e tabuleiro para auxiliar no
              ensino de Arquitetura de Software.
            </Text>
            <Text size="lg" align="justify">
              O D-LEARN foi criado visando resolver alguns desafios enfrentados
              pelo atual jogo em formato não-digital, tais como uso de papel
              para sua construção, dificuldade para fazer alterações na dinâmica
              do jogo e uma alta quantidade de tempo/esforço para confeccionar
              uma nova versão com novas regras, por exemplo.
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Carousel;
