import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Helmet } from "react-helmet";

function Repair() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      className='RepairPage'
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight={isMobile ? '40vh' : '25vh'}
      p={isMobile ? 3 : 0}
    >
      <Helmet>
        <title>Repair service</title>
        <meta name="Repair Service" content="Our repair service. which contains some pictures of our work, repair time,repair policy" />
      </Helmet>

      <Box my={isMobile ? 2 : 4}>
        <Typography variant={isMobile ? "h5" : "h2"} gutterBottom color="#f8c408">
          Having a Problem with a Home Appliance?
        </Typography>
      </Box>

      <Box my={isMobile ? 1 : 2}>
        <Typography variant={isMobile ? "h6" : "h4"} align="center" gutterBottom>
          Give us a call and we’ll fix your appliance at a very reasonable rate..
        </Typography>
      </Box>

      <Box my={isMobile ? 2 : 4}>
        <Typography variant={isMobile ? "h5" : "h2"} color="#f8c408">
          Call Us Now At 321-522-7466
        </Typography>
      </Box>
    </Box>
  );
}

export default Repair;