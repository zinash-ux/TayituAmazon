import React from 'react';
import './Home.css';
import Product from './Product';
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import image1 from './Bigimage/XCM_CUTTLE_1329605_1694019_US_3841690_379x304_1X_en_US._SY304_CB669768660_.jpg'
import image2 from './Bigimage/ZDNhNDdkYjQt-MzE4MDkxYjIt-w379._SY304_CB667102597_.jpg'
import image3 from './Bigimage/ZDNhNDdkYjQt-NWRlNDBkNjYt-w379._SY304_CB667101704_.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <div>
        <Carousel interval="4000" home__images>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w1500._CB669030425_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ZGU1MTFjY2Mt-w1500._CB669562935_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image "
              src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Homestead/AHM_Week-1_Gateway_Desktop_1500x600-V4._CB655178950_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YzA3MzM4Yjgt-w1500._CB412117312_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MWZjMjc0MzEt-w1500._CB670025017_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item>

          {/* <Carousel.Item>
            <img
              className="home__image"
              src=" https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/CVP_SUM/BROWSE-HEADER/DT_BROWSE_Feature-Card_CML_BEAUTY_2.jpg"
              // style={{ height: "100vh" }}
            />
          </Carousel.Item> */}

        </Carousel>
        </div>
        <div className="home__row">
        <Product
            id="12321341"
            title="Try Multi-Room Music with Alexa"
            price={1669}
            rating={5}
            image={image3}
            // "https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Colorful Handmade Ethiopian Habesha Baskets "
            price={69.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61vXLNQzrLL._AC_.jpg"
          />
        </div>


        <div className="home__row">
          <Product
            id="4903850"
            title="Bodum 11571-109 Pour Over Coffee Maker with Permanent Filter, Glass, 34 Ounce, 1 Liter, Cork Band"
            price={499.99}
            rating={4}
            image={image1}
            //https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg
          />

          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="903850"
            title="2021 1080P Streaming Business Webcam with Microphone & Privacy Cover, AutoFocus, NexiGo N930P HD USB Web Camera, for Zoom Meeting YouTube Skype FaceTime"
            price={69.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="8903851"
            title="SAMSUNG 85-inch Class QLED Q950T Series  Smart TV with Alexa Built-in (QN85Q950TSFXZA, 2020 Model"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91GMSrYPaHL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/61KFXbnW13L._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
        </div>
        
        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/periodicals/magazines/May2021/TWP/TWP_Desktop_Cat_Card_758x608._SY608_CB668745650_.jpg"
          />
          <Product
            id="49538094"
            title="Put your photos on (smart) display"
            price={159.99}
            rating={4}
            image={image2}
            //"https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
                 <Product
            id="49538094"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/gateway/2021/May/gw_early_june_evergreen_05.14.21_186x116_camp5_home_B087LTZNG4._SY116_CB668336500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
