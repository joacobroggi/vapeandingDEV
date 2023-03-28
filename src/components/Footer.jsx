import './css/footer.css';
import { Link } from "react-router-dom";
import {faInstagram, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer1">
                <h2 className="marcaFooter">VAPEARG.</h2>
                <div className="opcionesFooter">
                    <h6 className="opcionFooter"><a href="mailto:vapearg.tienda@gmail.com" style={{textDecoration: 'none', color: 'white'}}>CONTACTO</a></h6>
                    <h6 className="opcionFooter"><Link to='/ayuda' style={{textDecoration: 'none', color: 'white'}}>INFO</Link></h6>
                    <h6 className="opcionFooter"><a href="https://www.instagram.com/jmbroggi.dev/" style={{textDecoration: 'none', color: 'white'}}>JMBROGGI</a></h6>
                   
                </div>
                <div className="redesFooter">
                <a href="https://www.instagram.com/vapearg.store/" style={{textDecoration: 'none', color: 'white'}}><FontAwesomeIcon icon={faInstagram} className='iconFooterR'/></a>
                    
                    <FontAwesomeIcon icon={faTelegram} className='iconFooter'/>
                    <FontAwesomeIcon icon={faTwitter} className='iconFooter'/>
                </div>
            </div>
            <div className="footerContainer2">
                
                <h6 className="locationFooter">Rosario, Argentina.</h6>
            
                <div className="infoFooter">
                    <h6 className="opcion2Footer">Terminos de Uso</h6>
                    <Link to='/ayuda' className="opcion2Footer" style={{textDecoration: 'none'}}>Ayuda</Link>
                    <h6 className="opcion2Footer">Cookies</h6>
                </div>
            </div>
        </div>
    )
};



export default Footer;