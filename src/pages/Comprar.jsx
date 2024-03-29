import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/envios.css";
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { addOrden } from "../redux/ordenReducer";


const Comprar = () => {
  const dispatch = useDispatch();
  const envio = useSelector((state) => state.cart.envio);
  const carrito = useSelector((state) => state.cart);
  const usuario = useSelector((state) => state.user.currentUser);
  const hasOrdered = useSelector((state) => state.orden.hasOrdered);
  const navigate = useNavigate();

  const [telefono, setTelefono] = useState(0);
  const [direccion, setDireccion] = useState('');
  const [apartamento, setApartamento] = useState('');
  const [orden, setOrden] = useState({})
  
const sendData = ()=> {
  console.log(telefono);
}

const continuar = (e)=> {
  e.preventDefault();
  if (validarDireccion(direccion) && validarTelefono(telefono)) {
    dispatch(
      addOrden(orden)
    )
    navigate('pago')
  }
}

function validarDireccion(direccion) {
  if (direccion === "") {
    alert("Introduzca una direccion");
    return false;
  } else if (direccion.length > 15) {
    alert("Introduzca una direccion válida");
    return false;
  } else if (direccion.length < 3) {
    alert("Introduzca una direccion válida");
    return false;
  } else {
    return true;
  } 
}
function validarTelefono(telefono) {
  if (telefono === 0) {
    alert('Introduzca un numero de telefono');
    return false;
  } else {
    return true;
  }
}

  useEffect(() => {
    if (carrito.productos.length === 0) {
      navigate('/carrito')
    } else if (carrito.productos.length > 10) {
      navigate('/carrito')
    } else
      setOrden({
        total: carrito.total + envio,
        productos: carrito.productos,
        envio: envio,
        pago: '',
        direccion: direccion,
        apartamento: apartamento,
        telefono: telefono,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        userId: usuario._id
      })
      console.log(orden);
  }, [telefono, direccion, apartamento]);

  return (
    
    <div className="enviosMain">
      {hasOrdered && <Navigate to='/pedidos'/>}
      <div className="breadCrumb">
      
        <Link to="/carrito" className="linkBreadcrumb">
          Carrito
        </Link>
        <span className="separadorBreadCrumb">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </span>
        <Link className="linkBreadcrumbActive">Envio</Link>
      </div>

{/* DESK */}
      <div className="enviosCont">
        <div className="izquierdaEnvios">
          <h3 className="titleEnvios">Datos de envio:</h3>

          <form className="formEnvios" autocomplete="off">
            <div className="contenedorFormFirst">
              <div className="contenedorForm2">
                <label className="labelEnvios">Nombre</label>
                <br />
                <input
                  type="text"
                  className="nombreEnvios"
                  placeholder="Joaquín"
                  
                />
              </div>

              <div className="contenedorForm2">
                <label className="labelEnvios">Apellido</label>
                <br />
                <input
                  type="text"
                  className="nombreEnvios"
                  placeholder="Broggi"
                />
              </div>
            </div>
            <div className="contenedorForm">
              <label className="labelEnvios">Dirección</label>
              <br />
              <input
                type="text"
                className="inputEnvios"
                placeholder="Larrea 624"
                onChange={(e)=> setDireccion(e.target.value)}
              />
            </div>
            <div className="contenedorForm">
              <label className="labelEnvios">Apartamento</label>
              <br />
              <input type="text" className="inputEnvios" placeholder="5B" onChange={(e)=> setApartamento(e.target.value)}/>
            </div>
            <div className="contenedorForm">
              <label className="labelEnvios">Telefono</label>
              <br />
              <input
                type="number"
                className="inputEnvios"
                placeholder="3412756433"
                onChange={(e)=> setTelefono(e.target.value)}
              />
            </div>
            <input type="checkbox" name="" id="" className="checkboxEnvios" onClick={sendData}/>{" "}
            <label className="labelEnvios">Guardar mi información</label>
          </form>

          <div className="botoneraEnvios">
            <Link to="/carrito" className="volverEnvios">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="chevronEnvios"
              ></FontAwesomeIcon>{" "}
              Volver al carrito
            </Link>
            <Link to="pago" className="continuarEnvios"
            onClick={(e)=> continuar(e)}>
              Continuar
            </Link>
          </div>
        </div>

        <div className="derechaEnvios">
          {carrito.productos.map((producto) => (
            <div key={producto.key} className="productoEnvios">
              <img src={require("../img/" + producto.img)} alt="" />
              <div className="txtProductoEnvios">
                <h3 className="h3EnviosProducto">{producto.titulo}</h3>
                <h4 className="h4EnviosProducto">{producto.sabor}</h4>
              </div>
              <h2 className="precioEnviosProducto">${producto.precio}</h2>
            </div>
          ))}

          <div className="enviosBottom">
            <hr className="hrEnvios"/>
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
            <hr className="hrEnvios"/>
            <div className="subEnvios">
              <h4 className="subH4">Total:</h4>
              <h4 className="subH4">${carrito.total + envio}</h4>
            </div>
          </div>
        </div>
      </div>
{/* MOBILE */}
      <div className="comprarM">

      <div className="comprarForm2">
      <h2 className="titleEnviosM">DATOS DE ENVIO:</h2>
      <label className="labelComprar">Nombre:</label>
        <input
          type="text"
          placeholder="Julian"
          className='inputIniciar'
        />
        <label className="labelComprar">Apellido:</label>
        <input
          type="text"
          placeholder="Alvarez"
          className='inputIniciar'
        />
        <label className="labelComprar">Direccion:</label>
        <input
          type="text"
          placeholder="Cordoba 1234"
          onChange={(e) => setDireccion(e.target.value)}
          className='inputIniciar'
        />
<label className="labelComprar">Apartamento (opcional):</label>
        <input
          type="text"
          placeholder="5B"
          onChange={(e) => setApartamento(e.target.value)}
          className='inputIniciar'
        />

<label className="labelComprar">Número de Télefono:</label>
        <input
          type="text"
          placeholder="3412756433"
          onChange={(e) => setTelefono(e.target.value)}
          className='inputIniciar'
        />

        
      </div>
      <div className="botoneraEnvios">
            <Link to="/carrito" className="volverEnvios">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="chevronEnvios"
              ></FontAwesomeIcon>{" "}
              Volver al carrito
            </Link>
            <Link to="pago" className="continuarEnvios"
            onClick={(e)=> continuar(e)}>
              Continuar
            </Link>
          </div>
      </div>
  
    </div>
  );
};

export default Comprar;
