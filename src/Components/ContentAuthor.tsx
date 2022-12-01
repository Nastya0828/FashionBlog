import React from 'react';

import author from '../img/author.png';


const ContentAuthor: React.FC = () => {
    
    return(
        <div> 
            <div className="direction-column block-right">
                <button className="button-right-chapter button-about-author">About the author</button>
                <img src={author} alt="author" width="270"/>
                <div className = "author-block">
                    <div className="author-name direction-column">Kate Willems </div>
                    <div className="card-date itallic direction-column">Food & cooking bloger</div>
                    <div className="author-text">Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</div>

                    <button className="button-right-continue">Continue reading</button>
                </div>
            </div>
        </div>
    )
}

export default ContentAuthor