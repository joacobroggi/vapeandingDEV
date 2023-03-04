import "./css/home.css";
import HeaderM from "../components/HeaderM";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="homeDesk">
        <Home1></Home1>
        <Home2></Home2>
        <div className="home3">
          <FontAwesomeIcon icon={faCloud} className='iconHome3'></FontAwesomeIcon>
          <h2 className="home3Title">
            Estamos revolucionando el vaping rosarino
          </h2>
          <p className="home3p">
          Vapeanding es la mejor opción, con envios en solo MINUTOS, precios accesibles y solo productos originales.
          </p>
          <Link className='home3LinkBtn'>Conocé vapeanding</Link>
        </div>
        <Footer></Footer>
      </div>
      <div className="homeMobile">
        <div className="home1M">
          <div className="filtroHM">
            <HeaderM></HeaderM>
            <div className="txtHome1M">
              <h2 className="titleHomeM"> 2x1 EN VAPERS IGNITE</h2>
              <p className="pHome1M">
                Vapeanding celebra su lanzamiento y por eso les regalamos la
                segunda unidad en cualquier producto Ignite.
              </p>
            </div>
          </div>
        </div>

        <div className="home2M">
          <h2 className="h2Home2M">IGNITE, MARCA LIDER EN CALIDAD.</h2>
          <p className="pH2M">
            Ignite es una marca que se caracteriza por tener calidad y diseño
            premium. Con una amplia variedad de sabores, opciones y precios
            accesibles, Ignite es una de las marcas lideres en el mundo del
            vaping.
          </p>
          <img
            src={require("../img/ignite1.webp")}
            alt=""
            className="imgHome2M"
          />
          <div className="botoneraH2M">
            <span className="dot1"></span>
            <span className="dot2"></span>
          </div>
        </div>

        <FooterM></FooterM>
      </div>
    </div>
  );
};

export default Home;
