'use client';

import React, {useState, useEffect} from 'react';

//import swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import SectionTitle from '../components/SectionTitle';
import PagesItem from '../components/PagesItem';

import './pages.css'


export default function Pages() {
    const [slides, setSlides] = useState<any | []>([]);

    const getPagesData = () => {
        fetch('http://localhost:3000/api/pages')
        .then(res => res.json())
        .then(data => setSlides(data))
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getPagesData();
    }, []);

  return (
   <section id="pages" className="pages">
    <div className="container" data-aos="fade-up">
        <SectionTitle
          title="Events"
          subtitle="Organize Your Events In Our Restaurant"
          />

          <div data-aos="fade-up" data-aos-delay="100">
            <Swiper
            spaceBetween={0}
            autoplay={{
                delay:5000,
                disableOnInteraction:false,
            }}
            pagination={{
                el:'.swiper-pagination',
                type:'bullets',
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            className="pages-slider swiper-container"
            >
                {slides &&
                  slides.length > 0 &&
                  slides.map(
                     (slide: {
                        id: number;
                        image: string;
                        title: string;
                        price: number;
                        content: string;
                        details: string[];
                        summary: string;
                     }) => (
                        <SwiperSlide key={slide.id}>
                            <PagesItem item={slide} />
                        </SwiperSlide>
                     )
                  )}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
    </div>
   </section>
  )
}
