import React from 'react';

import w19 from '../img/w19.png';
import w20 from '../img/w20.png';
import w21 from '../img/w21.png';
import w22 from '../img/w22.png';
import w23 from '../img/w23.png';
import w24 from '../img/w24.png';
import w25 from '../img/w25.png';
import w26 from '../img/w26.png';
import facebook from '../img/facebook.png';



const ContentSocNetwork: React.FC = () => {
    
    return(
        <div> 
            <button className="button-right-chapter">Social media</button>
            
            <div className="social-net">
                <div className="direction-column social-card">
                    <img src={facebook} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>

                <div className="direction-column social-card">
                    <img src={w19} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>

                <div className="direction-column social-card">
                    <img src={w20} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>

                <div className="direction-column social-card">
                    <img src={w21} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>

                <div className="direction-column social-card">
                    <img src={w22} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>
                <div className="direction-column social-card">
                    <img src={w23} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>
                <div className="direction-column social-card">
                    <img src={w24} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>
                <div className="direction-column social-card">
                    <img src={w25} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>
                <div className="direction-column social-card">
                    <img src={w26} alt="facebook" width="40"/>
                    <span>32k <br/> likes</span>
                </div>
            </div>
        </div>
    )
}

export default ContentSocNetwork