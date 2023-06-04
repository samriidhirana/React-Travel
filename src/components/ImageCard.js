import React from "react";

import "./ImageCard.css";

const ImageCard = () => {
  const DATA = [
    {
      url: "/images/tokyoMedium.jpeg",
      title: "Tokyo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      url: "/images/kyotoMedium.jpeg",
      title: "Kyoto",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      url: "/images/naraMedium.jpeg",
      title: "Nara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
    {
      url: "/images/osakaMedium.jpeg",
      title: "Osaka",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    },
  ];

  // console.log(DATA[0]);

  // const cardStyle = {
  //     backgroundImage: `url('${DATA[0].url}')`,
  // }
  return (
    <div className="img-grid">
      {DATA.map((curElem, index) => {
        return (
          <div
            className="img-card"
            style={{ backgroundImage: `url('${curElem.url}')` }}
            key={index}
          >
            <div className="image-info">
              <h2>{curElem.title}</h2>
              <p>{curElem.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
