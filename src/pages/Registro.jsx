import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { publicRequest } from "../requestMethods";
import { Navigate } from "react-router-dom";
import './css/login.css'
const Registro = () => {
    const [usuario, setusuario] = useState('');
    const [clave, setclave] = useState('');
    const [email, setemail] = useState('');
    const [nombre, setnombre] = useState('')
    const [apellido, setapellido] = useState('');
    const [edad, setedad] = useState('');
    const [creado, setCreado] = useState(false)
    const handleRegistro = (e)=> {
        let objeto = {
            usuario: usuario,
            clave: clave,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            email: email
        }
        // objeto = JSON.stringify(objeto);
        e.preventDefault();
       
            axios.post('http://localhost:7000/api/auth/registro', objeto)
            .then((res)=>{
                console.log(res);
                setCreado(true);
            })
       
    }


    return(
            <div>
    <Header registro={true}></Header>
    <div className="loginBody">
        
      <div className="loginCard">
        <h3 className="h3Login">REGISTRO</h3>
        <div className="loginForm">
       <div className="chiquitinRegistro">

       <div className="chiquitin">
        <label className="labelLogin">Nombre</label>
       <input type="text" placeholder="nombre" onChange={(e)=> setnombre(e.target.value)} className='nombreRegistro'/>
       </div>
        <input type="text" placeholder="apellido" onChange={(e)=> setapellido(e.target.value)} className='nombreRegistro'/>
       </div>
            <input type="number" placeholder="20" onChange={(e)=> setedad(e.target.value)}/>

        <label>Usuario</label>
        <input type="text" placeholder="usuario" onChange={(e)=> setusuario(e.target.value)}/>
          <label className="labelLogin">Email:</label>
        
          <input
            type="email"
            placeholder="joaquinmbroggi@gmail.com"
            onChange={(e)=> setemail(e.target.value)}

            className='inputIniciar'
          />
          
            <label className="labelLogin">Contraseña:</label>
            
          <input
            type="password"
            placeholder="messi10"
            onChange={(e)=> setclave(e.target.value)}
            className='inputIniciar'
          />
        

          <button className='enviarLogin' onClick={handleRegistro}>
           Enviar
          </button>

<h6 className="h6Login">ó</h6>

<button className="googleLogin">  <img src={require("../img/google-logo.png")} alt="" className="google-logo"/>Inicia sesión con Google</button>

        </div>
      </div>


    </div>
    <Footer></Footer>
    {creado && <Navigate to='/login'/>}
    </div>
            
      
    )
}

export default Registro;