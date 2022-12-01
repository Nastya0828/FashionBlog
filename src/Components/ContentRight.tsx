import React from 'react';

import ContentAuthor from './ContentAuthor';
import ContentNews from './ContentNews';
import ContentCategories from './ContentCategories';
import ContentSocNetwork from './ContentSocNetwork';
import ContentTags from './ContentTags';

const ContentRight: React.FC = () => {
    
    return(
        <div> 
            <div className="content-right">
                <ContentAuthor/>
                <ContentNews/>
                <ContentCategories/>
                <ContentSocNetwork/>
                <ContentTags/>
            </div>
        </div>
        )
}

export default ContentRight