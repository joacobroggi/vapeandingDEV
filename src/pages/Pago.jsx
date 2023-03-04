import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./css/envios.css";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import { addOrden } from "../redux/ordenReducer";

const Pago = () => {
  const dispatch = useDispatch();
  const envio = useSelector((state) => state.cart.envio);
  const carrito = useSelector((state) => state.cart);
  const orden = useSelector((state) => state.orden);
  const usuario = useSelector((state) => state.user.currentUser);
  const [transferencia, setTransferencia] = useState(false);
  const [efectivo, setEfectivo] = useState(true);
  const [criptomoneda, setCriptomoneda] = useState(false);
  const [finalizado, setFinalizado] = useState(false)

  const handleEfectivo = () => {
    setEfectivo((current) => !current);
 
    setCriptomoneda(false);
    setTransferencia(false);
  };
  const handleTransferencia = () => {
    
    setEfectivo(false);
    setCriptomoneda(false);
    setTransferencia((current) => !current);
  };
  const handleCriptomoneda = () => {
    
    setEfectivo(false);
    setCriptomoneda((current) => !current);
    setTransferencia(false);
  };
  const navigate = useNavigate();
  const handleClick = (e)=> {
      e.preventDefault();
      let pago;
      let objeto;

      if (efectivo) {
        pago = 'efectivo';
        objeto = {
          idUsuario: usuario._id,
          productos: carrito.productos,
          total: carrito.total,
          entrega: envio,
          direccion: orden.direccion,
          pago: pago,
          telefono: orden.telefono,
          nombre: usuario.nombre + ' ' + usuario.apellido,
          hasOrdered: 'ordered'
        }
        console.log(objeto);
        axios.post('http://localhost:7000/api/compras/', objeto)
            .then((res)=>{
                console.log(res);
                setFinalizado(true);
            })


        
      } else if (transferencia) {
        pago = 'transferencia'
        objeto = {
          idUsuario: usuario._id,
          productos: carrito.productos,
          total: carrito.total,
          entrega: envio,
          direccion: orden.direccion,
          pago: pago,
          telefono: orden.telefono,
          nombre: usuario.nombre + ' ' + usuario.apellido,
          hasOrdered: 'ordered'
        }


        axios.post('http://localhost:7000/api/compras/', objeto, {
          headers: {
            'token': `Bearer ${usuario.tokenAcceso}`
            }
        })
            .then((res)=>{
                console.log(res);
                setFinalizado(true);
            })

      } else if (criptomoneda) {
        pago = 'criptomoneda'
        objeto = {
          idUsuario: usuario._id,
          productos: carrito.productos,
          total: carrito.total,
          entrega: envio,
          direccion: orden.direccion,
          pago: pago,
          telefono: orden.telefono,
          nombre: usuario.nombre + ' ' + usuario.apellido,
          hasOrdered: 'ordered'
        }


        axios.post('http://localhost:7000/api/compras/', objeto, {
          headers: {
            'token': `Bearer ${usuario.tokenAcceso}`
            }
        })
            .then((res)=>{
                console.log(res);
                setFinalizado(true);
            })

      } else {
        alert('Seleccione un metodo de pago');
      }
  }

  return (
    <div className="enviosMain">
      <div className="breadCrumb">
      <Link to="/" className="linkBreadcrumb">
          Home
        </Link>
        <span className="separadorBreadCrumb">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <Link to="/comprar" className="linkBreadcrumb">
          Comprar
        </Link>
        <span className="separadorBreadCrumb">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <Link to="/carrito" className="linkBreadcrumb">
          Carrito
        </Link>
        <span className="separadorBreadCrumb">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <Link className="linkBreadcrumb">Envio</Link>
        <span className="separadorBreadCrumb">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <Link className="linkBreadcrumbActive">Pago</Link>
      </div>

      <div className="enviosCont">
        <div className="izquierdaEnvios">
          <div className="envioInfoCont">
            <div className="envioInfo">
              <h3 className="h3ContactoInfo">
                <span style={{ textTransform: "uppercase" }}>Contacto: </span>
                {orden.telefono}
              </h3>
              <Link className="linkContactoEnvio" to="/checkout">
                Cambiar
              </Link>
            </div>
            <hr className="hr" />
            <div className="envioInfo">
              <h3 className="h3ContactoInfo">
                <span style={{ textTransform: "uppercase" }}>Enviar a: </span>
                {orden.direccion}
              </h3>
              <Link className="linkContactoEnvio" to="/checkout">
                Cambiar
              </Link>
            </div>
            <hr className="hr" />
            <div className="envioInfo">
              <h3 className="h3ContactoInfo">
                <span style={{ textTransform: "uppercase" }}>
                  Apartamento:{" "}
                </span>{" "}
                {(() => {
                  switch (orden.apartamento) {
                    case "":
                      return "Casa";
                    default:
                      return orden.apartamento;
                  }
                })()}
              </h3>
              <Link className="linkContactoEnvio" to="/checkout">
                Cambiar
              </Link>
            </div>
          </div>

          <h3 className="titleEnvios2">Pago:</h3>

          <div className="opcionesDePago">
            <div className="opcionPago">
              <button
                className={
                  efectivo ? "opcionPagoButtonActive" : "opcionPagoButton"
                }
                onClick={handleEfectivo}
              ></button>
              <h3 className="h3Pagos">Contraentrega efectivo</h3>
            </div>
            <div className={efectivo ? "pagoDesc" : "hide"}>
              <p className="descPago">
                Abonas al momento que llega tu pedido a la puerta de tu casa en
                EFECTIVO.
              </p>
            </div>

            <div className="opcionPago">
              <button
                className={
                  transferencia ? "opcionPagoButtonActive" : "opcionPagoButton"
                }
                onClick={handleTransferencia}
              ></button>
              <h3 className="h3Pagos">Transferencia Bancaria</h3>
            </div>
            <div className={transferencia ? "pagoDesc" : "hide"}>
              <p className="descPago">
                Abonas al momento que llega tu pedido a la puerta de tu casa en
                EFECTIVO.
              </p>
            </div>

            <div className="opcionPago">
              <button
                className={
                  criptomoneda ? "opcionPagoButtonActive" : "opcionPagoButton"
                }
                onClick={handleCriptomoneda}
              ></button>
              <h3 className="h3Pagos">Criptomonedas</h3>
            </div>
            <div className={criptomoneda ? "pagoDesc" : "hide"}>
              <p className="descPago">
                Abonas al momento que llega tu pedido a la puerta de tu casa en
                EFECTIVO.
              </p>
            </div>
          </div>

          <div className="botoneraEnvios2">
            <Link to="/carrito" className="volverEnvios">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="chevronEnvios"
              ></FontAwesomeIcon>{" "}
              Volver al carrito
            </Link>
            <Link onClick={(e) => handleClick(e)} className="continuarEnvios">
              Continuar
            </Link>
          </div>
        </div>

        <div className="derechaEnvios">
          {carrito.productos.map((producto) => (
            <div key={producto.claveUnica} className="productoEnvios">
              <img src={require("../img/" + producto.img)} alt="" />
              <div className="txtProductoEnvios">
                <h3 className="h3EnviosProducto">{producto.titulo}</h3>
                <h4 className="h4EnviosProducto">{producto.sabor}</h4>
              </div>
              <h2 className="precioEnviosProducto">${producto.precio}</h2>
            </div>
          ))}

          <div className="enviosBottom">
            <hr className="hrEnvios" />
            <div className="subEnvios">
              <h5 className="subH5">Subtotal:</h5>
              <h5 className="subH5">${carrito.total}</h5>
            </div>
            <div className="envioH5">
              <h5 className="subH5">
                {(() => {
                  switch (envio) {
                    case 390:
                      return "Envio 24 horas:";
                    case 490:
                      return "Envio Inmediato:";
                    default:
                      return "Envio 1 - 3 días:";
                  }
                })()}
              </h5>
              <h5 className="subH5">${envio}</h5>
            </div>
            <hr className="hrEnvios" />
            <div className="subEnvios">
              <h4 className="subH4">Total:</h4>
              <h4 className="subH4">${carrito.total + envio}</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      {finalizado && <Navigate to='/pedidos'/>}
    </div>
  );
};

export default Pago;
