import React, { useState } from 'react';
import Slider from 'react-slick';
import image1 from "../Assets/Images/Beard_Content/image1.png"
import image2 from "../Assets/Images/Beard_Content/image2.png"
import image3 from "../Assets/Images/Beard_Content/image3.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: current => setCurrentSlide(current)
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="Slide 1" />
        <p>BEARD WAX 10E</p>
      </div>
      <div>
        <img src={image2} alt="Slide 2" />
        <p>BEARD WAX 10E</p>
      </div> 
      <div>
        <img src={image3} alt="Slide 3" />
        <p>BEARD WAX 10E</p>
      </div>
      <div>
        <img src={image3} alt="Slide 4" />
        <p>BEARD WAX 10E</p>
      </div>
    </Slider>
  );
};

export default Carousel;