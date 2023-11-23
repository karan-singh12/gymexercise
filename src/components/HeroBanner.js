import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner1.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '165px', xs: '50px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#F9E79F" fontWeight="600" fontSize="36px">Fitness Club</Typography>
    <Typography color="#fff" fontWeight={700} fontSize="70px" mb="2px" mt="3px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography color="#F9E79F" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#B22222', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#ECF0F1" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '300px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
