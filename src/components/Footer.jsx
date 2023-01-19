import { Link } from 'react-router-dom';
import IconsSocialMedia from './IconsSocialMedia'
import imgMap from '../assets/images/img-map.png'
import iconEmail from '../assets/icons/icon-email.png'
import iconPhone from '../assets/icons/icon-phone.png'
import iconAddress from '../assets/icons/icon-home.png'

export default function Footer() {
    return (
        <footer className='column'>
            <div className="footer__line"></div>
            <div className="footer__top footer row">
                <div className="footer__logo footer-item">
                    <Link to="/" className="link logo">aRcHiTec</Link>
                    <p>Architecture Office</p>
                </div>
                <div className="footer__contact">
                    <div className='footer__contact-item'>
                        <img src={iconEmail} alt="email" className='footer__contact-icon' width="20" height="20" />
                        <p>archtec@office.com</p>
                    </div>
                    <div className='footer__contact-item'>
                        <img src={iconPhone} alt="phone" className='footer__contact-icon' width="20" height="20" />
                        <p>+1 212-965-0914</p>
                    </div>
                    <div className='footer__contact-item footer-contact'>
                        <img src={iconAddress} alt="address" className='footer__contact-icon' width="20" height="20" />
                        <div className='column'>
                            <p>55 Liberty St, 2nd Fl,</p>
                            <p>New York,</p>
                            <p>NY 10005,</p>
                            <p>United States</p>
                        </div>
                    </div>
                </div>
                <div className="footer__map">
                    <h3 className='bold_'>Check the Map</h3>
                    <img src={imgMap} alt="map" className='footer__map-img' />
                </div>
                <div className="footer__icons">
                    <IconsSocialMedia />
                </div>
            </div>
            <div className="footer__right row-center">
                <p>copyright 2023 aRcHiTec | All rights reserved</p>
            </div>
        </footer>
    )
}
