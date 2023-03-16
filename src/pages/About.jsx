import './css/about.css'
import Header from '../components/Header'
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Footer from '../components/Footer'


const About = ()=> {
    return (
        <div className='about'>
            <Header carrito={true}></Header>
          <div className="about1">
          
          <FontAwesomeIcon icon={faCloud} className='aboutIcon'></FontAwesomeIcon>
          <h2 className="aboutH2">
            sobre vapearg
          </h2>
          <p className='pAbout'>¡Disfruta del vapeo al instante con Vapearg! Envío inmediato en Rosario. </p>
          </div>
          <iframe width="100%" height="515" src="https://www.youtube.com/embed/x253JA_0Uqs" title="¿Que es Vapeanding?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
          
          <Footer></Footer>
        </div>
    )
}

export default About;