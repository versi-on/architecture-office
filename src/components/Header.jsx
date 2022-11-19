import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import IconsSocialMedia from './IconsSocialMedia';

export default function Header() {
    return (
        <header className='header row'>
            <Link to="/" className="link logo">aRcHiTec</Link>
            <Navbar />
            <div className="header__icons">
                <IconsSocialMedia />
            </div>
        </header>
    )
}
