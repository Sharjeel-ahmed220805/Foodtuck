'use client'

import React, {useEffect} from 'react'
import GLightbox from 'glightbox'
import './hero.css'
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
    useEffect(() => {   
            const lightbox = GLightbox({
            selector: 'glightbox',
        });     
    }, []);
  return (
    <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
          >
            <div className="row">
                <div className="col-lg-8">
                    <h1>
                        Welcome to foodtuck <span>Restaurant</span>
                    </h1>
                    <h2>Flavours that bring people together</h2>

                    <div className="btns">
                        <HeroBtn name="our menu" target="menu" />
                        <HeroBtn name="book a table" target="book a table" />
                        
                    </div>
                </div>
                <div 
                   className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                   data-aos="zoom-in"
                   data-aos-delay="200"
                   >
                    <a
                      href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk"
                      className="glightbox play-btn"
                      ></a>
                   </div>
            </div>
          </div>
    </section>
  )
}
