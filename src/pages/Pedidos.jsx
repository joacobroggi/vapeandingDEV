import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./css/envios.css";
import Header from "../components/Header";
import { publicRequest } from "../requestMethods";

const Pedidos = () => {
  const dispatch = useDispatch();
  const envio = useSelector((state) => state.cart.envio);
  const carrito = useSelector((state) => state.cart);
  const orden = useSelector((state) => state.orden);
  const usuario = useSelector((state) => state.user.currentUser);

  const [data, setData] = useState(null);

  const handleClick = (e) => {
    alert("sexologia");
  };

  useEffect(() => {
    publicRequest
      .get("compras/buscar/" + usuario._id, {
        headers: {
          token: `Bearer ${usuario.tokenAcceso}`,
        },
      })
      .then((res) => {
        setData(res.data);
        
        console.log(data);
      });
  }, []);

  return (
    <div className="enviosMain">
     <Header noPedidos={true}></Header>

      {data && (
        <div className="enviosCont">
          <div className="izquierdaEnvios">
           <div className="cartelContainer">
           <div className="cartelOrden">
              <h2 className="h2Orden">¡Tu orden fue realizada con éxito!</h2>
              <hr className="hrEnvios2"/>
              <p className="pOrden">
                Ya estas cada vez más cerca de tu vaper {usuario.nombre}. Te
                mandamos el recibo por email a {usuario.email}
              </p>
            </div>
            
           </div>

           
          </div>

          <div className="derechaEnvios">
            {data.map((orden) => (
              <div>
                {orden.productos.map((producto) => (
                  <div key={producto.claveUnica} className="productoEnvios">
                    <img src={require("../img/" + producto.img)} alt="" />
                    <div className="txtProductoEnvios">
                      <h3 className="h3EnviosProducto">{producto.titulo}</h3>
                      <h4 className="h4EnviosProducto">{producto.sabor}</h4>
                    </div>
                    <h2 className="precioEnviosProducto">${producto.precio}</h2>
                  </div>
                ))}
              </div>
            ))}

            {data.map((orden) => (
              <div className="enviosBottom">
                <hr className="hrEnvios" />
                <h5 className="subH5">PAGO: {orden.pago}</h5>
                <h5 className="subH5">Direccion: {orden.direccion}</h5>
                <hr className="hrEnvios" />
                <div className="subEnvios">
                  <h5 className="subH5">Subtotal:</h5>
                  <h5 className="subH5">${orden.total}</h5>
                </div>
                <div className="envioH5">
                  <h5 className="subH5">
                    {(() => {
                      switch (orden.entrega) {
                        case '390':
                          return "Envio 24 horas:";
                        case '490':
                          return "Envio Inmediato:";
                        default:
                          return "Envio 1 - 3 días:";
                      }
                    })()}
                  </h5>
                  <h5 className="subH5">${orden.entrega}</h5>
                </div>
                <hr className="hrEnvios" />
                <div className="subEnvios">
                  <h4 className="subH4">Total:</h4>
                  <h4 className="subH4">
                    ${parseInt(orden.total) + parseInt(orden.entrega)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pedidos;
