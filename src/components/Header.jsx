import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MyLocation from "@mui/icons-material/MyLocation";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/wlapplianceslogo.png";

function Header() {
  return (
    <Box sx={{
      bgcolor: "#000",
      p: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: { xs: 'center', md: 'space-between' },
      flexDirection: { xs: 'column', md: 'row' },
    }}>
      <IconButton 
        href="https://www.facebook.com/profile.php?id=100092187747989"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#fff", m: { xs: 'auto', md: 0 } }}
      >
        <FaFacebook size={80} />
      </IconButton>

      <Container sx={{ maxWidth: "30%", marginLeft: { xs: '10%', md: '30%' }, marginRight: { xs: '55%', md: '5%' } }}>
        <Box sx={{ height: { xs: '10vh', md: '20vh' }, width: "auto" }}>
          <img src={logo} alt="Company Logo" style={{ height: '80%', width: 'auto' }} />
        </Box>
      </Container>

      <Box sx={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        width: "100%",

      }}>
        <Typography component="div">
          <a href="https://www.google.com/maps/search/?api=1&query=3388+W+New+Haven+Ave.+Melbourne+FL.+32904" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box textAlign="justify" m={1} fontSize={21} sx={{
              "&:hover": {
                backgroundColor: '#FFD700',
                color: 'white',
              }
            }}>
              <MyLocation /> 3388 W New Haven Ave. Melbourne FL. 32904
            </Box>
          </a>
          <Box taxtAlign="justify" m={1} fontSize={21}>
            <PhoneIcon />Phone Number:321-522-7466
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;