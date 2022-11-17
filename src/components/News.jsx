import imgNews_1 from '../assets/images/img-news-1-simone-hutsch.png'
import imgNews_2 from '../assets/images/img-news-2-bridgehouse.png'

export default function News() {
    return (
        <div className="container grid-small-wide">
            <div className="container__content content">
                <div className='content__title'>
                    <div className='line line-short' ></div>
                    <h2 className="container__title">Latest News</h2>
                </div>
                <button className='container__btn'>Show More</button>
            </div>
            <img src={imgNews_1} alt="simone-hutsch" className='container__img img-small' />
            <img src={imgNews_2} alt="bridgehouse" className='container__img img-wide' />
        </div>
    )
}
