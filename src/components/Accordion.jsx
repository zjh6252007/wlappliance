import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>Why can we offer low-priced appliances?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
            Despite the presence of minor surface imperfections like dents or scratches,
            our home appliances remain fully functional.
            We recognize this and offer our customers significant discounts on these products.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>Where do you get your products?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
            Our products are sourced directly from reputable sources such as
            Samsung,LG,GE or through 48-hour returns from major stores like Home Depot, Lowe's, or Costco.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>Are your products new, used or refurbished?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
            The majority of our products are brand new, never used, and packed securely.
            However, please note that a small portion of our products sourced from major stores may be slightly used.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>What if the product does not work right after the purchase?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontSize: { xs: '0.8em', md: '1.2em' } }}>
            We provide a complimentary one-year warranty on all items, ensuring your peace of mind.
            If any issues arise within the warranty period, our team will visit your location to resolve the problem.
            In the event that we are unable to rectify the issue, we offer the options of product replacement or, in rare cases, a full refund.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}