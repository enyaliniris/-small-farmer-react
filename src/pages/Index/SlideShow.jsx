import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
    cssEase: 'ease',
    touchThreshold: 5,
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: false,
  }
  return (
    <>
      <div className="a-clip-img">
        <Slider {...settings}>
          <div>
            <img src="./Images/IndexSlide1.jpg" />
          </div>
          <div>
            <img src="./Images/IndexSlide2.jpg" />
          </div>
          <div>
            <img src="./Images/IndexSlide3.jpg" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default SlideShow
