import React from 'react';

import w17 from '../img/w17.png';
import w18 from '../img/w18.png';
import rightsmallconent from '../img/right-small-conent.png';



const ContentNews: React.FC = () => {
    
    return(
        <div> 
            <div className="direction-column block-right">
                <button className="button-right-chapter">Featured post</button>
                <div>
                    <div className="card-right">
                        <img src={rightsmallconent} alt="author" width="270"/>
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>

                    <div className="card-right">
                        <img src={w17} alt="author" width="270"/>
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>

                    <div className="card-right">
                        <img src={w18} alt="author" width="270"/>
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentNews