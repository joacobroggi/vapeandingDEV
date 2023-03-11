import { useSelector } from "react-redux";
import {addEnvio} from '../redux/cartRedux'
import { useDispatch } from 'react-redux';
import "./css/carrito.css";
import Header from "../components/Header";
import HeaderM from "../components/HeaderM";

import CarritoItem from "../components/CarritoItem";
import CarritoItemMobile from "../components/CarritoItemMobile";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carrito = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.cart);
  const [envioPrice, setEnvioPrice] = useState(0);
  const [envioName, setEnvioName] = useState("Seleccione un método de envío");
  const [envioSelected, setEnvioSelected] = useState(false);
  const [envio1, setEnvio1] = useState(false);
  const [envio2, setEnvio2] = useState(false);
  const [envio3, setEnvio3] = useState(false);
  const [dropdownOp, setDropdownOp] = useState(false)

  const handleEnvio3 = () => {
    setEnvio3(true);
    setEnvio2(false);
    setEnvio1(false);
    setEnvioSelected(true);
    setEnvioPrice(0);
    setEnvioName('Envío en rango de 1 - 3 días');
    dispatch(
      addEnvio(0)
    )
  };

  function CheckEnvioInmediato(date = new Date()) {
    let dia = date.getDay();
    let hora = date.getHours();

    if (dia === 5 && hora >= 18) {
      console.log("viernes");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(
        addEnvio(490)
      )

    } else if (dia === 6 && hora < 3) {
      console.log("primeras horas sabado");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(
        addEnvio(490)
      )
    } else if (dia === 6 && hora >= 18) {
      console.log("sabado");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(
        addEnvio(490)
      )
    } else if (dia === 0 && hora < 3) {
      console.log("primeras horas domingo");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(
        addEnvio(490)
      )
    } else {
      alert(
        "El envio inmediato no esta disponible hoy. SOLO DISPONIBLE VIERNES Y SABADOS"
      );
      setEnvio3(true);
      setEnvio2(false);
      setEnvioName('Envío en rango de 1 - 3 días');
      setEnvioPrice(0);
      setEnvioSelected(true);
      dispatch(
        addEnvio(0)
      )
    }
  }

  const checkEnvio24 = (date = new Date())=>{
    let dia = date.getDay();
   

    if (dia > 0 && dia < 5 ) {
      setEnvio2(true);
      setEnvio3(false);
      setEnvio1(false);
      setEnvioName('Envío en 24 horas');
      setEnvioPrice(390);
      setEnvioSelected(true);
      dispatch(
        addEnvio(390)
      )
    } else {
      setEnvio3(true);
      setEnvio1(false);
      setEnvio2(false);
      setEnvioName('Envío en rango de 1 - 3 días');
      setEnvioPrice(0);
      setEnvioSelected(true);
      alert('Hoy no esta disponible este tipo de envio')
      dispatch(
        addEnvio(0)
      )
    }
  }
  const dropdownOpciones = ()=> {
      setDropdownOp((current) => !current);
  }

  return (
    <div className="carritoDivv">
      <div className="carritoDesk">
        <div className="carritoContainer">
       
            <Header></Header>
          <div className="izquierdaC">
           
            {carrito.productos.map((producto) => (
              <CarritoItem
                titulo={producto.titulo}
                img={require("../img/" + producto.img)}
                precio={producto.precio}
                claveUnica={producto.claveUnica}
                key={producto.claveUnica}
                sabor={producto.sabor}
              ></CarritoItem>
            ))}
          </div>

          <div className="derechaC">
            <div className="glassDerecha">
              <div className="opcionesEnvio">
                <h3 className="opcionesEntregaTitulo">Opciones de entrega:</h3>
                <div className="opcionesEntregaCont">
                  <div
                    onClick={() => CheckEnvioInmediato()}
                    className={envio1 ? "opcion1" : "opcion"}
                  >
                    <h5 className="h5Opcion">Inmediata ($490 adicionales)</h5>
                    <p className="pOpcion">
                      Entrega con envio en un rango de entre 15 y 90 minutos
                      dependiendo de la zona. SOLO DISPONIBLE VIERNES Y SABADOS
                      DESDE LAS 18 HASTA LAS 02.
                    </p>
                  </div>
                  <div
                    onClick={() => checkEnvio24()}
                    className={envio2 ? "opcion1" : "opcion"}
                  >
                    <h5 className="h5Opcion">24 horas ($390 adicionales)</h5>
                    <p className="pOpcion">
                      Entrega con envio en un rango de 24 horas. DISPONIBLE DE
                      LUNES A VIERNES.
                    </p>
                  </div>
                  <div
                    onClick={handleEnvio3}
                    className={envio3 ? "opcion1" : "opcion"}
                  >
                    <h5 className="h5Opcion">1-3 días ($0 adicionales)</h5>
                    <p className="pOpcion">
                      Entrega con envio en un rango de 72 horas. DISPONIBLE DE
                      SIEMPRE.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glassDerecha2">
                <h3 className="opcionesEntregaTitulo">recibo</h3>

                <div className="sub">
                  <h5 className="reciboH5">Subtotal</h5>
                  <h5 className="reciboH5">${carrito.total}</h5>
                </div>
                <div className="envioValor">
                  <h6 className="h6Recibo">{envioName}</h6>
                  <h6 className="h6Recibo">${envioPrice}</h6>
                </div>
                <div className="tot">
                  <h4 className="reciboH4">total</h4>
                  <h4 className="reciboH4">${parseInt(carrito.total) + envioPrice}</h4>
                </div>

                {envioSelected ? <Link to="/checkout" className="finishPurchase">
                  Terminar compra
                </Link> : <h2 className="finishPurchase2">
                  Elige un envio para continuar
                </h2>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      
      <div className="carritoMobile">
      <HeaderM></HeaderM>

        <div className={dropdownOp ? "dropCarritoMA" : "dropCarritoM"}>
          <button className="opcionesEntregaMobile" onClick={dropdownOpciones}>Opciones de entrega</button>
          <div className={dropdownOp ? 'dropdownEntrega' : 'hide'}>
            <div className={envio1 ? "opcionMA" : 'opcionM'} onClick={() => CheckEnvioInmediato()}>
              <h3 className="h3OpcionM">Entrega Inmediata ($490 adicionales)</h3>
              <p className="pOpcionM">Entrega con envio en un rango de entre 15 y 90 minutos
                      dependiendo de la zona. SOLO DISPONIBLE VIERNES Y SABADOS
                      DESDE LAS 18 HASTA LAS 02.</p>
            </div>

            <div className={envio2 ? "opcionMA" : 'opcionM'} onClick={() => checkEnvio24()}>
              <h3 className="h3OpcionM">24 HORAS ($390 ADICIONALES)</h3>
              <p className="pOpcionM">Entrega con envio en un rango de 24 horas. DISPONIBLE DE LUNES A VIERNES.</p>
            </div>
            <div className={envio3 ? "opcionMA" : 'opcionM'} onClick={handleEnvio3}>
              <h3 className="h3OpcionM">1 - 3 dias (0$ adicionales)</h3>
              <p className="pOpcionM">Entrega con envio en un rango de 72 horas. DISPONIBLE DE SIEMPRE.</p>
            </div>
          </div>
        </div>

        <div className="productosCarritoMobile">
          {carrito.productos.map((producto) => (
            <CarritoItemMobile
              titulo={producto.titulo}
              img={require("../img/" + producto.img)}
              precio={producto.precio}
              sabor="limon"
              claveUnica={producto.claveUnica}
              key={producto.claveUnica}
            ></CarritoItemMobile>
          ))}
        </div>

        <div className="checkoutCarritoMobile">
          <div className="txt-recibo-mobile">
            <div className="subCMobileCont">
              <h5 className="subCMobile">Subtotal</h5>
              <h5 className="subCMobile">${carrito.total}</h5>
            </div>

            <div className="envioCMobileCont">
              <h5 className="envioCMobile">{envioName}</h5>
              <h5 className="envioCMobile">${envioPrice}</h5>
            </div>

            <div className="totalCMobileCont">
              <h5 className="totalCMobile">total</h5>
              <h5 className="totalCMobile">${parseInt(carrito.total) + envioPrice}</h5>
            </div>
          </div>
          <div className="terminarCompraMobileDiv">
           {envioSelected ?  <Link to='/checkout' className="terminarCompraMobile">TERMINAR COMPRA</Link> :  <Link to='/carrito' className="terminarCompraMobile">ELIGE UN ENVIO PARA CONTINUAR</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
