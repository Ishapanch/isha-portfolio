import React from "react";
import { ImageGallery } from "react-image-grid-gallery";
import Img1 from "../assets/portfolio/1.jpg";
import Img2 from "../assets/portfolio/2.jpg";
import Img3 from "../assets/portfolio/3.jpg";
import Img4 from "../assets/portfolio/4.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Portfolio.css";

const imagesArray = [
  {
    alt: "Image1's alt text",
    src: Img1,
  },
  {
    alt: "Image1's alt text",
    src: Img2,
  },
];
const imagesArrayTwo = [
  {
    alt: "Image1's alt text",
    src: Img3,
  },
  {
    alt: "Image1's alt text",
    src: Img4,
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="portfolio-heading text-center">
              <p>Showcasing some of my best work</p>
              <h3>Portfolio</h3>
            </div>
          </div>
          
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel>
              <ImageGallery
                imagesInfoArray={imagesArray}
                columnWidth="100%"
                gapSize={24}
              />
            </TabPanel>


            <TabPanel>
              <ImageGallery
                imagesInfoArray={imagesArrayTwo}
                columnWidth="100%"
                gapSize={24}
              />
            </TabPanel>
          </Tabs>
         
        </div>
      </div>
    </section>
  );
}
