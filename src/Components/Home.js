import React from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12342"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="56546"
            title="INALSA Stand Mixer Professional Mix Master- Heavy Duty 1200 Watt Pure Copper Motor| 5.5L SS Bowl| Metal Gears for Extra Stability|"
            image="https://m.media-amazon.com/images/I/6113lMeZpWS._AC_SS130_.jpg"
            price={239.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="81621"
            title="Samsung 24-inch (59.8 cm) Curved Gaming Monitor- Full HD, AMD Free Sync, 144 Hz Refresh Rate- LC24RG50FQWXXL"
            image="https://m.media-amazon.com/images/I/71dGb+7qhQL._SL1500_.jpg"
            price={129.99}
            rating={5}
          />
          <Product
            id="95324"
            title="Echo Dot (3rd Gen), Certified Refurbished, Grey – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
            image="https://m.media-amazon.com/images/I/61rT+xgJeDL._SL1000_.jpg"
            price={269.99}
            rating={4}
          />
          <Product
            id="32542"
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)"
            image="https://m.media-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg"
            price={294.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="56514"
            title="Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports - LC27T550FDWXXL"
            image="https://m.media-amazon.com/images/I/91+fneWO62L._SL1500_.jpg"
            price={429.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
