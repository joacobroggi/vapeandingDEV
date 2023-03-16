import Header from "../components/Header";
import HeaderM from "../components/HeaderM";
import './css/ayuda.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


const Ayuda = ()=> {

const [a1, seta1] = useState(false)
const [a2, seta2] = useState(false)
const [a3, seta3] = useState(false)
const [a4, seta4] = useState(false)
const [a5, seta5] = useState(false)


    return(
        <div className="ayudaMain">
            <Header></Header>
            <HeaderM></HeaderM>
            <h2 className="ayudaH2">
            PREGUNTAS FRECUENTES
            </h2>

            <div className="contAyuda">
                <div className="dropdwonAyuda">
                <div className="ayudaTitle">
                <h4 className="h4Ayuda">¿Como me puedo contactar con Vapearg?</h4>
                <FontAwesomeIcon icon={faCaretDown} className='iconAyuda' onClick={()=> seta1((current) => !current)}></FontAwesomeIcon>
                </div>
                    <div className={a1 ? "ayudaDesplegado" : 'hide'}>
                    
                    <p className="pAyuda">Puedes contactarte con vapearg por uno de estos medios:</p>
                    <ul className="ulAyuda">
                        <li className="liAyuda">
                            Telefono: 3412756433
                        </li>
                        <li className="liAyuda">
                            Email: vapearg@gmail.com
                        </li>
                        <li className="liAyuda">
                           Envianos un whatsapp tocando acá: <a>sex</a> 
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="dropdwonAyuda">
                <div className="ayudaTitle">
                <h4 className="h4Ayuda">¿Como me puedo contactar con Vapearg?</h4>
                <FontAwesomeIcon icon={faCaretDown} className='iconAyuda' onClick={()=> seta2((current) => !current)}></FontAwesomeIcon>
                </div>
                <div className={a2 ? "ayudaDesplegado" : 'hide'}>
                    
                    <p className="pAyuda">Contactate con vapearg por uno de estos medios:</p>
                    <ul className="ulAyuda">
                        <li className="liAyuda">
                            Telefono: 3412756433
                        </li>
                        <li className="liAyuda">
                            Email: vapearg@gmail.com
                        </li>
                        <li className="liAyuda">
                           Envianos un whatsapp tocando acá: <a>sex</a> 
                        </li>
                    </ul>
                    </div>
                </div>

                
            </div>
        </div>
    )
}


export default Ayuda