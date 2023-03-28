import './css/header.css';
import { Link } from "react-router-dom";
import {faCloud, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const Header = (props) => {
    

    return (
        <div className="headerDiv">
            <Link to="/" style={{textDecoration: 'none'}} className='h3Header'><FontAwesomeIcon icon={faCloud} /> VAPEARG</Link>
          
            <h4 className='h4Header comprar'><Link to='/comprar' style={{textDecoration: 'none', color: 'white'}}>COMPRAR</Link></h4>
            <h4 className='h4Header sobreEscabianding'><Link to='/about' style={{textDecoration: 'none', color: 'white'}}>SOBRE VAPEARG</Link></h4>
            {props.noPedidos? '' : <h4 className='h4Header sobreEscabianding'><Link to='/pedidos' style={{textDecoration: 'none', color: 'white'}}>PEDIDOS</Link></h4>}
            {props.carrito && <div className="carritoDiv">
            <Link to={props.hasOrdered ? "/pedidos" : "/carrito"}>
            <FontAwesomeIcon icon={faCartShopping} style={{color: 'white', fontSize:'1.5rem'}}/>
            </Link>
            </div>}
          {props.registro && <div className="carritoDiv">
            <Link to="/registro" style={{textDecoration: 'none', color: 'white', fontFamily: 'var(--nerko)', fontSize:'1.8rem'}}>
            REGISTRARSE
            </Link>
            </div>}
            {props.login && <div className="carritoDiv">
            <Link to="/login" style={{textDecoration: 'none', color: 'white', fontFamily: 'var(--nerko)', fontSize:'1.8rem'}}>
            INICIAR SESIÓN
            </Link>
            </div>}
          
        </div>
    )
}


export default Header;