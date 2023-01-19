import React from 'react'
import heroImg from '../assets/images/img-hero.png'

export default function Hero() {
    return (
        <div className='hero row'>
            <div className="hero-img-container">
                <img src={heroImg} alt="hero" className='hero__img' width="700" />
            </div>
            <div className="hero__content column">
                <h1 className='hero__title'>We <span className='bold '>design </span> cities, <br />
                    <span className='bold'> buildings </span> and <span className='bold'>places</span> <br /> with a strong sense <br />
                    of <span className='bold'> purpose </span> and <span className='bold'> identity</span>
                </h1>
                {/* <p className='hero__text'>
                        Architecture studio <span className='bold_'> aRcHiTec </span>
                        is a lead class in a graduate professional architecture program for different kind of projects.
                    </p> */}
                <button className='container__btn hero__btn'>more about us</button>
            </div>
        </div>
    )
}
