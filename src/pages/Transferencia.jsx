import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./css/envios.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
const Transferencia = () => {
  const orden = useSelector((state) => state.orden);
  const envio = useSelector((state) => state.cart.envio);
  const carrito = useSelector((state) => state.cart);
  const usuario = useSelector((state) => state.user.currentUser);

  const [finalizado, setFinalizado] = useState(false);

  let monto = orden.total;

  const handleClick = () => {
    let pago = "transferencia";
    let objeto = {
      idUsuario: usuario._id,
      productos: carrito.productos,
      total: carrito.total,
      entrega: envio,
      direccion: orden.direccion,
      pago: pago,
      telefono: orden.telefono,
      nombre: usuario.nombre + " " + usuario.apellido,
      hasOrdered: true,
    };

    axios
      .post("https://vapearg.onrender.com/api/compras/", objeto, {
        headers: {
          token: `Bearer ${usuario.tokenAcceso}`,
        },
      })
      .then((res) => {
        console.log(res);

        setFinalizado(true);
      });
  };

  return (
    <div className="transferencia">
      <div className="breadCrumb">
        
        <Link className="linkBreadcrumb">Pago</Link>
        <span className="separadorBreadCrumb">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <Link className="linkBreadcrumbActive">Transferencia</Link>
      </div>
      <div className="transferenciaC">
        <div className="envioInfoCont2 envioInfoCont2M">
          <h3 className="h3Transfe">DATOS PARA REALIZAR LA TRANSFERENCIA:</h3>

          <div className="envioInfo">
            <h3 className="h3ContactoInfo">
              <span style={{ textTransform: "uppercase" }}>ALIAS: </span>
            </h3>
            <span className="linkContactoEnvio">EJEMPLO1234</span>
          </div>
          <hr className="hr" />
          <div className="envioInfo">
            <h3 className="h3ContactoInfo">
              <span style={{ textTransform: "uppercase" }}>CBU: </span>
            </h3>
            <span className="linkContactoEnvio">12903210932</span>
          </div>
          <hr className="hr" />
          <div className="envioInfo">
            <h3 className="h3ContactoInfo">
              <span style={{ textTransform: "uppercase" }}>MONTO:</span>{" "}
            </h3>
            <span className="linkContactoEnvio">${monto}</span>
          </div>
        </div>
        <h4 className="h4Transf">
          Tu pedido será confirmado una vez que el pago haya sido procesado
        </h4>
        <Link onClick={handleClick} className="btnTrans">
          YA REALIZÉ LA TRANSFERENCIA
        </Link>
      </div>
      {finalizado && <Navigate to="/pedidos" />}
    </div>
  );
};

export default Transferencia;
