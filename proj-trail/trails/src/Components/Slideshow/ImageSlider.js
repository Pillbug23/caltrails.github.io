import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import './ImageSlider.css';

export default function ImageSlider() {
    return (
      <div className='slideshow' style={{ height:120}}>
        <Carousel controls={false}>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://cdn.suwalls.com/wallpapers/nature/beautiful-sunset-in-grand-canyon-47489-1920x1080.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/284466.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://www.teahub.io/photos/full/2-29537_hd-nature-wallpapers-landscape-green-cute-desktop-waterfall.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/825200.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/825194.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://hikinglovers.files.wordpress.com/2014/02/high-mountain-hiking-trail-1920x1080-wallpaper-jjr5fr.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1859582.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://cdn.suwalls.com/wallpapers/nature/mountain-shadowing-upon-the-lake-54621-1920x1200.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }