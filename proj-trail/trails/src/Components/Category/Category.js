import React from 'react';
import { dataslide } from "./data";
import { dataslideone } from "./dataone";
import { dataslidetwo } from "./datatwo";
import { dataslidethree } from "./datathree";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Category.css";

// React component
class Category extends React.Component {
    render() {
        let settings = {
            accessibility:  true,
            adaptiveHeight: true,
            arrows:         true,
            autoplay:       false,
            autoplaySpeed:  4500,
            centerMode:     true,
            infinite:       true,
            pauseOnFocus:   false,
            pauseOnHover:   false,
            dots:           false,
            slidesPerRow:   7,
            slidesToScroll: 1
        }
        return (  
            <div className="stylize">
                <h1 className="text">Explore the many diverse trails of the bay!</h1>
                <h1 className="description">The Bay Area (more fully, the San Francisco Bay Area), ringing the San Francisco Bay in northern California, is a geographically diverse 
                and extensive metropolitan region that is home to over 7 million inhabitants.</h1>
                <h1 className="alpha"> A-G</h1>
                <Slider {...settings}>
                {
                        dataslide.map((item, i) => {
                            return (
                                <li key={i}>

                    <div className="sexy" style={{
                          position: 'relative', 
                          color: 'white', 
                          top: 70, 
                          left: '50%', 
                          transform: 'translateX(-50%)'
                        }} >{item.name}</div>
                      
                                <div className="img-wrapper">
                                    <img className="icon" style={{ width: '160px', height: '120px'}}
                                        src={item.title}
                                    />
                                </div>
                            </li>
                            )
                        })
                    }
                </Slider>
                <h1 className="alpha"> H-N</h1>
                <Slider {...settings}>
                {
                        dataslideone.map((item, i) => {
                            return (
                                <li key={i}>
                                
                            <div className="sexy" style={{
                                position: 'relative', 
                                color: 'white', 
                                top: 70, 
                                left: '50%', 
                                transform: 'translateX(-50%)'
                            }} >{item.name}</div>

                                <img className="icon" style={{ width: '160px', height: '120px'}}
                                    src={item.title}
                                />

                                </li>
                            )
                        })
                    }
                </Slider>
                <h1 className="alpha"> O-U</h1>
                <Slider {...settings}>
                {
                        dataslidetwo.map((item, i) => {
                            return (
                                <li key={i}>

                            <div className="sexy" style={{
                                position: 'relative', 
                                color: 'white', 
                                top: 70, 
                                left: '50%', 
                                transform: 'translateX(-50%)'
                            }} >{item.name}</div>

                                <img className="icon" style={{ width: '160px', height: '120px'}}
                                    src={item.title}
                                />

                                </li>
                            )
                        })
                    }
                </Slider>
                <h1 className="alpha"> V-Z</h1>
                <Slider {...settings}>
                {
                        dataslidethree.map((item, i) => {
                            return (
                                <li key={i}>

                            <div className="sexy" style={{
                                position: 'relative', 
                                color: 'white', 
                                top: 70, 
                                left: '50%', 
                                transform: 'translateX(-50%)'
                            }} >{item.name}</div>

                                <img className="icon" style={{ width: '160px', height: '120px'}}
                                    src={item.title}
                                />

                                </li>
                            )
                        })
                    }
                </Slider>
                </div>
        )
    }
}

export default Category