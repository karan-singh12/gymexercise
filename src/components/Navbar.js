import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logoo1.png';

const Navbar = () => (
  <Stack position="relative" direction="row" justifyContent="space-around" sx={{ gap: { sm: '113px', xs: '30px' }, mt: { sm: '22px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '68px', height: '68px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="50px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fff', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
