import './css/header.css';
import { Link } from "react-router-dom";
import {faCloud, faCartShopping, faBars, faX} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const Header = (props) => {
    
    const [dropdown, setDropdown] = useState(false);

    const dropMenu = ()=> {
        setDropdown((current) => !current)
    }

    return (
        <div className={dropdown ? "headerM headerMBlured" : 'headerM'}>
            <div className="headerDivM">
              <FontAwesomeIcon icon={dropdown? faX : faBars} className='hamburgerM' onClick={dropMenu}></FontAwesomeIcon>
            <Link to="/" style={{textDecoration: 'none'}} className='h3HeaderM'><FontAwesomeIcon icon={faCloud} /></Link>
            <Link to='/carrito'><FontAwesomeIcon icon={faCartShopping} className='cartM'></FontAwesomeIcon></Link>
           
        </div>

        <div className={dropdown?'dropMenuM' :'hide'}>
            <h3 className="itemDropdwon">
            <Link to='/comprar' className='itemDropdwon'>
                Comprar
            </Link>
            </h3>
            <h3 className="itemDropdwon">
            <Link to='/about' className='itemDropdwon'>
               Sobre Nosotros
            </Link>
            </h3>
            <h3 className="itemDropdwon">
            <Link to='/ayuda' className='itemDropdwon'>
                Ayuda
            </Link>
            </h3>
        </div>
        </div>
    )
}


export default Header;