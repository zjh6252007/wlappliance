import React from 'react';
import Accordion from '../components/Accordion';
import { Helmet } from "react-helmet";
import {Typography, Container, Grid } from '@mui/material';
import background from '../assets/background.jpg'; // Replace with your background image path

function Faq() {
  return (
    <Container disableGutters maxWidth={false}>
      <Helmet>
        <title>FAQ</title>
        <meta name="FAQ page" content="Some general questions about our store. For example the source, the condition and the warranty policy of our goods." />
      </Helmet>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          p: 4,
          backgroundImage: { md: `url(${background})` }, 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          fontSize: '1.2em', 
        }}
      >
        <Grid item xs={12} md={4} >
          <Typography variant="h3">General Questions</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Accordion />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faq;