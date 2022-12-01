import React from 'react';

const ContentCategories: React.FC = () => {
    
    return(
        <div> 
            <div className="direction-column block-right">
                <button className="button-right-chapter">Categories</button>

                <div>
                    <table className="text">
                    <tbody>
                        <tr className="line">
                            <td>Fashion</td>
                            <td className="rightcol">(23)</td>
                        </tr>
                        <tr className="line">
                            <td>Style & clothes  </td>
                            <td className="rightcol">(7) </td>
                        </tr>
                        <tr  className="line">
                            <td>Minimalism</td>
                            <td className="rightcol">(16)</td>
                        </tr>
                        <tr  className="line">
                            <td>Black & White</td>
                            <td className="rightcol">(5)</td>
                        </tr>
                        <tr>
                            <td>Modern clothes</td>
                            <td className="rightcol">(12)</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ContentCategories