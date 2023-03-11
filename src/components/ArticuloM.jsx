import {faSmoking, faLemon} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addProducto} from '../redux/cartRedux'
import { useEffect } from 'react';
import { publicRequest } from '../requestMethods';
import { Link } from 'react-router-dom';


const ArticuloM = (props)=> {

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
        <div className="articuloM">
                <img src={require('../img/'+props.img)} alt="" className="imgArticuloM2"/>

                <div className="articuloBottomM">
                    <h2 className="articuloMTitle">{props.titulo}</h2>
                    <h5 className="fullTitleArticulo">
                    {props.fullTitulo}
                    </h5>
                    <p className="descArticuloM">
                        {props.desc}
                    </p>

                    <h5 className="detallesH5M">
                        Información del producto:
                    </h5>
                    <div className="detallesM">
                        <div className="detalleM">
                            <span className='detalleMspan'>+{props.pitadas}</span>
                            <h6 className="detalleH6">Pitadas</h6>
                        </div>
                        <div className="detalleM">
                            <span className='detalleMspan'>+{props.nicotina}</span>
                            <h6 className="detalleH6">Nicotina</h6>
                        </div>
                        <div className="detalleM">
                        {tabaco &&  <span className="iconSabor detalleMspan">
                <FontAwesomeIcon icon={faSmoking}></FontAwesomeIcon>
                  </span>}
                  {frutal && <span className="iconSabor detalleMspan">
                <FontAwesomeIcon icon={faLemon}></FontAwesomeIcon>
                  </span>}
                            <h6 className="detalleH6">{props.sabor}</h6>
                        </div>
                    </div>

                    <Link to='/carrito' onClick={handleClick} className="btnArticuloM" style={{textAlign:'center', textDecoration: 'none'}}>Agregar al carrito por {props.precio} </Link>


                </div>
            </div>
    )
}

export default ArticuloM;