import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import P404 from "./pages/404";
import "./App.css";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import { useSelector } from "react-redux";
import Articulos from "./pages/Articulos";
import Articulo from "./pages/Articulo";
import Carrito from "./pages/Carrito";
import About from "./pages/About";
import Comprar from "./pages/Comprar";
import Pago from "./pages/Pago";
import ArticulosFiltradosMarca from "./pages/ArticulosFiltrados";
import ArticulosFiltradosPuffs from "./pages/ArticulosFiltradosPuffs";
import Pedidos from "./pages/Pedidos.jsx";
import ArticulosFiltradostipoSabor from "./pages/ArticulosFiltradostipoSabor";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "./requestMethods";
import { addOrden } from "./redux/ordenReducer";
import Ayuda from "./pages/Ayuda";

function App() {
  const usuario = useSelector((state) => state.user.currentUser);
 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route
          path="/carrito"
          element={usuario ? <Carrito /> : <Login />}
        ></Route>

        <Route path="/comprar" element={<Articulos />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route
          path="/filtros/marca/:marca"
          element={<ArticulosFiltradosMarca />}
        ></Route>
        <Route
          path="/filtros/tipoSabor/:tipoSabor"
          element={<ArticulosFiltradostipoSabor />}
        ></Route>

        <Route
          path="/filtros/puffs/:puffs"
          element={<ArticulosFiltradosPuffs />}
        ></Route>

        <Route path="/comprar/:id" element={<Articulo />}></Route>

        <Route
          path="/checkout"
          element={usuario ? <Comprar /> : <Login />}
        ></Route>
        <Route
          path="/checkout/pago"
          element={usuario ? <Pago /> : <Login />}
        ></Route>
        <Route
          path="/pedidos"
          element={usuario ? <Pedidos /> : <Login />}
        ></Route>

<Route
          path="/ayuda"
          element={<Ayuda></Ayuda>}
        ></Route>

        <Route
          path="/login"
          element={usuario ? <Navigate to="/" /> : <Login />}
        ></Route>

        <Route
          path="/registro"
          element={usuario ? <Navigate to="/" /> : <Registro />}
        ></Route>

        <Route path="*" element={<P404 />} />
      </Routes>
    </Router>
  );
}

export default App;
