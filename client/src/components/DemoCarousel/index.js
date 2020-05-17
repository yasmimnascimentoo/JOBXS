import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import Bannerone from '../../assets/banner1.png'
import Bannerthre from '../../assets/banner3.png'
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Bannerone} />
                </div>
                <div>
                    <img src={Bannerthre} />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;