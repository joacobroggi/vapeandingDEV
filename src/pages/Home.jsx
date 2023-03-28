import "./css/home.css";
import HeaderM from "../components/HeaderM";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Home = () => {
  const [swipe1, setSwipe1] = useState(true);
  const [swipe2, setSwipe2] = useState(false);
  const [swipe3, setSwipe3] = useState(false);
  const handee = ()=> {
    alert('fiumba loquendo voice')
}

  const goToSwiper1 = ()=> {
    setSwipe1(true);
    setSwipe2(false);
    setSwipe3(false);
  }
  const goToSwiper2 = ()=> {
    setSwipe1(false);
    setSwipe2(true)
    setSwipe3(false)
  }
  const goToSwiper3 = ()=> {
    setSwipe1(false);
    setSwipe2(false)
    setSwipe3(true)
  }

  return (
    <div>
      <div className="homeDesk">
        <Home1></Home1>
        <Home2></Home2>
        <div className="home3">
          <FontAwesomeIcon icon={faCloud} className='iconHome3'></FontAwesomeIcon>
          <h2 className="home3Title">
            revolucionando el vaping rosarino
          </h2>
          <p className="home3p">
          Vapearg es la revolución de los vapers ¿Por qué conformarse con esperar días por tus productos cuando podés disfrutar de <b style={{fontWeight: 400, textDecoration:'underline'}}>envío inmediato</b> en Rosario? Vapea como se debe con Vapearg.
          </p>
          <Link to='/ayuda' className='home3LinkBtn'>Conocé vapearg</Link>
        </div>
        <Footer></Footer>
      </div>



      <div className="homeMobile">
        <div className="home1M">
          <div className="filtroHM">
            <HeaderM carrito={true}></HeaderM>
            <div className="txtHome1M">
              <h2 className="titleHomeM"><span className="nerko">Bienvenido a</span> <span className="changoM">Vapearg</span></h2>
              <p className="pHome1M">
              Disfrutá del vapeo al instante con Vapearg. Envío inmediato en Rosario.
              
              </p>
              
            </div>
          </div>
        </div>

        <div className={swipe1 ? "home2M" : 'hide'}>
        <Link to='/filtros/marca/Zomo' className="home2Izq">
          
          </Link>
          <div className="botoneraH2M">
            <span className="dot1"></span>
            <span className="dot2" onClick={goToSwiper2}></span>
          </div>
        </div>
        <div className={swipe2 ? "home2M2" : 'hide'}>
          
        <Link to='/filtros/marca/Zomo' className="home2Izq">
          
          </Link>
          <div className="botoneraH2M">
            <span className="dot2" onClick={goToSwiper1}></span>
            <span className="dot1"></span>
          </div>
        </div>

        <div className="home3M">
          <div className="txtHome3M">
            <h3 className="h3home3M">ESTAMOS REVOLUCIONANDO EL VAPING ROSARINO</h3>
            <p className="phome3M">Nuestra página es la mejor opción para conseguir tu vaper, con envios en solo MINUTOS, precios accesibles y solo productos originales.</p>
            <Link to='/ayuda' className="lhome3M">CONOCENOS</Link>
          </div>
          
        </div>

        <FooterM></FooterM>
      </div>
  
    </div>
  );
};

export default Home;
