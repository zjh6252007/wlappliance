import * as React from 'react';
import { styled } from '@mui/system';

const Card = styled('div')(({ theme }) => ({
  width: '100%', 
  [theme.breakpoints.up('sm')]: { 
    width: 700, 
  },
  backgroundColor: '#fff',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.12)',
}));

const ApplianceImage = styled('div')({
  width: '100%', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ApplianceImageImg = styled('img')(({ theme }) => ({
  width: '70%', 
  height: 'auto',
  maxHeight: 200, // setting a fixed height
  [theme.breakpoints.up('sm')]: { 
    maxHeight: 400,  // larger height for larger screens
  },
  display: 'block',
  objectFit: 'contain',
  marginTop: 50,
}));

const ApplianceImageP = styled('p')({
  textAlign: 'center',
  maxWidth: '80%', 
  wordWrap: 'break-word', 
});

const Content = styled('div')({
  padding: '2rem 1.8rem',
  fontSize: 40,
});

export default function InventoryItem({ image, description, altinfo }) {
  return (
    <Card>
      <ApplianceImage>
        <ApplianceImageImg src={image} alt={altinfo} />
        <ApplianceImageP>Model: {description}</ApplianceImageP>
      </ApplianceImage>
      <Content>
        <h4>50% OFF</h4>
        <h6>Call For Best Price</h6>
      </Content>
    </Card>
  );
}