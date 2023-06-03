import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderM from "../components/HeaderM";

import { Navigate } from "react-router-dom";
import "./css/login.css";
const Registro = () => {
  const [usuario, setusuario] = useState("");
  const [clave, setclave] = useState("");
  const [email, setemail] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [edad, setedad] = useState("");
  const [creado, setCreado] = useState(false);

  function validarEmail(email) {
    let valido =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(valido)) {
      return true;
    } else {
      alert("Utiliza una direccion de email valida");
      return false;
    }
  }
  function validarEdad(edad) {
    if (edad > 0 && edad < 18) {
      alert("Ningún menor de edad puede usar vapearg");
      return false;
    } else if (edad > 90) {
      alert("Introdcuzca una edad válida");
      return false;
    } else if (edad === 0 || edad === "") {
      alert("Introduzca una edad");
      return false;
    } else {
      return true;
    }
  }
  function validarUsuario(usuario) {
    if (usuario === "") {
      alert("Introduzca un nombre de usuario");
      return false;
    } else if (usuario.length > 15) {
      alert("El nombre de usuario no puede ser tan largo");
      return false;
    } else if (usuario.length < 3) {
      alert("El nombre de usuario debe tener mas de 3 caracteres");
      return false;
    } else {
      return true;
    }
  }
  function validarContraseña(contraseña) {
    if (contraseña === "") {
      alert("Introduzca una contraseña");
      return false;
    } else if (contraseña.length > 15) {
      alert("La contraseña debe tener menos de 15 caracteres");
      return false;
    } else if (contraseña.length < 6) {
      alert("La contraseña debe tener mas de 6 caracteres");
      return false;
    }else  if (!contraseña) {
      alert("Introduzca una contraseña");
      return false;
    }
     else {
      return true;
    }
  }
  function validarNombreYApellido(nombre, apellido) {
    if (nombre === "") {
      alert("Introduzca un nombre");
      return false;
    } else if (apellido === "") {
      alert("Introduzca un apellido");
      return false;
    } else if (nombre.length > 15) {
      alert("El nombre no puede ser tan largo");
      return false;
    } else if (apellido.length > 15) {
      alert("El apellido no puede ser tan largo");
      return false;
    } else {
      return true;
    }
  }

function validarTodo(email, clave, edad, usuario, nombre, apellido) {  
  if ( validarEmail(email) && validarContraseña(clave) && validarEdad(edad) && validarUsuario(usuario) && validarNombreYApellido(nombre, apellido)) {
    return true;
  } else {
    return false;
  }
}

  const handleRegistro = (e) => {
    e.preventDefault();
    let objeto = {
      usuario: usuario,
      clave: clave,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      email: email,
    };

    if (validarTodo(email, clave, edad, usuario, nombre, apellido)) {
      axios
        .post("https://vapearg.onrender.com/api/auth/registro", objeto)
        .then((res) => {
          console.log(res);
          setCreado(true);
        });
    } else {
      console.error("Algo salio mal");
    }

    // objeto = JSON.stringify(objeto);
  };

  return (
    <div>
      <Header login={true}></Header>
      <HeaderM login={true}></HeaderM>
      <div className="registroBody">
        <div className="registerCard">
          <h3 className="h3Login">REGISTRO</h3>
          <div className="loginForm2">
            <div className="chiquitinRegistro">
              <div className="chiquitinFlex1">
                <label className="labelLogin">Nombre:</label>
                <input
                  type="text"
                  placeholder="nombre"
                  onChange={(e) => setnombre(e.target.value)}
                  className="nombreRegistro2"
                />
              </div>

              <div className="chiquitinFlex2">
                <label className="labelLogin">Apellido:</label>
                <input
                  type="text"
                  placeholder="nombre"
                  onChange={(e) => setapellido(e.target.value)}
                  className="nombreRegistro2"
                />
              </div>
            </div>

            <label className="labelLogin">Email:</label>

            <input
              type="email"
              placeholder="pedrogonzalez@gmail.com"
              onChange={(e) => setemail(e.target.value)}
              className="nombreRegistro2"
            />

            <label className="labelLogin">Usuario</label>
            <input
              type="text"
              placeholder="usuario"
              onChange={(e) => setusuario(e.target.value)}
              className="nombreRegistro2"
            />

            <div className="filaRegistroU">
              <div className="contraFlex">
                <label className="labelLogin">Contraseña:</label>

                <input
                  type="password"
                  placeholder="vapers120"
                  onChange={(e) => setclave(e.target.value)}
                  className="inputPasswordRegistro"
                />
              </div>
              <div className="edadFlex">
                <label className="labelLogin">Edad:</label>
                <input
                  type="number"
                  placeholder="20"
                  onChange={(e) => setedad(e.target.value)}
                  className="edadRegistro"
                  min="18"
                  max="90"
                />
              </div>
            </div>

            <button className="enviarLogin" onClick={handleRegistro}>
              Enviar
            </button>

            <h6 className="h6Login">ó</h6>

            <button className="googleLogin">
              {" "}
              <img
                src={require("../img/google-logo.png")}
                alt=""
                className="google-logo"
              />
              Registrate con Google
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
      {creado && <Navigate to="/login" />}
    </div>
  );
};

export default Registro;
