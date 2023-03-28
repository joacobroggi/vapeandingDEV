import Header from "../components/Header";
import HeaderM from "../components/HeaderM";
import './css/ayuda.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";


const About = ()=> {
  const [a1, seta1] = useState(true)
const [a2, seta2] = useState(false)
const [a3, seta3] = useState(false)
const [a4, seta4] = useState(false)
const [a5, seta5] = useState(false)
const [a6, seta6] = useState(false)
    return (
      <div className="ayudaMain">
      <Header></Header>
      <HeaderM carrito={true}></HeaderM>
      <h2 className="ayudaH2">
      PREGUNTAS FRECUENTES SOBRE VAPEARG
      
      </h2>

      <div className="mainContA">
      <div className="contAyuda">
          <div className={a1 ? 'dropdwonAyudaA' : "dropdwonAyuda"}>
          <div className="ayudaTitle">
          <h4 className="h4Ayuda">¿Que es Vapearg?</h4>
          <FontAwesomeIcon icon={a1 ? faCaretUp : faCaretDown} className='iconAyuda' onClick={()=> seta1((current) => !current)}></FontAwesomeIcon>
          </div>
              <div className={a1 ? "tracking-in-expand ayudaDesplegado" : 'hide'}>
              
              <p className="pAyuda">Vapearg es la tienda online de vapers por excelencia en Rosario. Ofrecemos productos de alta calidad a precios accesibles y envío inmediato.</p>
              
              </div>
          </div>

          <div className={a2 ? 'dropdwonAyudaA' : "dropdwonAyuda"}>
          <div className="ayudaTitle">
          <h4 className="h4Ayuda">¿Que es Vapearg?</h4>
          <FontAwesomeIcon icon={a2 ? faCaretUp : faCaretDown} className='iconAyuda' onClick={()=> seta2((current) => !current)}></FontAwesomeIcon>
          </div>
              <div className={a2 ? "tracking-in-expand ayudaDesplegado" : 'hide'}>
              
              <p className="pAyuda">Vapearg es la tienda online de vapers por excelencia en Rosario. Ofrecemos productos de alta calidad a precios accesibles y envío inmediato.</p>
              
              </div>
          </div>
         
          <div className={a3 ? 'dropdwonAyudaA' : "dropdwonAyuda"}>
          <div className="ayudaTitle">
          <h4 className="h4Ayuda">¿Que es Vapearg?</h4>
          <FontAwesomeIcon icon={a3 ? faCaretUp : faCaretDown} className='iconAyuda' onClick={()=> seta3((current) => !current)}></FontAwesomeIcon>
          </div>
              <div className={a3 ? "tracking-in-expand ayudaDesplegado" : 'hide'}>
              
              <p className="pAyuda">Vapearg es la tienda online de vapers por excelencia en Rosario. Ofrecemos productos de alta calidad a precios accesibles y envío inmediato.</p>
              
              </div>
          </div>
          
          <div className={a4 ? 'dropdwonAyudaA' : "dropdwonAyuda"}>
          <div className="ayudaTitle">
          <h4 className="h4Ayuda">¿Que es Vapearg?</h4>
          <FontAwesomeIcon icon={a4 ? faCaretUp : faCaretDown} className='iconAyuda' onClick={()=> seta4((current) => !current)}></FontAwesomeIcon>
          </div>
              <div className={a4 ? "tracking-in-expand ayudaDesplegado" : 'hide'}>
              
              <p className="pAyuda">Vapearg es la tienda online de vapers por excelencia en Rosario. Ofrecemos productos de alta calidad a precios accesibles y envío inmediato.</p>
              
              </div>
          </div>
      </div>
      </div>
      <Footer></Footer>
      <FooterM></FooterM>
      
  </div>
    )
}

export default About;