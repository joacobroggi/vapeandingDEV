import './css/producto.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const MobileProducto = (props)=> {
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
        <div className={show ? "productoM" : 'hide'}>
            <Link to={'/comprar/' + props.id} style={{textDecoration: 'none', textAlign: 'center'}}>
            <img src={require('../img/'+props.img)} className='imgArticuloM'/>
            <h2 className='tituloArticuloM'>{props.titulo}</h2>
            <h4 className='precioArticuloM'>${props.precio}</h4>
            </Link>

        </div>
    )
}

export default MobileProducto;