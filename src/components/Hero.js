import React from 'react'
import heroImg from '../assets/images/img-hero.png'

export default function Hero() {
    return (
        <div className='hero row'>
            <img src={heroImg} alt="hero" className='hero__img' width="700" />
            <div className="hero__content column">
                <div className='line line-long'></div>
                <h1 className='hero__title'>We <span className='bold'>design cities</span>, <br />
                    <span className='bold'> buildings </span> and <span className='bold'>places</span> <br /> with a strong sense of <br />
                    <span className='bold'> purpose </span> and <span className='bold'> identity</span>
                </h1>
                <button className='container__btn hero__btn'>More About US</button>
            </div>
        </div>
    )
}
