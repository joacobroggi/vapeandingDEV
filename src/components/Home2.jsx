import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home2 = () => {
  const [swipe1, setSwipe1] = useState(true);
  const [swipe2, setSwipe2] = useState(false);
  const [swipe3, setSwipe3] = useState(false);

  

 

  const goToSwiper1 = ()=> {
    setSwipe1(true);
    setSwipe2(false);
    setSwipe3(false);
  }
  const goToSwiper2 = ()=> {
    setSwipe1(false);
    setSwipe2(true)
    setSwipe3(false)
  }

  
  
  
   
  
  
  return (
    <div className="home2Body" >
     
      <div className={swipe1 ? 'home2Marca1 fade-in-image' : 'hide'} >
      
        <Link to='/filtros/marca/Zomo' className="home2Izq" >
          
         
        </Link>

       
       

        <div className="botoneraHome2">
          
          <span className="btnSliderH2A"></span>
          <span className="btnSliderH2" onClick={goToSwiper2}></span>
          
        </div>
      </div>

      <div className={swipe2 ? 'home2Marca2 fade-in-image' : 'hide'}>
      
        <Link to='/filtros/marca/Zomo' className="home2Izq">
          
        </Link>

        <div className="botoneraHome2">
        <span className="btnSliderH2" onClick={goToSwiper1}></span>
        <span className="btnSliderH2A" ></span>
        
      </div>
       

        <div className="home2Derecha">
         
        </div>
      </div>

    
    

    
    </div>
  );
};

export default Home2;
