import Header from "../components/Header";
import {Link} from 'react-router-dom'
import './css/404.css'

const P404 = () => {
    return (
        <div className="b404">
            <Header></Header>
            <div className="div404">
            <h3 className="h404">404</h3>
            <p className="p404">La página que buscas no existe</p>
            <Link href="" className="a404">Ayuda</Link>
            </div>
            
        </div>
    )
}


export default P404;