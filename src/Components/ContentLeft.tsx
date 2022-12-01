import React from 'react';

import w2 from '../img/w2.png';
import w3 from '../img/w3.png';
import w4 from '../img/w4.png';
import w5 from '../img/w5.png';
import w6 from '../img/w6.png';
import w7 from '../img/w7.png';
import w8 from '../img/w8.png';
import w9 from '../img/w9.png';
import w10 from '../img/w10.png';
import contentcolumn from '../img/content-column.png';
import contentbanner from '../img/content-banner.png';




const ContentLeft: React.FC = () => {
    
    return(
        <div> 
            <div className="content-left">
                <div className="direction-column small-card">
                    <img src= {contentcolumn}  alt="красивая картинка" width="370" />
                    <div className="card-text direction-column">
                        <span className="card-title">Tourism</span>
                        <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                    </div>
                </div>

                <div className="direction-column small-card">
                    <img src= {w2} alt="красивая картинка" width="370" />
                    <div className="card-text direction-column">
                        <span className="card-title">Tourism</span>
                        <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                    </div>
                </div>

                <div className="direction-column small-card">
                    <img src= {w3}  alt="красивая картинка" width="370" />
                    <div className="card-text direction-column">
                        <span className="card-title">Tourism</span>
                        <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                    </div>
                </div>

                <div className="direction-column small-card">
                    <img src= {w4}  alt="красивая картинка" width="370" />
                    <div className="card-text direction-column">
                        <span className="card-title">Tourism</span>
                        <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                    </div>
                </div>

                <div className="direction-column small-card">
                    <img src= {w5}  alt="красивая картинка" width="370" />
                    <div className="card-text direction-column">
                        <span className="card-title">Tourism</span>
                        <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                    </div>
                </div>

                <div className="direction-column small-card">
                    <img src= {w6} alt="красивая картинка" width="370" />
                    <div className="card-text direction-column">
                        <span className="card-title">Tourism</span>
                        <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                    </div>

                </div>

            </div>
            <div>
                <div className="direction-column">
                    <img src={contentbanner} alt="красивая картинка" width="770" height="349"/>
                    <div className="card-text card-banner">
                        <span className="card-title alignment-left">Summer</span>
                        <span className="card-content card-banner alignment-left">One of Saturn’s largest rings may be newer than anyone</span>
                        <span className="card-date alignment-left">June 6, 2019  By Ricky Baroch 6 comments</span>
                        <div className="text-banner-middle alignment-left">Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis
                            iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</div>
                    </div>
                </div>
            </div>

            <div className="content-center">
                <div className="content-left">
                    <div className="direction-column small-card">
                        <img src= {w7} alt="красивая картинка" width="370" />
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>

                    <div className="direction-column small-card">
                        <img src= {w8} alt="красивая картинка" width="370" />
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>

                    <div className="direction-column small-card">
                        <img src= {w9} alt="красивая картинка" width="370" />
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>

                    <div className="direction-column small-card">
                        <img src= {w10} alt="красивая картинка" width="370"/>
                        <div className="card-text direction-column">
                            <span className="card-title">Tourism</span>
                            <span className="card-content card-small">One of Saturn’s largest rings may be newer than anyone</span>
                            <span className="card-date">June 6, 2019  By Ricky Baroch</span>
                        </div>
                    </div>
                </div>
                    
                <div className="center-window navigation">
                    {/* <!-- навигация страниц --> */}
                    <button className="previous-navigation">{'<'}</button>
                    <button className="previous-navigation">OLDER POST</button>
                    <button className="next-navigation">1</button>
                    <button className="next-navigation">2</button>
                    <button className="next-navigation">3</button>
                    <button className="next-navigation">...</button>
                    <button className="next-navigation">8</button>
                    <button className="next-navigation">NEXT POST</button>
                    <button className="previous-navigation">{'>'}</button>
                </div>

            </div>
        </div>
    )
}

export default ContentLeft