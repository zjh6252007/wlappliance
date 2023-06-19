import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MyLocation from "@mui/icons-material/MyLocation";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/wlapplianceslogo.png";

function Header() {
  return (
    <Box sx={{ bgcolor: "#000", p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <IconButton
        href="https://www.facebook.com/profile.php?id=100092187747989"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#fff" }}
      >
        <FaFacebook size={80} />
      </IconButton>

      <Container sx={{ width: "30%",margin:"auto"}}>
        <img src={logo} alt="Company Logo" style={{ height: 150, width: "100%" }} />
      </Container>

      <Box sx={{ color: "#fff", display: "flex", flexDirection: "column", alignItems: "flexStart" }}>
        <IconButton
          href="https://www.google.com/maps/search/?api=1&query=3388+W+New+Haven+Ave.+Melbourne+FL.+32904"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <MyLocation />
          <Typography variant="h6">3388 W New Haven Ave. Melbourne FL. 32904</Typography>
        </IconButton>
        <Typography variant="h6">
          <PhoneIcon fontSize="large" />
          Phone Number: 321-522-7466
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;