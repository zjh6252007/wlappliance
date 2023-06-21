import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import InventoryItem from './inventory';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const inventoryImage = ["WF50BG8300AV","DVE50BG8500V", "DVE45T6000W", "WF45T6000AW","GFW850SPNRS","GFD850SPNRS","GFQ4ESSNWW","GFT14ESSMWW", "RF27T5501SR", "RF28T5001SR", "GTE17GSNRSS","RS27T5200SR","JSS86SPSS","JBS60RKSS","JB735SPSS","NE63B8211SS","DW80R9950UG", "DDT700SSNSS", "GUD27ESSMWW"];
const altinfo = ["samsung fridge", "samsung dryer", "GE washer", "samsung dish washer", "samsung fridge with smart pad", "GE washer and dryer", "samsung side by side fridge"]
const ticks = inventoryImage.map(item => require("../assets/inventory/" + item + ".jpg"))
const inventoryData = [];

for (let i = 0; i < inventoryImage.length; i++) {
    inventoryData.push({
        image: ticks[i],
        description: inventoryImage[i],
        altinfo: altinfo[i],
    });
}

export default function InventoryCarousel() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // check if the screen size is 'sm' or less

    // Group items differently for mobile and larger screens
    let itemsPerGroup = isMobile ? 1 : 4;
    let inventoryGroups = [];
    for (let i = 0; i < inventoryData.length; i += itemsPerGroup) {
        inventoryGroups.push(inventoryData.slice(i, i + itemsPerGroup));
    }

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
                {inventoryGroups.map((group, index) => (
                  <div key={index} style={{display: 'flex', justifyContent: 'center'}}>
                      {group.map((data, index) => (
                          <InventoryItem
                              key={index}
                              image={data.image}
                              description={data.description}
                          />
                      ))}
                  </div>
                ))}
            </Carousel>
        </div>
    );
}