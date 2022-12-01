import React from 'react';


const Header: React.FC <{clickHome: () => void, clickRecipes: () => void }> = ({clickHome, clickRecipes}) => {
// const Header: React.FC <{clickHome: () => void, clickRecipes: () => void }> = (props) => {

    return(
        <div className="direction-row space-btw header-panel">
        <div className="fashion-label">fashion</div>
        <div className="center-window">
            <button className="main-menu-button" id="home" onClick={clickHome}>Home</button>
            {/* <button className="main-menu-button" id="home" onClick={props.clickHome}>Home</button> */}
            <button className="main-menu-button" id="recipes" onClick={clickRecipes}>Recipes </button>
            <button className="main-menu-button">Article</button>
            <button className="main-menu-button">Contact</button>
            <button className="main-menu-button">Purchase</button>
        </div>
    </div>
    )
}

export default Header