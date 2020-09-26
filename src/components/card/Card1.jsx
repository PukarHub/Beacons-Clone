import React from 'react';
import {Link} from 'react-router-dom'
import picture1 from '../../img/picture-1.png';
function Card1() {
    return (
        <React.Fragment>
          <Link to ="#"><div className="picture-info">
          <div className="picture-position">
            <img src={picture1} className="picture" alt="1"/>
          <h5>Sell digital and physical products</h5>
          </div>
        </div>
        </Link>
        </React.Fragment>
    )
}

export default Card1;
