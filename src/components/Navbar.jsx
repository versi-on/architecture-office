import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav row'>
            <NavLink to="/projects" className="nav__link">projects</NavLink>
            <NavLink to="/news" className="nav__link">news</NavLink>
            <NavLink to="/office" className="nav__link">office</NavLink>
            <NavLink to="/contact" className="nav__link">contact</NavLink>
        </nav>
    )
}
