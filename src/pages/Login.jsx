import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./css/login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { usuario, clave });
  };

  return (
    <div>
    <Header registro={true}></Header>
    <div className="loginBody">
        
      <div className="loginCard">
        <h3 className="h3Login">Iniciar Sesión</h3>
        <div className="loginForm">

     
          <label className="labelLogin">Email:</label>
        
          <input
            type="email"
            placeholder="joaquinmbroggi@gmail.com"
            onChange={(e) => setUsuario(e.target.value)}

            className='inputIniciar'
          />
          
            <label className="labelLogin">Contraseña:</label>
            
          <input
            type="password"
            placeholder="messi10"
            onChange={(e) => setClave(e.target.value)}
            className='inputIniciar'
          />
        

          <button onClick={handleLogin} disabled={isFetching} className='enviarLogin'>
           Enviar
          </button>

<h6 className="h6Login">ó</h6>

<button className="googleLogin">  <img src={require("../img/google-logo.png")} alt="" className="google-logo"/>Inicia sesión con Google</button>

        </div>
      </div>

      {error && <h2>SOS UN ULTRA MOGOLICO</h2>}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Login;
