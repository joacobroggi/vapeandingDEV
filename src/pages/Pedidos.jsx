import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/envios.css";
import HeaderM from "../components/HeaderM";
import Header from "../components/Header";
import FooterM from "../components/FooterM";
import { publicRequest } from "../requestMethods";
import { addOrden } from "../redux/ordenReducer";

const Pedidos = () => {
  const hasOrdered = useSelector((state) => state.orden.hasOrdered);
  const envio = useSelector((state) => state.cart.envio);
  const carrito = useSelector((state) => state.cart);
  const orden = useSelector((state) => state.orden);
  const usuario = useSelector((state) => state.user.currentUser);


  const [data, setData] = useState([]);

  

  const dispatch = useDispatch();
  

  useEffect(() => {
    publicRequest
      .get("compras/buscar/" + usuario._id, {
        headers: {
          token: `Bearer ${usuario.tokenAcceso}`,
        },
      })
      .then((res) => {
        setData(res.data);
        if (data.length === 0) {
          dispatch(
            addOrden({
              total: '',
              productos: '',
              envio: '',
              pago: '',
              direccion: '',
              apartamento: '',
              telefono: '',
              nombre: '',
              userId: '',
              hasOrdered: false,
            })
          );
        } else if (data === null) {
          dispatch(
            addOrden({
              total: '',
              productos: '',
              envio: '',
              pago: '',
              direccion: '',
              apartamento: '',
              telefono: '',
              nombre: '',
              userId: '',
              hasOrdered: false,
            })
          );
        } else {
          dispatch(addOrden({
            hasOrdered: true,
          }))
        }
        
      })
      
  }, [data]);

 

  return (
    <div className="enviosMain">
     <Header noPedidos={true}></Header>
     <HeaderM></HeaderM>

      {data && (
        <div className="enviosCont">
          <div className="izquierdaEnvios">
           <div className="cartelContainer">
           {hasOrdered ? <div className="cartelOrden">
              <h2 className="h2Orden">¡Tu orden fue realizada con éxito!</h2>
              <hr className="hrEnvios2"/>
              <p className="pOrden">
                Ya estas cada vez más cerca de tu vaper {usuario.nombre}. Te
                mandamos información importante de tu orden por email a {usuario.email}
              </p>
            </div> : <div>
            <div className="cartelOrden">
              <h2 className="h2Orden">No realizaste ninguna orden</h2>
              <hr className="hrEnvios2"/>
              <p className="pOrden">
                Elegí tu próximo vaper en la sección <Link to='/comprar'>comprar</Link> o compra tus articulos seleccionados en <Link to='/carrito'>carrito</Link>
              </p>
            </div>
              </div>}
            
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


      {data && (
        <div className="enviosContM">
            <div className="cartelContainer">
           {hasOrdered ? <div className="cartelOrdenM">
              <h2 className="h2Orden">¡Tu orden fue realizada con éxito!</h2>
              <hr className="hrEnvios2"/>
              {data.map((orden) => (
                orden.productos.map((prod) => (
                 <div className="ordenM">
                  <img src={require("../img/" + prod.img)} alt="" className="imgOrdenM"/>
                 <div className="subOrdenM">
                 <p className="pOrden2">{prod.titulo}</p>
                 <p className="pOrden22 ">${prod.precio}</p>
                 </div>
                 </div>
                ))
              ))}
              <hr className="hrEnvios2"/>
              <p className="pOrden">
                Ya estas cada vez más cerca de tu vaper {usuario.nombre}. Te
                mandamos el recibo por email a {usuario.email}
              </p>
              
             
             
              
            </div> : <div>
            <div className="cartelOrden">
              <h2 className="h2Orden">No realizaste ninguna orden</h2>
              <hr className="hrEnvios2"/>
              <p className="pOrden">
                Elegí tu próximo vaper en la sección <Link to='/comprar'>comprar</Link> o compra tus articulos seleccionados en <Link to='/carrito'>carrito</Link>
              </p>
              
            </div>
              </div>}
            
           </div>
           <FooterM></FooterM>
        </div>
      )}
      
    </div>
  );
};

export default Pedidos;
