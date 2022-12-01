import React from 'react';
import socialnetwork from '../img/socialnetwork.jpg';

const Footer: React.FC = () => {
    
    return(
        <div> 
            <div className="center-window fashion-label fashion-label-end">Fashion</div>
            
            <div className="center-window">
                <button className="main-menu-button">Home</button>
                <button className="main-menu-button">Recipes</button>
                <button className="main-menu-button">Article</button>
                <button className="main-menu-button">Contact</button>
                <button className="main-menu-button">Purchase</button>
            </div>

            <div className="center-window">
                <img src= {socialnetwork} alt="красивая картинка" width="296" />
            </div>

            <hr className="line-end"/> 

            <div className="center-window end-logwork">@2019 Logwork. All Right Reserved.</div>

        </div>
    )
}

export default Footer