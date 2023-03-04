import { useDispatch } from 'react-redux';
import {removeProducto} from '../redux/cartRedux';


const CarritoItemMobile = (props)=> {

    const dispatch = useDispatch();

    const handleClick = (e)=>{
        dispatch(
          removeProducto(e)
        )
        
        // console.log(e);
      };

    return (
        <div className="itemCartM">
            <img src={props.img} alt={props.img} className="imgItemCartM" />
            <div className="txtItemCartM">
               
                <h3 className="titleItemCartM">{props.titulo}</h3>

                <h5 className="saborItemCart">{props.sabor}</h5>

                <h5 className="precioItemCart">${props.precio}</h5>
            </div>
            <h6 className="removeBtnMobileCart"  onClick={()=> handleClick(props.claveUnica)}>X</h6>
        </div>
    )
};

export default CarritoItemMobile;