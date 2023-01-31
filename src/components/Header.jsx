import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import IconsSocialMedia from './IconsSocialMedia';

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => {
        setIsActive(!isActive)
    }


    return (
        <header className='header row'>
            <Link to="/" className="link logo">aRcHiTec</Link>
            <Navbar isActive={isActive} />
            <div className="header__icons">
                <IconsSocialMedia />
            </div>
            <div className="menu-icon" onClick={toggleActive}>
                {isActive ?
                    <svg width="25" height="30" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.06066" y1="1.93934" x2="39.0607" y2="39.9393" stroke="black" stroke-width="5" />
                        <line x1="2.65125" y1="59.9393" x2="40.6312" y2="1.93934" stroke="black" stroke-width="5" />
                    </svg>
                    :
                    <svg width="30" height="30" viewBox="0 0 50 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1.5" x2="50" y2="1.5" stroke="black" stroke-width="5" />
                        <line y1="15.5" x2="50" y2="15.5" stroke="black" stroke-width="5" />
                        <line y1="29.5" x2="50" y2="29.5" stroke="black" stroke-width="5" />
                    </svg>
                }
            </div>
        </header>
    )
}
