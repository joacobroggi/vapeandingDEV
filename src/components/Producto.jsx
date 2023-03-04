import './css/producto.css'
import { Link } from 'react-router-dom';

const Producto = (props)=> {
    return (
        <div className="producto">
            <Link to={'/comprar/' + props.id} style={{textDecoration: 'none', textAlign: 'center'}}>
            <img src={require('../img/'+props.img)} className='imgArticulo'/>
            <h2 className='tituloArticulo'>{props.titulo}</h2>
            <h4 className='precioArticulo'>${props.precio}</h4>
            </Link>

        </div>
    )
}

export default Producto;