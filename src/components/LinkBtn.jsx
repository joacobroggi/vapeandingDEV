import './css/linkBtn.css';
import { Link } from "react-router-dom";



const LinkBtn = (props) => {
    return (
        <div>
            <Link to={props.to} className="linkBtn">{props.contenido}</Link>
        </div>
    )
}

export default LinkBtn;