import React from 'react';
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

const ContentCenter: React.FC = () => {
    return(
        <div className="direction-row center-content flex-start center-window">
            <ContentLeft/>  
            <ContentRight/>     
        </div>
    )
}

export default ContentCenter