import Hero from '../components/Hero'
import News from '../components/News'
import Projects from '../components/Projects'
import Concept from './Concept'
import ContactUs from '../components/ContactUs'

export default function Home() {
    return (
        <div className='home column'>
            <Hero />
            <News />
            <Projects />
            <Concept />
            <ContactUs />
        </div>
    )
}
