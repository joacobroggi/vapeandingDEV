import {faSmoking, faLemon} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addProducto} from '../redux/cartRedux'
import { useEffect } from 'react';
import { publicRequest } from '../requestMethods';
import { Link} from "react-router-dom";

const ArticuloC = (props)=> {
    // let aspectos = props.aspectos;
    // let iteration = aspectos.length;
    let id = props.id;
    const dispatch = useDispatch();



    const [producto, setProducto] = useState({});
    const [cantidad, setCantidad] = useState(1);
    const [tabaco, setTabaco] = useState(false);
    const [frutal, setFrutal] = useState(false);
  
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }


    useEffect(() => {
      const getProducto = async ()=>{
        try {
          const res = await publicRequest.get('/productos/buscar/'+ id);
          let objetoProducto = res.data;
       

          setProducto(objetoProducto)
          if (objetoProducto.tipoSabor === 'tabaco') {
            setTabaco(true);
          } else if (objetoProducto.tipoSabor === 'frutal') {
            setFrutal(true);
          }
        } catch (error) {
          console.log(error);
        }
        
      }
     
      
      getProducto()
    }, [id])

   

    const handleClick = ()=>{


      
      producto.claveUnica = getRandomInt(10000000);
      dispatch(
        addProducto({...producto, cantidad})
      )

    };
    
    return (
        <div className="articuloC">
          <div className="izquierda">
          <h2 className="h2Articulo">{props.titulo}</h2>
            <h5 className="h5Articulo">{props.fName}</h5>
            <p className="pH6">
                {props.descripcion}
            </p>
            <h6 className="h6Articulo">
                INFORMACIÓN DEL PRODUCTO
            </h6>
            <h6 className="detallesArticulo">Marca: <span className="detalleArt">{props.marca}</span></h6>
            <h6 className="detallesArticulo">Modelo: <span className="detalleArt">{props.modelo}</span></h6>
            <h6 className="detallesArticulo">Sabor: <span className="detalleArt">{props.sabor}</span></h6>

            <div className="info-Articulo">
              <div className="pitadas-cont">
                <span className='pitadas'>+{props.pitadas}</span>
                <h6 className='detalleH6'>PUFFS</h6>
              </div>
              <div className="nicotineContainer">
                <span className="nicotina">{props.nicotina}</span>
                <h6 className='detalleH6'>nicotina</h6>
              </div>
              <div className="tipoCont">
                {tabaco &&  <span className="iconSabor">
                <FontAwesomeIcon icon={faSmoking}></FontAwesomeIcon>
                  </span>}
                  {frutal && <span className="iconSabor">
                <FontAwesomeIcon icon={faLemon}></FontAwesomeIcon>
                  </span>}
               
                <h6 className="detalleH6">{props.tipo}</h6>
              </div>
            </div>
          </div>

          <img src={require('../img/'+props.img)} alt="" className='imgArticuloC'/>

          <div className="derecha">
            
            
           {props.hasOrdered ?  <Link to='/carrito' className="h2Precio" >NO PODES - <b className="valor">${props.precio}</b></Link> :  <Link to='/carrito' className="h2Precio" onClick={handleClick}>AGREGAR AL CARRITO - <b className="valor">${props.precio}</b></Link>}
          </div>
        </div>
    )
}

export default ArticuloC;