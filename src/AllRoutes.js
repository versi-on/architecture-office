import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Office from './pages/Office';
import Projects from './pages/Projects';
import News from './pages/News';
import Contact from './pages/Contact';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/office' element={<Office />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}