import Contact from '../components/Contact'
import Hero from '../components/Hero'
import News from '../components/News'
import Projects from '../components/Projects'
import Concept from './Concept'

export default function Home() {
    return (
        <div className='home column'>
            <Hero />
            <News />
            <Projects />
            <Concept />
            <Contact />
        </div>
    )
}
