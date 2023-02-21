import ContactUs from '../components/ContactUs'
import imgNewsHero from '../assets/images/img-news-hero.png'
import imgNewsLong from '../assets/images/img-news-long.png'
import imgNews1 from '../assets/images/img-news-1.png'
import imgNews2 from '../assets/images/img-news-2.png'
import imgNews3 from '../assets/images/img-news-3.png'
import imgNews4 from '../assets/images/img-news-4.png'

export default function News() {
    return (
        <div className='news column'>
            <div className='news-hero row'>
                <img src={imgNewsHero} alt="news buildings" className='news-hero__image' />
                <div className='news-hero__content column'>
                    <div className='flex-grow'>
                        <h2 className="title">What's new</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Mauris fringilla gravida integer cras es jdfke nunc. Dolor pretium sed est etiam neque pharetra quis commodo. Egestas nec ipsum eu euismod dictumst turpis.
                        </p>
                        <br />
                        <p>
                            Augue sed non leo in blandit ullamcorper maecenas diam. Faucibus hendrerit ultricies morbi a felis mi quam. Convallis nulla accumsan viverra lectus eu amet.
                            Facilisis eu consectetur at lectus turpis platea metus enim volutpat.
                        </p>
                    </div>
                    <button className='container__btn'>let's work thogether</button>
                </div>
            </div>

            <div className='all-news-container'>
                <div className='all-news-first-column column'>
                    <h2 className='title'>More news</h2>
                    <img src={imgNewsLong} alt="abstract architecture" className='all-news-img-1' />
                </div>
                <div className='column'>
                    <div className='news-text'>
                        <h3>News title</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Mauris fringilla gravida.
                        </p>
                        <p>
                            Augue sed non leo in blandit ullamcorper maecenas hkjfrtzh diam. Faucibus varius hendrerit morbi a felis mi quam. Convallis nulla accumsan viverra ut amet odio lectus eu amet.
                        </p>
                        <p>
                            Facilisis eu consectetur at lectus turpis platea metus enim volutpat.
                        </p>
                        <p>
                            Sretium sed est etiam neque pharetra quis commodo. Egestas nec ipsum eu euismod dictumst turpis.
                        </p>
                    </div>
                    <button className='container__btn'>load more</button>
                </div>

                <div className='news-images column'>
                    <div className='news-image'>
                        <img src={imgNews1} alt="News" className='' />
                        <a href="/#" className='news-link'>news link</a>
                    </div>
                    <div>
                        <img src={imgNews2} alt="News" className='' />
                        <a href="/#" className='news-link'>news link</a>
                    </div>
                </div>

                <div className='news-images column'>
                    <div className='news-image'>
                        <img src={imgNews3} alt="News" className='' />
                        <a href="/#" className='news-link'>news link</a>
                    </div>
                    <div>
                        <img src={imgNews4} alt="office" className='' />
                        <a href="/#" className='news-link'>news link</a>
                    </div>
                </div>
            </div>
            <ContactUs />
        </div>
    )
}
