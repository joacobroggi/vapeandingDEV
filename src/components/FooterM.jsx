import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faTelegram, faTwitter, faTiktok} from '@fortawesome/free-brands-svg-icons';
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import './css/footer.css';


const FooterM = ()=> {
    return (
        <div className='footerM'>
            <div className="firstRowFooterM">
            <span className='marcaFooterM'><FontAwesomeIcon icon={faCloud}></FontAwesomeIcon> Vapeanding</span>
            <div className='redesFooterM'>
                <FontAwesomeIcon icon={faInstagram} className='iconFooterM'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTelegram} className='iconFooterM'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} className='iconFooterM'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTiktok} className=''></FontAwesomeIcon>
            </div>
            </div>
<hr />
            <div className="secondRowFooterM">
                <div className="opcionesFooterM">
                    <h6 className="opcionFooterM">Cookies</h6>
                    <h6 className="opcionFooterM">Terminos de uso</h6>
                    <h6 className="opcionFooterM">Privacidad</h6>
                </div>
            </div>
            
        </div>
    )
}


export default FooterM;