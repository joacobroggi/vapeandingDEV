import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import Producto from "../components/Producto";
import Header from "../components/Header";
import HeaderM from "../components/HeaderM";
import MobileProducto from "../components/MobileProducto";
import './css/articulos.css';
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";




const ArticulosFiltradosModelo = ()=> {
    let parametro = useParams();
    let modelo = parametro.modelo;

    const [data, setData] = useState(null)

    useEffect(()=> {
        publicRequest.get("productos/modelo/"+ modelo).then((res)=>{
            setData(res.data)
            
        })
    }, [])


    return (
        <div className="articulosMain">
        <div className="articulosDesk">
       <Header carrito={true}></Header>
       <div className="cartelFiltro">
        <Link to='/comprar' style={{alignSelf: 'flex-start', marginLeft:'2%'}}><FontAwesomeIcon icon={faArrowLeft} className='arrowArticulo' ></FontAwesomeIcon></Link>
            <h2 className="h2Articulos">Línea {modelo.replace(/[0-9]/g, '')}</h2>
           
        </div>
       
       

    <div className="productos">
    {data && data.map(item=> <Producto titulo={item.titulo} precio={item.precio} img={item.img2} categorias={item.categorias} stock={item.enStock} desc={item.desc} key={item._id} id={item._id}/>)}
    </div>

    
    </div>

    <div className="articulosMobile">
       <HeaderM carrito={true}></HeaderM>
      
    <h3 className="artTitleM">PARA TODOS LOS GUSTOS TENEMOS UNA PITADA</h3>



    <div className="filtrosM">
        <div className="filtroM">
            <h3 className="h3FiltrosM">Marcas</h3>
            <ul className="ulFiltrosM">
                <li className="filtroM">Fume</li>
                <li className="filtroM">Ignite</li>
                <li className="filtroM">Zomo</li>
            </ul>
        </div>
        <div className="filtroM">
            <h3 className="h3FiltrosM">Sabores</h3>
            <ul className="ulFiltrosM">
                <li className="filtroM">Fume</li>
                <li className="filtroM">Ignite</li>
                <li className="filtroM">Zomo</li>
            </ul>
        </div>
        <div className="filtroM">
            <h3 className="h3FiltrosM">Pitadas</h3>
            <ul className="ulFiltrosM">
                <li className="filtroM">Fume</li>
                <li className="filtroM">Ignite</li>
                <li className="filtroM">Zomo</li>
            </ul>
        </div>
       
    </div>


       <div className="productosM">
        
    {data && data.map(item=> <MobileProducto titulo={item.titulo} precio={item.precio} img={item.img} categorias={item.categorias} stock={item.enStock} desc={item.desc} key={item._id} id={item._id}/>)}
    </div>
    
    </div>
    </div>
    )
}

export default ArticulosFiltradosModelo;