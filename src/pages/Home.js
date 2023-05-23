import React from "react";
import Navbar from "../components/Navbar";

import "./Home.css";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const parallax_ex = document.querySelectorAll('.parallax');
  

  let xValue=0, yValue=0;

  const onPageLoad = () => {
    parallax_ex.forEach((curElem) => {
      let speedx = curElem.dataset.speedx;
      let speedy = curElem.dataset.speedy;
      
      // let isOnLeft = parseFloat(getComputedStyle(curElem).left) < window.innerWidth / 2 ? 1 : -1 * 0.1;
      // let zValue = event.clientX - parseFloat(getComputedStyle(curElem).left) * isOnLeft;
      // console.log(curElem);
      curElem.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
      // perspective(23000px) translateZ(${zValue}px)
    })
  }

  onPageLoad();

  window.addEventListener("mousemove", (event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;

    
    onPageLoad();

    // console.log(xValue, yValue)
    
  })

  const mainBg = document.querySelector('.bg-img');
  console.log(mainBg);

  // if(window.innerWidth >= 725){
  //   mainBg.style.maxHeight = `${window.innerWidth * 0.2}px`;
  // }

  return (
    <>
      <div className="bg-img">
        <img
          src="/images/hero-img-mount.png"
          alt="mount"
          className="mount parallax"
          data-speedx='0.10'
          data-speedy='0.3'
        ></img>
        <img
          src="/images/hero-img-tower.png"
          alt="tower"
          className="tower parallax"
          data-speedx='0.05'
          data-speedy='0.1'
        ></img>
        <Navbar />
        <div className="hero-text1 parallax" data-speedx='0.02' data-speedy='0.2'>
          <h1>Explore</h1>
        </div>
        <div className="hero-text2 parallax" data-speedx='0.10' data-speedy='0.10'>
          <p>日本 • にほん</p>
          <h2>japan</h2>
        </div>
      </div>
      <section className="destination-section">
        <div className="destination-header">
          <p className="destinations-para">Here are few spots to explore</p>
          <h1 className="destinations-title">Popular Destinations</h1>
        </div>
          <ImageCard />
      </section>
    </>
  );
};

export default Home;
