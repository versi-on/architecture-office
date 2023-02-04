import imgNews_1 from '../assets/images/img-news-1-simone-hutsch.png'
import imgNews_2 from '../assets/images/img-news-2-bridgehouse.png'

export default function News() {
    return (
        <div className="container grid grid-small-wide news">
            <div className="container__content content">
                <div className='content__title'>
                    <h2 className="container__title">Latest News</h2>
                </div>
                <button className='container__btn'>read more</button>
            </div>
            <img src={imgNews_1} alt="simone-hutsch" className='container__img img-small news-img-1' />
            <img src={imgNews_2} alt="bridgehouse" className='container__img img-wide' />
        </div>
    )
}
