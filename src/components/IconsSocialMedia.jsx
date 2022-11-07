import twitter from '../assets/icons/twitter.png'
import insta from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import whatsapp from '../assets/icons/whatsapp.png'

export default function IconsSocialMedia() {
    return (
        <div className='icons row'>
            <img src={twitter} alt="twitter" />
            <img src={insta} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={whatsapp} alt="whatsapp" />
        </div>
    )
}
