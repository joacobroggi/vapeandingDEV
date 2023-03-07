import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import "./css/articulo.css";
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticuloC from "../components/Articulo";
import ArticuloUnique from "../components/ArticuloUnique";
import ArticuloM from "../components/ArticuloM";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import HeaderM from "../components/HeaderM";
import ArticuloUniqueMobile from "../components/ArticuloUniqueMobile";

const Articulo = () => {
  let id = useParams();
  let idProducto = id.id;

  const [data, setData] = useState(null);
  const [hungria, setHungria] = useState(false);
  const [party, setParty] = useState(false);
  const [generico, setGenerico] = useState(false);
  const hasOrdered = useSelector((state) => state.orden.hasOrdered);

  useEffect(() => {
    publicRequest.get("productos/buscar/" + idProducto).then((res) => {
      setData(res.data);

      if (res.data.modelo === "Hungria 2.0") {
        setHungria(true);
      } else if (res.data.modelo === "Party 1800") {
        setParty(true);
      } else {
        setGenerico(true);
        setHungria(false);
        setParty(false);
      }
    });
  }, []);

  return (
    <div>
      <div className="articuloDesk">
        <Header carrito={true}></Header>

        {data && generico && (
          <div className="articuloBody">
            <Link to="/comprar">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrowArticulo"
              ></FontAwesomeIcon>
            </Link>

            <ArticuloC
              titulo={data.titulo}
              descripcion={data.desc}
              img={data.img2}
              fName={data.tituloCompleto}
              precio={data.precio}
              aspectos={data.aspectos}
              id={idProducto}
              sabor={data.sabor}
              marca={data.marca}
              modelo={data.modelo}
              pitadas={data.puffs}
              tipo={data.tipoSabor}
              nicotina={data.nicotina}
              hasOrdered={hasOrdered}
            ></ArticuloC>
          </div>
        )}

        {data && hungria && (
          <div className="articuloBodyhungria">
            <Link to="/comprar">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrowArticulohungria"
              ></FontAwesomeIcon>
            </Link>

            <ArticuloUnique
              logo="logohungria.png"
              tema="hungria"
              titulo={data.titulo}
              descripcion={data.desc}
              img={data.img}
              fName={data.tituloCompleto}
              precio={data.precio}
              aspectos={data.aspectos}
              id={idProducto}
              sabor={data.sabor}
              marca={data.marca}
              modelo={data.modelo}
              pitadas={data.puffs}
              tipo={data.tipoSabor}
              nicotina={data.nicotina}
              hasOrdered={hasOrdered}
            ></ArticuloUnique>
          </div>
        )}

        {data && party && (
          <div className="articuloBodyparty">
            <Link to="/comprar">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrowArticuloparty"
              ></FontAwesomeIcon>
            </Link>

            <ArticuloUnique
              logo="logoparty.png"
              tema="party"
              titulo={data.titulo}
              descripcion={data.desc}
              img={data.img}
              fName={data.tituloCompleto}
              precio={data.precio}
              aspectos={data.aspectos}
              id={idProducto}
              sabor={data.sabor}
              marca={data.marca}
              modelo={data.modelo}
              pitadas={data.puffs}
              tipo={data.tipoSabor}
              nicotina={data.nicotina}
              hasOrdered={hasOrdered}
            ></ArticuloUnique>
          </div>
        )}

        <Footer></Footer>
      </div>

      <HeaderM></HeaderM>
      {data && generico && (
        <div className="articuloMobile">
          <ArticuloM
            titulo={data.titulo}
            desc={data.desc}
            img={data.img}
            fullTitulo={data.tituloCompleto}
            precio={data.precio}
            id={idProducto}
            sabor={data.sabor}
            marca={data.marca}
            modelo={data.modelo}
            pitadas={data.puffs}
            tipo={data.tipoSabor}
            nicotina={data.nicotina}
          />
          <FooterM />
        </div>
      )}

      {data && hungria && (
        <div className="articuloMobileHungria">
          <ArticuloUniqueMobile
            titulo={data.titulo}
            desc={data.desc}
            img={data.img}
            fullTitulo={data.tituloCompleto}
            precio={data.precio}
            id={idProducto}
            sabor={data.sabor}
            marca={data.marca}
            modelo={data.modelo}
            pitadas={data.puffs}
            tipo={data.tipoSabor}
            nicotina={data.nicotina}
            tema="hungria"
            logo='logohungria.png'
          />
          <FooterM />
        </div>
      )}


{data && party && (
        <div className="articuloMobileParty">
          <ArticuloUniqueMobile
            titulo={data.titulo}
            desc={data.desc}
            img={data.img}
            fullTitulo={data.tituloCompleto}
            precio={data.precio}
            id={idProducto}
            sabor={data.sabor}
            marca={data.marca}
            modelo={data.modelo}
            pitadas={data.puffs}
            tipo={data.tipoSabor}
            nicotina={data.nicotina}
            tema="party"
            logo='logoparty.png'
          />
          <FooterM />
        </div>
      )}
    </div>
  );
};

export default Articulo;
