import React from 'react';
import "./About.css";
import aboutImg from "../img/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sobre</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Sobre LIVROLI</h2>
            <p className='fs-17'>"Pessoas especiais aparecem na nossa vida quando menos esperamos, estão ao nosso lado quando mais precisamos e ficam para sempre por se tornarem parte de nós."
            </p>
            <p className='fs-17'>"A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original."</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About