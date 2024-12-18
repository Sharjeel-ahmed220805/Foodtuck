import React from 'react'
import aboutImage from '../../../public/assets/images/about.jpg'
import './about.css'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div 
                className="col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
                data-aos-delay="100"
                >
                    <div className="about-img">
                        <Image src={aboutImage} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>Welcome to about section</h3>
                    <p className="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Sequi earum nesciunt iste, dolorum eos ipsum totam
                         assumenda accusantium, natus expedita numquam magnam ipsam. Assumenda voluptatibus tempore soluta et.
                          Numquam, minima. </p>
                </div>
            </div>
        </div>
    </section>
  )
}
