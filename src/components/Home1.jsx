import Header from "../components/Header";
import { Link } from 'react-router-dom';

const Home1 = ()=> {
    return (
        <div className='homeBody'>
           <Header carrito={true}></Header>
            <div className="baner1">
                <h1><span className="nerko">Bienvenido a</span> <span className="chango">Vapeanding</span></h1>
                <p className="banner1P">
                El único eccomerce de vapers rosarino con envío inmediato.
                <br />
                    <span className="muted">Y productos originales...</span>
                </p>
            </div>
           
           
       
        </div>
    )
}

export default Home1;