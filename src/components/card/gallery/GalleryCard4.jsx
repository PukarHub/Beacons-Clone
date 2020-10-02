import React from 'react'
import {Link} from 'react-router-dom';
import '../../../css/gallery.css';
import galleryimage4 from '../../../img/gallery-image-4.jpg'

function GalleryCard4() {
    return (
        <React.Fragment>
            <div className="gallery-user-specific">
  
  <div className="gallery-user-4"> 
   
    <div className="gallery-user-bio-4">
      <i className="far fa-check-circle fa-2x verified"></i>
      <div className="gallery-user-4-top-image">
        <img src={galleryimage4} alt="" className="gallery-user-img-4"/>
        <p className="gallery-user-name-4">@ilovekimberlyg</p>
      </div>
      
      <div className="gallery-user-socials-4">
        <i className="fab fa-instagram fa-2x"></i>                
        <i className="fab fa-facebook-square fa-2x"></i>
        <i className="fab fa-soundcloud fa-2x"></i>
      </div>
      <iframe width="200" height="100" src="https://www.youtube.com/embed/JW8GaKZDLPM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  
    <form>
       <input type="email" name="email" placeholder="Join Mailing List"/>
        <Link to="#" className="waitlist-btn-1">
          <input type="submit" name="submit" value="Subscribe"/>
        </Link>
    </form>
  
      <div className="gallery-user-hashtags-4">
        <Link to="#"> <span>&#10084;</span> Tap to support here</Link>
        <Link to="#"><span>&#10084;</span> Instagram</Link>
        <Link to="#"><span>&#10084;</span> itunes</Link>
        <Link to="#"><span>&#10084;</span> Spotify</Link>
      </div> 
      <div className="gallery-user-shoutouts-4">
        <h6>Request a personalized video</h6>
        <p>I'm doing shoutouts, giving feedback, and answering questions!</p>
        <button type="submit">Start $15 request</button>
      </div>
  </div> 
  
  <div className="gallery-individual-user">
    <Link to="gallery-user.html"><span className="gallery-website">beacons.ai/</span>@ilovekimberlyg</Link>
   </div>
  </div>
        </React.Fragment>
    )
}

export default GalleryCard4
