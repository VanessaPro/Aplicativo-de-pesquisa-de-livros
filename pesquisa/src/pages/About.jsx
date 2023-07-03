import React from 'react';
import "./About.css";
import aboutImg from "../img/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About LIVROLI</h2>
            <p className='fs-17'>"Special people appear in our lives when we least expect it, they are by our side when we need them most and they stay forever for becoming part of us"
            </p>
            <p className='fs-17'>"The mind that opens to a new idea will never return to its original size."</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About