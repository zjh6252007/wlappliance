import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Nav = styled('nav')(({ theme }) => ({
  backgroundColor: 'gold',
  textAlign: 'center',
  height:"17vh",
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    height: '8vh'
  },
}));

const NavList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontFamily: 'cursive',
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  '&:hover': {
    backgroundColor: '#FFD700',
    color: 'white',
  },
}));

const StyledA = styled('a')(({ theme }) => ({
  color: 'black',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontFamily: 'cursive',
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
  '&:hover': {
    backgroundColor: '#FFD700',
    color: 'white',
  },
}));

function Navbar() {
  return (
    <Box component={Nav}>
      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledA href="https://snapfinance.com/" target="_blank" rel="noopener noreferrer">
            Lease To Own
          </StyledA>
        </li>
        <li>
          <StyledLink to="/repair">Repair Service</StyledLink>
        </li>
        <li>
          <StyledLink to="/faq">FAQ</StyledLink>
        </li>
      </NavList>
    </Box>
  );
}

export default Navbar;