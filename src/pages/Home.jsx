import Hero from '../components/Hero'
import News from '../components/News'
import Projects from '../components/Projects'

export default function Home() {
    return (
        <div className='home column'>
            <Hero />
            <News />
            <Projects />
        </div>
    )
}
