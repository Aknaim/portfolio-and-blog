import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../styles/Gallery.css';
import Iceland1 from '../assets/Iceland/Iceland1.JPG'
import Iceland2 from '../assets/Iceland/Iceland2.JPG'
import Iceland3 from '../assets/Iceland/Iceland3.JPG'
import Iceland4 from '../assets/Iceland/Iceland4.JPG'
import Iceland5 from '../assets/Iceland/Iceland5.JPG'
import Iceland6 from '../assets/Iceland/Iceland6.JPG'
import Iceland7 from '../assets/Iceland/Iceland7.JPG'
import Iceland8 from '../assets/Iceland/Iceland8.JPG'
import Iceland9 from '../assets/Iceland/Iceland9.JPG'
import Iceland10 from '../assets/Iceland/Iceland10.JPG'
import Iceland11 from '../assets/Iceland/Iceland11.JPG'
import Iceland12 from '../assets/Iceland/Iceland12.JPG'
import Iceland13 from '../assets/Iceland/Iceland13.JPG'
import Iceland14 from '../assets/Iceland/Iceland14.JPG'
import Iceland15 from '../assets/Iceland/Iceland15.JPG'
import Iceland16 from '../assets/Iceland/Iceland16.JPG'

const images = [
  Iceland1,
  Iceland2,
  Iceland3,
  Iceland4,
  Iceland5,
  Iceland6,
  Iceland7,
  Iceland8,
  Iceland9,
  Iceland10,
  Iceland11,
  Iceland12,
  Iceland13,
  Iceland14,
  Iceland15,
  Iceland16
];

class Gallery extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  

  render() {
    const { index, direction } = this.state;
    return (
      <div id="galleryBody">
        <div id="galleryBackground" class="col-sm-8 col-sm-offset-2">
          <h1 id="icelandHeader">Trip to Iceland<h4>September 2018</h4></h1>
              <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={63} totalSlides={16}>        
                <Slider>
                  <Slide index={0}><img class='carouselImages' src={Iceland1}/></Slide>
                  <Slide index={1}><img class='carouselImages' src={Iceland2}/></Slide>
                  <Slide index={2}><img class='carouselImages' src={Iceland3}/></Slide>
                  <Slide index={3}><img class='carouselImages' src={Iceland4}/></Slide>
                  <Slide index={4}><img class='carouselImages' src={Iceland5}/></Slide>
                  <Slide index={5}><img class='carouselImages' src={Iceland6}/></Slide>
                  <Slide index={6}><img class='carouselImages' src={Iceland7}/></Slide>
                  <Slide index={7}><img class='carouselImages' src={Iceland8}/></Slide>
                  <Slide index={8}><img class='carouselImages' src={Iceland9}/></Slide>
                  <Slide index={9}><img class='carouselImages' src={Iceland10}/></Slide>
                  <Slide index={10}><img class='carouselImages' src={Iceland11}/></Slide>
                  <Slide index={11}><img class='carouselImages' src={Iceland12}/></Slide>
                  <Slide index={12}><img class='carouselImages' src={Iceland13}/></Slide>
                  <Slide index={13}><img class='carouselImages' src={Iceland14}/></Slide>
                  <Slide index={14}><img class='carouselImages' src={Iceland15}/></Slide>
                  <Slide index={15}><img class='carouselImages' src={Iceland16}/></Slide>
                </Slider>
                <ButtonFirst>First Slide</ButtonFirst>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <ButtonLast>Last Slide</ButtonLast>
              </CarouselProvider>
              <div id="imageThumbnails">
                  <img class='galleryImages' src={Iceland1}/>
                  <img class='galleryImages' src={Iceland2}/>
                  <img class='galleryImages' src={Iceland3}/>
                  <img class='galleryImages' src={Iceland4}/>
                  <img class='galleryImages' src={Iceland5}/>
                  <img class='galleryImages' src={Iceland6}/>
                  <img class='galleryImages' src={Iceland7}/>
                  <img class='galleryImages' src={Iceland8}/>
                  <img class='galleryImages' src={Iceland9}/>
                  <img class='galleryImages' src={Iceland10}/>
                  <img class='galleryImages' src={Iceland11}/>
                  <img class='galleryImages' src={Iceland12}/>
                  <img class='galleryImages' src={Iceland13}/>
                  <img class='galleryImages' src={Iceland14}/>
                  <img class='galleryImages' src={Iceland15}/>
                  <img class='galleryImages' src={Iceland16}/>
              </div>
        </div>
      </div>

    );
  }
}

export default Gallery;