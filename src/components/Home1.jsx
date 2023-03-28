import Header from "../components/Header";
import { Link } from 'react-router-dom';

const Home1 = ()=> {
   
    return (
        <div className='homeBody'>
           <Header carrito={true}></Header>
            <div className="baner1">
                <h1><span className="nerko">Bienvenido a</span> <span className="chango">Vapearg</span></h1>
                <p className="banner1P">
                Disfrutá del vapeo al instante con Vapearg. Envío inmediato en Rosario.
                <br />
            
                   
                </p>
            </div>
           
           
       
        </div>
    )
}

export default Home1;