import * as React from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { slider } from "./carousel.module.css";
import CustomImage from "../utils/customImage";

const Carousel = ({ imgNames }) => {
  // USAGE: <Carousel imgNames={["about.png", "oldshop.jpg"]} />

  const settings = {
    dots: true,
    // arrows: false,
    // fade: true,
    lazyLoad: true,
    // vertical: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const imgMap = imgNames.map((name, i) => {
    return (
      <div key={i}>
        <CustomImage name={name} />
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
