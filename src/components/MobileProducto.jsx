import './css/producto.css'
import { Link } from 'react-router-dom';


const MobileProducto = (props)=> {
    return (
        <div className="productoM">
            <Link to={props.id} style={{textDecoration: 'none', textAlign: 'center'}}>
            <img src={require('../img/'+props.img)} className='imgArticuloM'/>
            <h2 className='tituloArticuloM'>{props.titulo}</h2>
            <h4 className='precioArticuloM'>$ {props.precio}</h4>
            </Link>

        </div>
    )
}

export default MobileProducto;