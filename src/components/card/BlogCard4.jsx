import React from 'react'
import {Link} from 'react-router-dom'
import avatar1 from '../../img/avatar-1.png'
import blog2 from '../../img/blog-card-2.jpg'

function BlogCard4() {
    return (
        <React.Fragment>
            <section className="blog-post">
                 {/* <!-- first big card --> */}
           <Link to="getting started.html" className="blog-card-top">
    <div className="featured">   
        <div className="avatar-1"><img src={avatar1} alt=""/>
            <h4 className="tips">Tips</h4>
        </div>
        <div className="featured-icon">
        <i className="fas fa-star"></i> Featured
        </div>
    </div> 
        <div className="blog-card-middle">
        <h4 className="blog-card-1-title"><span className="traffic">&#128678;</span>Getting started with your Beacons profile</h4>
        </div>
        <div className="blog-card-bottom">
        <h6>7 months ago &bull;<span> 3 mins read</span></h6>
        </div>
  </Link>
  <Link to ="#" className="blog-card-top-2">
            <div className="card-2">
                <img src={blog2} alt="" className="blog-card-img"/>
                <img src={avatar1} alt="" className="card-avatar"/>
                <div className="card-2-info">
                <div><h5>Optimizing your links for clicks &#128170;</h5></div>
                <div><h6>7 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span></h6></div>
                </div>     
            </div>
        </Link>
  </section>
        </React.Fragment>
    )
}

export default BlogCard4
