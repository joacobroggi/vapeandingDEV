import './css/itemCarrito.css'
import { useDispatch } from 'react-redux';
import {removeProducto} from '../redux/cartRedux';



const CarritoItem = (props)=> {

    


    const dispatch = useDispatch();

    const handleClick = (e)=>{
        dispatch(
          removeProducto(e)
        )
        
        // console.log(e);
      };

    return (
        <div className="itemC">
            <div className="itemContainerC">
            <img src={props.img} alt={props.img} className='imgC'/>
            <h4 className="itemTitleC">{props.titulo}</h4>
            <h5 className="saborC"></h5>
            
            <h5 className="precioC">${props.precio}</h5>
            </div>
            <input type="button" value="X" className="removeButton" onClick={()=> handleClick(props.claveUnica)} />
        </div>
    )
}

export default CarritoItem;