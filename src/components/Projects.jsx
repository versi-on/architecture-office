import img_1 from '../assets/images/img-projects-1-architecture.png'
import img_2 from '../assets/images/img-projects-2-davide-pietralunga.png'

export default function Projects() {
    return (
        <div className="container grid grid-wide-small">
            <div className="container__content content">
                <div className='content__title'>
                    <div className='line line-short' ></div>
                    <h2 className="container__title">Recent Projects</h2>
                </div>
                <button className='container__btn'>Show More</button>
            </div>
            <img src={img_1} alt="architecture building" className='img container__img img-wide' />
            <img src={img_2} alt="davide-pietralunga" className='img container__img grid-item-small' />
        </div>
    )
}
