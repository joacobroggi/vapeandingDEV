import { useSelector } from "react-redux";
import { addEnvio } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import "./css/carrito.css";
import Header from "../components/Header";
import HeaderM from "../components/HeaderM";
import { useEffect } from "react";
import CarritoItem from "../components/CarritoItem";
import CarritoItemMobile from "../components/CarritoItemMobile";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

const Carrito = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.cart);
  const [envioPrice, setEnvioPrice] = useState(0);
  const [envioName, setEnvioName] = useState("Seleccionar un método de envío");
  const [envioSelected, setEnvioSelected] = useState(false);
  const [envio1, setEnvio1] = useState(false);
  const [envio2, setEnvio2] = useState(false);
  const [envio3, setEnvio3] = useState(false);
  const [dropdownOp, setDropdownOp] = useState(false);
  const [vacio, setVacio] = useState(false);
  const hasOrdered = useSelector((state) => state.orden.hasOrdered);
  const [mostrar, setmostrar] = useState(false);
  const [sig, setsig] = useState(false);


  
  const navigate = useNavigate();

  const hasUserOrdered = () => {
    if (hasOrdered) {
      navigate("/pedidos");
    }
  };

  const carritoVacio = () => {
    if (carrito.productos.length === 0) {
      setVacio(true);
    } else {
      setVacio(false);
    }
  };

  useEffect(() => {
    hasUserOrdered();
    carritoVacio();
  }, [hasOrdered, envioSelected]);

  const handleEnvio3 = () => {
    setEnvio3(true);
    setEnvio2(false);
    setEnvio1(false);
    setEnvioSelected(true);
    setEnvioPrice(0);
    setEnvioName("Envío en rango de 1 - 3 días");
    dispatch(addEnvio(0));
    dropdownOpciones();
    setmostrar(true);
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
      dispatch(addEnvio(490));
      dropdownOpciones();
      setmostrar(true);
    } else if (dia === 6 && hora < 3) {
      console.log("primeras horas sabado");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(addEnvio(490));
      dropdownOpciones();
      setmostrar(true);
    } else if (dia === 6 && hora >= 18) {
      console.log("sabado");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(addEnvio(490));
      dropdownOpciones();
      setmostrar(true);
    } else if (dia === 0 && hora < 3) {
      console.log("primeras horas domingo");
      setEnvio3(false);
      setEnvio2(false);
      setEnvio1((current) => !current);
      setEnvioPrice(490);
      setEnvioName("Entrega Inmediata");
      setEnvioSelected(true);
      dispatch(addEnvio(490));
      dropdownOpciones();
      setmostrar(true);
    } else {
      alert(
        "El envio inmediato no esta disponible hoy. SOLO DISPONIBLE VIERNES Y SABADOS DESDE LAS 18 HASTA LAS 02."
      );
      setEnvio3(true);
      setEnvio2(false);
      setEnvioName("Envío en rango de 1 - 3 días");
      setEnvioPrice(0);
      setEnvioSelected(true);
      setmostrar(true);
      dispatch(addEnvio(0));
      dropdownOpciones();
      setmostrar(true);
    }
  }

  const checkEnvio24 = (date = new Date()) => {
    let dia = date.getDay();

    if (dia > 0 && dia < 5) {
      setEnvio2(true);
      setEnvio3(false);
      setEnvio1(false);
      setEnvioName("Envío en 24 horas");
      setEnvioPrice(390);
      setEnvioSelected(true);
      dispatch(addEnvio(390));
      dropdownOpciones();
      setmostrar(true);
    } else {
      setEnvio3(true);
      setEnvio1(false);
      setEnvio2(false);
      setEnvioName("Envío en rango de 1 - 3 días");
      setEnvioPrice(0);
      setEnvioSelected(true);
      alert("Hoy no esta disponible este tipo de envio");
      dispatch(addEnvio(0));
      dropdownOpciones();
      setmostrar(true);
    }
  };
  const dropdownOpciones = () => {
    setDropdownOp((current) => !current);
  };
  const handleConfirmacion = () => {
    setmostrar(false);
  };
  const handleConfirmacion2 = () => {
    setsig(true);
  };
  const handleConfirmacion3 = () => {
    setsig(false);
    setEnvio3(false);
      setEnvio2(false);
      setEnvio1(false);
      setEnvioPrice(0);
      setEnvioName("");
      setEnvioSelected(false);
      setmostrar(false)
  };

  return (
    <div className="carritoDivv">
      {/* DESK */}
      <div className="carritoDesk">
        <div className="carritoContainer">
          <Header noPedidos={true}></Header>

          {mostrar && (
            <div>
              {envio2 && !sig && (
                <div className="slide-in-fwd-top condicionesEnvio">
                  <div className="firstRowCondiciones">
                    <h3 className="h3CondicionesEnvio">
                      Seleccionaste la opcion de {envioName}
                    </h3>
                  </div>
                  <p className="pCondicionesEnvio">
                    Vapearg solo realiza envios en gran parte de Rosario y
                    algunas zonas de Funes. Porfavor verifica que el destino
                    final de envio este dentro de las zonas cubiertas por
                    Vapearg:
                  </p>
                  <img
                    src={require("../img/mapaRos.png")}
                    alt=""
                    className="mapaRos"
                  />
                  <br />
                  <button className="buttonCondi" onClick={handleConfirmacion2}>
                    SÍ, ESTA DENTRO
                  </button>
                </div>
              )}
              {envio2 && sig && (
                <div className="slide-in-fwd-top condicionesEnvioInmediato">
                  <div className="firstRowCondiciones">
                    <h3 className="h3CondicionesEnvio">
                      Seleccionaste la opcion de {envioName}
                    </h3>
                  </div>
                  <p className="pCondicionesEnvio">
                    Por cuestiones de organización manejamos todas las ventas con envio inmediato con interaccion directa y no en la pagina web. Elegí uno de estos medios para realizar tu orden: 
                  </p>
                  
                 
                  
                  <button className="buttonCondiIg" onClick={handleConfirmacion2}>
                  <FontAwesomeIcon icon={faInstagram} className='iconSig'/> Instagram
                  </button>
                  <a href="https://wa.me/3412756433/?text=urlencodedtext" className="buttonCondiWp" onClick={handleConfirmacion2}>
                  <FontAwesomeIcon icon={faWhatsapp} className='iconSig'/> WhatsApp
                  </a>
<br />
                  <button className="buttonCondi" onClick={handleConfirmacion3}>
                    ELEGIR OTRA FORMA DE ENVIO
                  </button>
                </div>
              )}

              {envio1 && (
                <div className="slide-in-fwd-top condicionesEnvio">
                  <div className="firstRowCondiciones">
                    <h3 className="h3CondicionesEnvio">
                      Seleccionaste la opcion de {envioName}
                    </h3>
                  </div>
                  <p className="pCondicionesEnvio">
                    Vapearg solo realiza envios en gran parte de Rosario y
                    algunas zonas de Funes. Porfavor verifica que el destino
                    final de envio este dentro de las zonas cubiertas por
                    Vapearg:
                  </p>
                  <img
                    src={require("../img/mapaRos.png")}
                    alt=""
                    className="mapaRos"
                  />
                  <br />
                  <button className="buttonCondi" onClick={handleConfirmacion}>
                    SÍ, ESTA DENTRO
                  </button>
                </div>
              )}
              {envio3 && (
                <div className="slide-in-fwd-top condicionesEnvio">
                  <div className="firstRowCondiciones">
                    <h3 className="h3CondicionesEnvio">
                      Seleccionaste la opcion de {envioName}
                    </h3>
                  </div>
                  <p className="pCondicionesEnvio">
                    Vapearg solo realiza envios en gran parte de Rosario y
                    algunas zonas de Funes. Porfavor verifica que el destino
                    final de envio este dentro de las zonas cubiertas por
                    Vapearg:
                  </p>
                  <img
                    src={require("../img/mapaRos.png")}
                    alt=""
                    className="mapaRos"
                  />
                  <br />
                  <button className="buttonCondi" onClick={handleConfirmacion}>
                    SÍ, ESTA DENTRO
                  </button>
                </div>
              )}
            </div>
          )}
        
          <div className={mostrar ? "hide" : "izquierdaC"}>
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
                  <h4 className="reciboH4">
                    ${parseInt(carrito.total) + envioPrice}
                  </h4>
                </div>
                {envioSelected && !vacio && !mostrar && (
                  <Link to="/checkout" className="finishPurchase">
                    CONTINUAR
                  </Link>
                )}
                {vacio && envioSelected && (
                  <h2 className="finishPurchase2">El carrito esta vacio</h2>
                )}
                {!envioSelected && (
                  <h2 className="finishPurchase2">
                    Elige un envio para continuar
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="carritoMobile">
        <HeaderM></HeaderM>
        <h5 className="tipoenvioM">tipo de envio:</h5>
        <div className={dropdownOp ? "dropCarritoMA" : "dropCarritoM"}>
          <button className="opcionesEntregaMobile" onClick={dropdownOpciones}>
            {envioName}
          </button>
          <div className={dropdownOp ? "dropdownEntrega" : "hide"}>
            <div
              className={envio1 ? "opcionMA" : "opcionM"}
              onClick={() => CheckEnvioInmediato()}
            >
              <h3 className="h3OpcionM">
                Entrega Inmediata ($490 adicionales)
              </h3>
              <p className="pOpcionM">
                Entrega con envio en un rango de entre 15 y 90 minutos
                dependiendo de la zona. SOLO DISPONIBLE VIERNES Y SABADOS DESDE
                LAS 18 HASTA LAS 02.
              </p>
            </div>

            <div
              className={envio2 ? "opcionMA" : "opcionM"}
              onClick={() => checkEnvio24()}
            >
              <h3 className="h3OpcionM">24 HORAS ($390 ADICIONALES)</h3>
              <p className="pOpcionM">
                Entrega con envio en un rango de 24 horas. DISPONIBLE DE LUNES A
                VIERNES.
              </p>
            </div>
            <div
              className={envio3 ? "opcionMA" : "opcionM"}
              onClick={handleEnvio3}
            >
              <h3 className="h3OpcionM">1 - 3 dias (0$ adicionales)</h3>
              <p className="pOpcionM">
                Entrega con envio en un rango de 72 horas. DISPONIBLE DE
                SIEMPRE.
              </p>
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
              <h5 className="totalCMobile">
                ${parseInt(carrito.total) + envioPrice}
              </h5>
            </div>
          </div>
          <div className="terminarCompraMobileDiv">
            {envioSelected && !vacio && (
              <Link to="/checkout" className="terminarCompraMobile">
                CONTINUAR
              </Link>
            )}

            {!envioSelected && !vacio && (
              <Link onClick={dropdownOpciones} className="terminarCompraMobile">
                ELIGE UN ENVIO PARA CONTINUAR
              </Link>
            )}

            {vacio && (
              <Link className="terminarCompraMobile">
                EL CARRITO ESTA VACÍO
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
