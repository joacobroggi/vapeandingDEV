 import Producto from "../components/Producto";
import { useState, useEffect } from 'react';
import { publicRequest } from "../requestMethods";
import Header from '../components/Header';
import HeaderM from '../components/HeaderM';
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import Spinner from "../components/Spinner";
import './css/articulos.css'
import MobileProducto from '../components/MobileProducto';
import { Link } from "react-router-dom";


const Articulos = ()=> {
    const [data, setData] = useState(null)

    useEffect(()=> {
        publicRequest.get("productos/").then((res)=>{
            setData(res.data)
            
        })
    }, [])


    return (
        <div className="articulosMain">
            <div className="articulosDesk">
           <Header carrito={true}></Header>

            {!data && (
                <div className="wholePage">
                    <Spinner></Spinner>
                </div>
            )}
        

            {data && <div>
            <div className="cartelArticulos">
                <h2 className="h2Articulos">PARA TODOS LOS GUSTOS TENEMOS UNA PITADA.</h2>
            </div>
            <div className="containerFiltros">
            <ul className="filtro1">
                    <p className="tituloFiltro">OFERTAS</p>
                    <li>
                        <p className='filtroP'>Todo</p>                        
                    </li>
                    
                </ul>
                <ul className="filtro1">
                    <p className="tituloFiltro">MARCAS</p>
                    <li>
                        <Link to='/filtros/marca/Fume' className='filtroP'>Fume</Link>                        
                    </li>
                   
                    <li>
                    <Link to='/filtros/marca/Zomo' className='filtroP'>Zomo</Link>                       
                    </li>
                </ul>
                <ul className="filtro">
                    <p className="tituloFiltro">PUFFS</p>
                    <li>
                        <Link to='/filtros/puffs/1800' className='filtroP'>1800</Link>
                    </li>
                    <li>
                    <Link to='/filtros/puffs/2000' className='filtroP'>2000</Link>                    
                    </li>
                    <li>
                    <Link to='/filtros/puffs/5000' className='filtroP'>5000</Link>                        
                    </li>
                </ul>
                <ul className="filtro">
                    <p className="tituloFiltro">SABORES</p>
                    <li>
                    <Link to='/filtros/tipoSabor/frutal' className='filtroP'>Frutal</Link> 
                    </li>
                    <li>
                    <Link to='/filtros/tipoSabor/tabaco' className='filtroP'>Tabaco</Link>                        
                    </li>
                    <li>
                    <Link to='/filtros/tipoSabor/mentolado' className='filtroP'>Mentolado</Link>                       
                    </li>
                    <li>
                    <Link to='/filtros/tipoSabor/especiales' className='filtroP'>Especiales</Link>                       
                    </li>
                </ul>
                
                <ul className="filtro">
                    <p className="tituloFiltro">MODELOS</p>
                    <li>
                    <Link to='/filtros/modelo/Party1800' className='filtroP'>Party</Link>   
                        <p className='filtroP'>Hungria</p>
                        <p className='filtroP'>Extra</p>
                    </li>

                </ul>
                
            </div>
           

        <div className="productos">
        {data && data.map(item=> <Producto titulo={item.titulo} precio={item.precio} img={item.img2} categorias={item.categorias} stock={item.stock} desc={item.desc} key={item._id} id={item._id}/>)}
        </div>
<br />
<br />
            </div>}
        <Footer></Footer>
        </div>

        <div className="articulosMobile">
           <HeaderM carrito={true}></HeaderM>
          
           {!data && (
          <div className="wholePage">
            <Spinner></Spinner>
          </div>
        )}

            {data && (
                <div>
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
        <li className="filtroM"> <Link to='/filtros/tipoSabor/frutal' className='filtroM' style={{textDecoration: 'none'}}>Frutal</Link> </li>
            <li className="filtroM"> <Link to='/filtros/tipoSabor/especiales' className='filtroM' style={{textDecoration: 'none'}}>Especiales</Link> </li>
            <li className="filtroM"> <Link to='/filtros/tipoSabor/tabaco' className='filtroM' style={{textDecoration: 'none'}}>Tabaco</Link> </li>
            <li className="filtroM"> <Link to='/filtros/tipoSabor/mentolado' className='filtroM' style={{textDecoration: 'none'}}>Mentolado</Link> </li>
        </ul>
    </div>
    <div className="filtroM">
        <h3 className="h3FiltrosM">Pitadas</h3>
        <ul className="ulFiltrosM">
        
           <li>
                <Link to='/filtros/puffs/1800' className='filtroM' style={{textDecoration: 'none'}}>1800</Link>
            </li>
            <li>
            <Link to='/filtros/puffs/2000' className='filtroM' style={{textDecoration: 'none'}}>2000</Link>                    
            </li>
            <li>
            <Link to='/filtros/puffs/5000' className='filtroM' style={{textDecoration: 'none'}}>5000</Link>                        
            </li>
        </ul>
    </div>
   
</div>


   <div className="productosM">
{data && data.map(item=> <MobileProducto titulo={item.titulo} precio={item.precio} img={item.img} categorias={item.categorias} stock={item.stock} desc={item.desc} key={item._id} id={item._id}/>)}

</div>
                </div>
            )}
        
    <FooterM></FooterM>
        </div>
        </div>
    )
}
export default Articulos;