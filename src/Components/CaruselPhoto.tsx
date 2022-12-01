import React from 'react';
import w11 from '../img/w11.png';
import w12 from '../img/w12.png';
import w13 from '../img/w13.png';
import w14 from '../img/w14.png';
import w16 from '../img/w16.png';


const CaruselPhoto: React.FC = () => {
    
    return(
        <div> 
            <div className="center-window follow-insta">
                <p>Follow our @instagram</p>
            </div>

            <div className="carousel-photo"> 
                {/* <!-- 6 фоток --> */}
                <img src={w11} alt="красивая картинка" width="296" />
                <img src={w12} alt="красивая картинка" width="296" />
                <img src={w13} alt="красивая картинка" width="296" />
                <img src={w14} alt="красивая картинка" width="296" />
                <img src={w12} alt="красивая картинка" width="296" />
                <img src={w16} alt="красивая картинка" width="296" />
            </div>
        </div>
    )
}

export default CaruselPhoto