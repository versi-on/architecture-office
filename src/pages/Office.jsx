import Contact from '../components/ContactUs'
import imgOfficeBuildings from '../assets/images/img-office-buildings.png'
import imgOffice1 from '../assets/images/img-office-1.png'
import imgOffice2 from '../assets/images/img-office-2.png'
import imgOffice3 from '../assets/images/img-office-3.png'
import imgOffice4 from '../assets/images/img-office-4.png'

export default function Office() {
    return (
        <div className='office column'>
            <div className='office__container row'>
                <img src={imgOfficeBuildings} alt="office buildings" className='office__hero-image' />
                <div className='office__content column'>
                    <div className='flex-grow'>
                        <h2 className="office__title">About us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Mauris fringilla gravida integer accumsan et est amet nunc. Dolor pretium sed est etiam neque pharetra quis commodo.
                            Egestas nec ipsum eu euismod dictumst turpis. Augue leo in blandit ullamcorper maecenas diam. Faucibus varius hendrerit ultricies morbi a felis mi quam. Convallis nulla accumsan viverra ut amet odio lectus eu amet.
                            Facilisis eu consectetur at lectus turpis platea metus enim volutpat.
                        </p>
                        <p>
                            Nisl libero vulputate a tincidunt nulla auctor. Id felis magna viverra feugiat mi nunc rutrum massa.
                            Faucibus odio amet vitae amet tellus at quam enim nunc.
                        </p>
                        <p>
                            Earius hendrerit ultricies morbi a felis mi quam.
                            Egestas nec ipsum eu euismod dictumst turpis. Augue sed non leo in blandit ullamcorper.
                        </p>
                    </div>
                    <button className='container__btn'>let's work thogether</button>
                </div>
            </div>
            <div className='office__images row'>
                <img src={imgOffice1} alt="office" className='' />
                <img src={imgOffice2} alt="office" className='' />
                <img src={imgOffice3} alt="office" className='' />
                <img src={imgOffice4} alt="office" className='' />
            </div>
            <Contact />
        </div>
    )
}
