import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import InventoryItem from './inventory';
import './InventoryCarousel.css'; // Import your styles
import fridge1 from '../assets/inventory/RF28T5001SR.jpg';
import drywhite from '../assets/inventory/DryerWhite.jpg';
// Assume you have an array of inventory data
const inventoryData = [
    { image: fridge1, description: 'Nominal Depth:36 in Nominal Depth:36 in' },
    { image: drywhite, description: 'Description 2' },
    { image: fridge1, description: 'Description 3' },
    // ...
];

// Divide inventory data into groups of 6
let inventoryGroups = [];
for (let i = 0; i < inventoryData.length; i += 6) {
    inventoryGroups.push(inventoryData.slice(i, i + 6));
}

const groups = inventoryGroups.map((group, index) => (
    <div key={index} className="carouselGroup">
        {group.map((data, index) => (
            <InventoryItem
                key={index}
                image={data.image}
                description={data.description}
            />
        ))}
    </div>
));

export default function InventoryCarousel() {
    return (
        <div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                {groups}
            </Carousel>
        </div>
    );
}