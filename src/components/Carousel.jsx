import React from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import appliances1 from '../assets/appliances1.jpg';
import appliances2 from '../assets/appliances2.jpg';
import appliances3 from '../assets/appliances3.jpg';
import appliances4 from '../assets/appliances4.jpg';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ImageCarousel() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const carouselHeight = matches ? '50vh' : '37.5vh';

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '37.5vh', md: '50vh' },
        backgroundColor: '#FFD700',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={appliances1} alt="In store view" style={{ height: carouselHeight, objectFit: 'contain' }} />
        </div>
        <div>
          <img src={appliances2} alt="facade view of the store" style={{ height: carouselHeight, objectFit: 'contain' }} />
        </div>
        <div>
          <img src={appliances3} alt="In store inventory stove and fridge" style={{ height: carouselHeight, objectFit: 'contain' }} />
        </div>
        <div>
          <img src={appliances4} alt="In store inventory washer and dryer" style={{ height: carouselHeight, objectFit: 'contain' }} />
        </div>
      </Carousel>
    </Box>
  );
}
export default ImageCarousel;