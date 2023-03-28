import Header from "../components/Header";
import HeaderM from "../components/HeaderM";
import Footer from "../components/Footer";
import FooterM from "../components/FooterM";
import {Link} from 'react-router-dom'
import './css/404.css'

const P404 = () => {
    return (
        <div className="b404">
            <Header carrito={true}></Header>
            <HeaderM carrito={true}></HeaderM>
            <div className="div404">
            <h3 className="h404">404</h3>
            <p className="p404">La página que buscás no existe</p>
            <Link href="" className="a404">Ayuda</Link>
            </div>
            <Footer></Footer>
            
        </div>
    )
}


export default P404;