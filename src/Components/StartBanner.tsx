import React from 'react';
import img0000 from '../img/banner1.png';


const StartBanner: React.FC = () => {
    
    return(
        <div className="block-image-with-text banner center-window"> 
           
           <div className="banner center-window">
                <img src={img0000} alt="красивая картинка" width="1920" height="700"/>
            
            
                <div className='text-on-banner'>
                    <div className="vehicle">Vehicle</div>
                    <div className="title-banner">One of Saturn’s largest rings may be newer than anyone</div>
                    <div>
                        <span className="date-on-banner">June 6, 2019 </span>
                        <span className="date-BY-banner"> By </span> 
                        <span className="date-on-banner">Rickie Baroch</span>   
                        <span className="date-on-banner">4 comments</span>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartBanner