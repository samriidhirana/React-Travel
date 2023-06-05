import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const data = [
  {
    image: "/images/destination/dest-img1.jpg",
    caption: "Caption 1",
    title: "Kyoto",
    subTitle: "きょうと • 京都",
    description: "Description Here",
  },
  {
    image: "/images/destination/dest-img2.jpg",
    caption: "Caption 2",
    title: "Osaka",
    subTitle: "	おおさか • 大坂",
    description: "Description Here",
  },
  {
    image: "/images/destination/dest-img3.jpg",
    caption: "Caption 3",
    title: "Hiroshima",
    subTitle: "ひろしま • 広島",
    description: "Description Here",
  },
  {
    image: "/images/destination/dest-img4.jpg",
    caption: "Caption 4",
    title: "Nara",
    subTitle: "なら • 奈良",
    description: "Description Here",
  },
  {
    image: "/images/destination/dest-img5.jpg",
    caption: "Caption 5",
    title: "Tokyo",
    subTitle: "とうきょう • 東京",
    description: "Description Here",
  },
];

const DestinationCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="carousel-bg">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          fade
          keyboard={true}
        >
          {data.map((slide, index) => {
            return (
              <Carousel.Item key={index} className="destination-bg-img">
                <div
                  className="destination-info"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <h3>Visit</h3>

                  <h1>{slide.title}</h1>
                  <p>{slide.subTitle}</p>
                </div>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider image"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default DestinationCarousel;
