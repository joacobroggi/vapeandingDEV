import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home2 = () => {
  const [swipe1, setSwipe1] = useState(true);
  const [swipe2, setSwipe2] = useState(false);
  const [swipe3, setSwipe3] = useState(false);

  const navigate = useNavigate()

 const goTo = (direccion) => {
      navigate(direccion)
 }

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
  const goToSwiper3 = ()=> {
    setSwipe1(false);
    setSwipe2(false)
    setSwipe3(true)
  }
  
  
  
   
  
  
  return (
    <div className="home2Body" >
     
      <div className={swipe1 ? 'home2Marca1 fade-in-image' : 'hide'} >
      
        <div className="home2Izq">
          
         
        </div>

        <div className="botoneraHome2">
          
        <span className="btnSliderH2A"></span>
        <span className="btnSliderH2" onClick={goToSwiper2}></span>
        <span className="btnSliderH2" onClick={goToSwiper3}></span>
      </div>
       

        <div className="home2Derecha">
         
        </div>
      </div>

      <div className={swipe2 ? 'home2Marca2 fade-in-image' : 'hide'}>
      
        <div className="home2Izq">
          
        </div>

        <div className="botoneraHome2">
        <span className="btnSliderH2" onClick={goToSwiper1}></span>
        <span className="btnSliderH2A" ></span>
        <span className="btnSliderH2" onClick={goToSwiper3}></span>
      </div>
       

        <div className="home2Derecha">
         
        </div>
      </div>

      <div className={swipe3 ? 'home2Marca3 fade-in-image' : 'hide'}>
      
      <div className="home2Izq">
        
      </div>

      <div className="botoneraHome2">
      <span className="btnSliderH2" onClick={goToSwiper1}></span>
      <span className="btnSliderH2"  onClick={goToSwiper2}></span>
      <span className="btnSliderH2A"></span>
    </div>
     

      <div className="home2Derecha">
        
      </div>
    </div>
    

    
    </div>
  );
};

export default Home2;
