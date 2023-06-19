import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const Nav = styled('nav')({
  backgroundColor: 'gold',
});

const NavList = styled('ul')({
  display: 'flex',
  justifyContent: 'space-around',
  listStyleType: 'none',
  height: '70px',
  padding: 0,
  margin: 0,
});

const StyledLink = styled(Link)({
  color: 'black',
  textDecoration: 'none',
  fontSize: '40px',
  fontFamily: 'cursive',
  '&:hover': {
    backgroundColor: '#FFD700',
    color: 'white',
  },
});

const StyledA = styled('a')({
  color: 'black',
  textDecoration: 'none',
  fontSize: '40px',
  fontFamily: 'cursive',
  '&:hover': {
    backgroundColor: '#FFD700',
    color: 'white',
  },
});

function Navbar() {
  return (
    <Nav>
      <NavList>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledA href="https://snapfinance.com/" target="_blank" rel="noopener noreferrer">Lease To Own</StyledA></li>
        <li><StyledLink to="/repair">Reapir Service</StyledLink></li>
        <li><StyledLink to="/faq">FAQ</StyledLink></li>
      </NavList>
    </Nav>
  );
}

export default Navbar;