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
                    <h6 className="opcionFooter">CONTACTO</h6>
                    <h6 className="opcionFooter">INFO</h6>
                    <h6 className="opcionFooter">JMBROGGI</h6>
                    <h6 className="opcionFooter">+VAPEANDING</h6>
                </div>
                <div className="redesFooter">
                    <FontAwesomeIcon icon={faInstagram} className='iconFooterR'/>
                    <FontAwesomeIcon icon={faTelegram} className='iconFooter'/>
                    <FontAwesomeIcon icon={faTwitter} className='iconFooter'/>
                </div>
            </div>
            <div className="footerContainer2">
                
                <h6 className="locationFooter">Rosario, Argentina.</h6>
            
                <div className="infoFooter">
                    <h6 className="opcion2Footer">Terminos de Uso</h6>
                    <h6 className="opcion2Footer">Privacidad</h6>
                    <h6 className="opcion2Footer">Cookies</h6>
                </div>
            </div>
        </div>
    )
};



export default Footer;