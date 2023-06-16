import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 
import InventoryItem from './inventory';
import './InventoryCarousel.css'; 


const inventoryImage=["RF28T5001SR","DVE45T6000W","GFW850SPNRS","DW80R9950UG","RF27T5501SR","DVE50BG8500V","NE63B8211SS","RS27T5200SR","GUD27ESSMWW"];
const altinfo=["samsung fridge","samsung dryer","GE washer","samsung dish washer","samsung fridge with smart pad","GE washer and dryer","samsung side by side fridge"]
const ticks = inventoryImage.map(item=> require("../assets/inventory/"+item+".jpg"))
const inventoryData =[];

for(let i = 0;i<inventoryImage.length;i++)
{
    inventoryData.push({
        image:ticks[i],
        description:inventoryImage[i],
        altinfo:altinfo[i],

    });
}

// Divide inventory data into groups of 6
let inventoryGroups = [];
for (let i = 0; i < inventoryData.length; i += 4) {
    inventoryGroups.push(inventoryData.slice(i, i + 4));
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