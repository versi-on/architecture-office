import Contact from '../components/ContactUs'
import imgProjects1 from '../assets/images/img-projects-1.png'
import imgProjects2 from '../assets/images/img-projects-2.png'
import imgProjects3 from '../assets/images/img-projects-3.png'
import imgOffice1 from '../assets/images/img-office-1.png'
import imgOffice2 from '../assets/images/img-office-2.png'
import imgOffice3 from '../assets/images/img-office-3.png'
import imgOffice4 from '../assets/images/img-office-4.png'

export default function Projects() {
    return (
        <div className="projects-page">
            <div className='projects-page-container-1'>
                <div className="projects-page-cln-1">
                    <h2 className="title">Projects</h2>
                    <img src={imgProjects1} alt="project building one" />
                    <p>Mauris fringilla consectetur gravida integer cras accumsan et kipsum est amet nunc. </p>
                    <a href="#" className='link'>read more</a>
                </div>
                <div className="projects-page-cln-2">
                    <p>
                        Faucibus varius hendrerit ultricies morbi a felis mi quam. Convallis otto lectus eu amet. Facilisis eu consectetur at lectus turpis platea metus enim volutpat.
                    </p>
                    <img src={imgProjects2} alt="project building two" />
                    <p>
                        Delor pretium sed est etiam neque pharetra quis commodo. Egestas nec ipsum eu euismod dictumst turpis.
                        Augue sed non leo in blandit ullamcorper maecenas diam.
                    </p>
                    <a href="#">read more</a>
                </div>
                <div className="projects-page-cln-3">
                    <img src={imgProjects3} alt="project building three" />
                </div>
            </div>
            <div className='images-line row'>
                <img src={imgOffice1} alt="office" className='' />
                <img src={imgOffice2} alt="office" className='' />
                <img src={imgOffice3} alt="office" className='' />
                <img src={imgOffice4} alt="office" className='' />
            </div>
            <Contact />
        </div>
    )
}
