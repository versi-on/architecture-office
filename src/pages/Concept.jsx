import img from '../assets/images/img-concept.png'

export default function Concept() {
    return (
        <div className="container grid grid-small-wide concept">
            <div className="container__content  content">
                <div className='content__title'>
                    <h2 className="container__title">Our Concept</h2>
                </div>
                <button className='container__btn'>read more</button>
            </div>
            <div className="plh">
                <div className="container__text">
                    <p>Concept is an idea, thought or notion that forms the backbone and foundation of a design project and one that drives it forward.
                    </p>
                    <p>It becomes the force and identity behind a projects progress and is consistently consulted throughout every stage of its development.</p>
                </div>
            </div>
            <img src={img} alt="concept blueprint" className='img container__img' />
        </div>
    )
}
