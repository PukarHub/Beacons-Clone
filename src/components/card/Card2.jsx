import React from 'react';
import picture2 from '../../img/picture-2.png';
import {Link} from "react-router-dom"

function Card2() {
    return (
        <React.Fragment>
        <Link to ="#"><div className="picture-info">
      <div className="picture-position">
        <img src={picture2} className="picture" alt="1"/>
      <h5>Set up paid commissions</h5>
      </div>
    </div>
    </Link>
    </React.Fragment>
    )
}

export default Card2
