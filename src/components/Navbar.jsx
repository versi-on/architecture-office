import { NavLink } from 'react-router-dom'

export default function Navbar({ isActive }) {
    return (
        <nav className={isActive ? "nav active" : "nav "} >
            <NavLink to="/projects" className="nav__link">projects</NavLink>
            <NavLink to="/news" className="nav__link">news</NavLink>
            <NavLink to="/office" className="nav__link">office</NavLink>
            <NavLink to="/contact" className="nav__link">contact</NavLink>
        </nav>
    )
}
