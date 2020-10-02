import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import '../../../css/gallery.css';
import galleryimage2 from '../../../img/gallery-image-2.jpg'

function GalleryCard2(){
      return(
    <Fragment>
{/* // <!-- gallery-user-2 --> */}
    <div className="gallery-user-specific">
     <div className="gallery-user-2"> 
       {/* <!-- gallery-user-bio --> */}
       <div className="gallery-user-bio-2">
         <i className="far fa-check-circle fa-2x verified"></i>
         <img src={galleryimage2} alt="" className="gallery-user-img-2"/>
         <p className="gallery-user-name-2">@keepingitjuicypodcast</p>
         <div className="gallery-user-socials-2">
           <i className="fas fa-envelope fa-2x"></i>
           <i className="fab fa-instagram fa-2x"></i>                
           <i className="fab fa-twitch fa-2x"></i>
           <i className="fab fa-tiktok fa-2x"></i>
           <i className="fab fa-facebook-square fa-2x"></i>
         </div>
       </div>
       
         <div className="gallery-user-hashtags-2">
           <Link to="#">Tap here to support me</Link>
           <Link to="#">Show Notes</Link>
           <Link to="#">Youtube</Link>
           <Link to="#">Instagram</Link>
           <Link to="#">itunes</Link>
           <Link to="#">Spotify</Link>
         </div>
     </div> 
     <div className="gallery-individual-user">
       <Link to="gallery-user.html"><span className="gallery-website">beacons.ai/</span>@keepingitjuicypodcast</Link>
      </div>
    </div>
    </Fragment> 
  )
}

export default GalleryCard2;
