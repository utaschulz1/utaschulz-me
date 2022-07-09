import React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { slider } from "./carousel.module.css";
import CustomImage from "../utils/customImage";

const Carousel = ({ imgagesObject }) => {
  // USAGE: <Carousel imgagesObject={[{name: "about.png", alt: "hello"}, {name: "oldshop.jpg"}]} />
  const width = window.innerWidth ?? 1080;

  const settings = {
    dots: true,
    arrows: width < 600 ? false : true,
    // fade: true,
    lazyLoad: true,
    // vertical: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: width < 600 ? false : true,
    autoplaySpeed: 5000,
  };

  const imgMap = imgagesObject.map((img, i) => {
    return (
      <div key={i}>
        <CustomImage name={img.name} alt={img.alt} />
      </div>
    );
  });

  return (
    <div className={slider}>
      <Slider {...settings}>{imgMap}</Slider>
    </div>
  );
};

export default Carousel;
