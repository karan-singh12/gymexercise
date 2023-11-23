import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logoo1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#F2F3F4 ">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="10px">Made with ❤️ Karan Singh</Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="0px" textAlign="center" pb="4px">E-mail 📧 : kschouhan735@gmail.com</Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="0px" textAlign="center" pb="4px">Address : Rajasthan, india</Typography>
  </Box>
);

export default Footer;
