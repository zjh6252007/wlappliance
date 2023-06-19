import * as React from 'react';
import { styled } from '@mui/system';

const Card = styled('div')({
  width: 700,
  backgroundColor: '#fff',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.12)',
});

const ApplianceImage = styled('div')({
  height: 500,
  width: 500,
  alignItems: 'center',
});

const ApplianceImageImg = styled('img')({
  minWidth: '100%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: 'inherit',
  objectFit: 'contain',
  marginTop: 50,
});

const ApplianceImageP = styled('p')({
  marginLeft: '14em',
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
        <h4>In Stock</h4>
      </Content>
    </Card>
  );
}