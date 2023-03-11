import { useState } from "react";
import Header from "../components/Header";
import HeaderM from '../components/HeaderM'
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./css/login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, clave });
  };

  return (
    <div>
    <Header registro={true}></Header>
    <HeaderM registro={true}></HeaderM>
    <div className="loginBody">
        
      <div className="loginCard">
        <h3 className="h3Login">Iniciar Sesión</h3>
        <div className="loginForm">
       
     
          <label className="labelLogin">Email:</label>
        
          <input
            type="email"
            placeholder="joaquinmbroggi@gmail.com"
            onChange={(e) => setEmail(e.target.value)}

            className='inputIniciar'
          />
          
            <label className="labelLogin">Contraseña:</label>
            
          <input
            type="password"
            placeholder="messi10"
            onChange={(e) => setClave(e.target.value)}
            className='inputIniciar'
          />
        
        {error && <h3 className="errorH3">La contraseña y/o el email son incorrectos</h3>}
          <button onClick={handleLogin} disabled={isFetching} className={error ? 'enviarLoginErr' : 'enviarLogin'}>
           Enviar
          </button>

<h6 className="h6Login">ó</h6>

<button className="googleLogin">  <img src={require("../img/google-logo.png")} alt="" className="google-logo"/>Inicia sesión con Google</button>

        </div>
      </div>

     
    </div>
    <Footer></Footer>
    <FooterM></FooterM>
    </div>
  );
};

export default Login;
