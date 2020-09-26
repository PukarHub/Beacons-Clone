import React from 'react'
import {Link} from 'react-router-dom'
import beaconsdark from '../../img/beacons-dark.png'
function Blog1Nav() {
    return (
    <React.Fragment>
       <div className="blogs-section-container" id="responsive-hide">
        <section className="first-section">
    
          <div className="navbar">
            {/* <!-- logo --> */}
            <div className="logo-div">
              <Link to="#" className="blog-logo"><img src={beaconsdark} alt=""/></Link>
            </div>
            {/* <!-- navbar-items --> */}
            <div className="blog-navbar-items" >
                <Link to = "#" className="navbar-item">Blog</Link>
                <Link to = "#" className="navbar-item">Gallery</Link>
                <Link to ="#" className="navbar-item">Shop</Link>
                <Link to ="#"className="navbar-item">Merchants</Link>
                <Link to ="#" className="drop-down">
                    <i onclick="myfun()" id="clicks" className="dropdown fas fa-ellipsis-h"></i>
                </Link>
            </div>
          </div> 
        </section>
        </div>
        </React.Fragment>
    )
}

export default Blog1Nav;
