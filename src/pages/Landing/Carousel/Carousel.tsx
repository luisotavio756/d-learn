import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
          <Headline size="lg">{t('landing.carousel.discoverDlearn')}</Headline>
          <Flex flexDirection="column" gap={4}>
            <Text size="lg" align="justify">
              {t('landing.carousel.dlearnOrigin')}
            </Text>
            <Text size="lg" align="justify">
              {t('landing.carousel.dlearnGoals')}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Carousel;
