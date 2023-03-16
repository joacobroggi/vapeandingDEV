import './css/producto.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Producto = (props)=> {
    let stock = props.stock;

    const [show, setShow] = useState(false)

    useEffect(() => {
      if (stock < 1) {
        setShow(false)
      } else {
        setShow(true)
      }
    }, [])
    
    return (
        <div className={show ? "producto" : 'hide'}>
            <Link to={'/comprar/' + props.id} style={{textDecoration: 'none', textAlign: 'center'}}>
            <img src={require('../img/'+props.img)} className='imgArticulo'/>
            <h2 className='tituloArticulo'>{props.titulo}</h2>
            <h4 className='precioArticulo'>${props.precio}</h4>
            </Link>

        </div>
    )
}

export default Producto;