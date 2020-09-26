import React from 'react';
import picture3 from '../../img/picture-3.png';
import {Link} from "react-router-dom";

function Card3() {
    return (
       <React.Fragment>
            <div className="picture-info">
            <Link to ="#">
          <div className="picture-position">
            <img src={picture3} className="picture" alt="1"/>
          <h5>Link to anywhere</h5>
          </div>
        </Link>
        </div>
       </React.Fragment>
    )
}

export default Card3
