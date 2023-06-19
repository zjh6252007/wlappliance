import React from 'react';
import Warrenty from '../assets/footer/Warrenty.png';
import GE from '../assets/General_Electric_logo.svg.png';
import Samsung from '../assets/Samsung_Logo.svg.png';
import LG from '../assets/LG_logo.png';
import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Box bgcolor="#FFD700" sx={{ py: 2 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid item xs={12} align="center">
                            <Box component="img" src={Warrenty} alt="Warranty sign" sx={{ height: '200px', mb: 2 }} /> {/* Adjust this value to your preference */}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h5" sx={{ mb: 5 }}>
                                We offer a free one-year warranty guarantee on all of our products.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column">
                        <Typography variant="h5" mb={2}>Our brand</Typography>
                        <Grid container spacing={4} justifyContent="flex-start">
                            <Grid item xs={4} sm={3} md={2} style={{ marginRight: '20px' }}>
                                <img src={GE} alt="General Electric logo" style={{ height: '60px', width: 'auto' }} />
                            </Grid>
                            <Grid item xs={4} sm={3} md={5} style={{ marginRight: '20px' }}>
                                <img src={Samsung} alt="Samsung logo" style={{ height: '60px', width: 'auto' }} />
                            </Grid>
                            <Grid item xs={4} sm={3} md={3}>
                                <img src={LG} alt="LG logo" style={{ height: '60px', width: 'auto' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" mb={1}>Contact Us</Typography>
                        <Typography variant="body1">Wonderful Life Appliances</Typography>
                        <Typography variant="body1">3388 W New Haven Ave</Typography>
                        <Typography variant="body1">Melbourne FL 32904</Typography>
                        <Typography variant="body1">(321)-522-7466</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" mb={1}>Business Time</Typography>
                        <Typography variant="body1">Mon: 10:30 AM – 5:30 PM</Typography>
                        <Typography variant="body1">Tue: 10:30 AM – 5:30 PM</Typography>
                        <Typography variant="body1">Wed: 10:30 AM – 5:30 PM</Typography>
                        <Typography variant="body1">Thu: 10:30 AM – 5:30 PM</Typography>
                        <Typography variant="body1">Fri: 10:30 AM – 5:30 PM</Typography>
                        <Typography variant="body1">Sat: 10:30 AM – 5:30 PM</Typography>
                        <Typography variant="body1">Sun: 10:30 AM – 5:30 PM</Typography>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={2} borderTop="1px solid rgb(223, 223, 223)" mt={2}>
                    <Typography>&copy;{year} WL APPLIANCES</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;