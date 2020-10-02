import React from 'react'
import {Link} from 'react-router-dom';
import '../../../css/gallery.css';
import galleryimage3 from '../../../img/gallery-image-3.jpg'

function GalleryCard3() {
    return (
        <React.Fragment>
    <div className="gallery-user-specific">
     <div className="gallery-user-3"> 
      {/* <!-- gallery-user-bio --> */}
      <div className="gallery-user-bio-3">
        <i className="far fa-check-circle fa-2x verified"></i>
        <div className="gallery-user-3-top-image">
          <img src={galleryimage3} alt="" className="gallery-user-img-3"/>
          <p className="gallery-user-name-3">@dotpebble_kints</p>
        </div>
        
        <div className="gallery-user-socials-3">
          <i className="fas fa-envelope fa-2x"></i>
          <i className="fab fa-instagram fa-2x"></i>                
          <i className="fab fa-twitch fa-2x"></i>
          <i className="fab fa-tiktok fa-2x"></i>
          <i className="fab fa-facebook-square fa-2x"></i>
        </div>
      </div>
      
  
        <div className="gallery-user-hashtags-3">
          <Link to="#">Youtube</Link>
          <Link to="#">Monthly Newsletter</Link>
          <Link to="#">Pinterest</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">itunes</Link>
          <Link to="#">Spotify</Link>
          <Link to="#">Etsy shop</Link>
          <Link to="#">My blog</Link>
        </div>
        <div className="waitlist-btn">
          <form>
            <input type="email" name="email" placeholder="Join Mailing List" />
            <Link to="#" className="waitlist-btn-1">
            <input type="submit" name="submit" value="Subscribe" />
            </Link>
            </form>
        </div>  
            <iframe width="200" height="100" src="https://www.youtube.com/embed/opjg3RpskJ0"   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div> 
       <div className="gallery-individual-user">
        <a to="gallery-user.html"><span className="gallery-website">beacons.ai/</span>@dotpebble_kints</a>
       </div>
     </div>
        </React.Fragment>
    )
}

export default GalleryCard3
