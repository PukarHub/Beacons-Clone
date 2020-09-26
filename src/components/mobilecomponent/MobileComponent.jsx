import React from 'react'
import {Link } from "react-router-dom"
import Iframe from 'react-iframe';
import sukiluser from '../../img/sukiuser-img.jpeg'
import image3 from '../../img/gallery-image-3.jpg'
import image4 from '../../img/gallery-image-4.jpg' 
function MobileComponent() {
    return (
        <React.Fragment>
           {/* <!-- index-user-1 --> */}
        <div className="gallery-user" id="user-1">
          {/* <!-- gallery-user-bio --> */}
          <div className="gallery-user-bio">
            <i className="far fa-check-circle fa-2x verified"></i>
            <img src={sukiluser} alt="" className="gallery-user-img" />
            <p className="gallery-user-name">@sukiluser</p>
            <div className="gallery-user-socials">
              <i className="fas fa-envelope fa-2x"></i>
              <i className="fab fa-instagram fa-2x"></i>                
              <i className="fab fa-twitch fa-2x"></i>
              <i className="fab fa-tiktok fa-2x"></i>
            </div>
          </div>
            <div className="gallery-user-info">
              <p>Hi there! You can check out my other social media platforms and my current favorite items down below! If you want to engage with me on a more personal level shoot me a video request! :)</p>
            </div>
  
            <div className="gallery-user-hashtags">
              <Link to="#">#BLM resources</Link>
              <Link to="#">Paypal</Link>
              <Link to="#">Tiktok</Link>
              <Link to="#">Instagram</Link>
              <Link to="#">Tap here to support me</Link>
            </div>
  
            <div className="gallery-user-videos">
              {/* <!-- first-video --> */}
              <div className="each-video">
                <video className="video-1" width="80" height="100" id="myVideo" autoplay muted loop>
                  <source src="/video/video-1.mov"/>
                </video>
                <p className="video-info">Buy for $38.00</p>
              </div>
              {/* <!-- second-video --> */}
              <div className="each-video">
                <video className="video-2" width="80" height="100" id="myVideo" autoplay muted loop>
                  <source src="/video/video-2.mov"/>
                </video>
                <p>Buy for $25.00</p>
  
              </div>
            </div>
            {/* <!-- shoutouts --> */}
            <div className="gallery-user-shoutouts">
              <h6>Request a personalized video</h6>
              <p>I'm doing shoutouts, giving feedback, and answering questions!</p>
              <button type="submit">Start $15 request</button>
            </div>
            {/* <!-- gallery tiktok --> */}
            <div className="gallery-user-tiktok">
              <blockquote  className="tiktok-embed" cite="https://www.tiktok.com/@sukiluser/video/6803430853667015941" data-video-id="6803430853667015941"
               style={{ "maxwidth":"605px", "minwidth": "325px"}} > 
               <section> 
                 <Link target="_blank" title="@sukiluser" to="https://www.tiktok.com/@sukiluser">@sukiluser
                 </Link> 
                  <p>Duno what I was looking at for that millisecond <span role="img" aria-label="smile">😂</span>  <Link title="fyp" target="_blank" to="https://www.tiktok.com/tag/fyp">##fyp</Link></p>
                  <Link target="_blank" title="♬ Woah Pause - babygirlblasiian" to="https://www.tiktok.com/music/Woah-Pause-6606807330708851461">♬ Woah Pause - babygirlblasiian</Link> 
                  </section> </blockquote> 
                  <script async src="https://www.tiktok.com/embed.js"></script>
            </div>           
         </div>


         {/* <!-- gallery-user-3 --> */}

      <div className="gallery-user-3 fix-width-1" id="user-2" style={{display: "none"}}> 
    {/* <!-- gallery-user-bio --> */}
    <div className="gallery-user-bio-3">
      <i className="far fa-check-circle fa-2x verified"></i>
      <div className="gallery-user-3-top-image">
        <img src= {image3} alt="" className="gallery-user-img-3"/>
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
        <input type="email" name="email" placeholder="Join Mailing List"/>
         <Link to="#" className="waitlist-btn-1">

           <input type="submit" name="submit" value="Subscribe"/></Link>
           </form>
        </div>  
        <Iframe width="200" height="100" src="https://www.youtube.com/embed/opjg3RpskJ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        
      </div>
        {/* <!-- gallery-user-4 --> */}



   <div className="gallery-user-4 fix-width" id="user-3" style={{display: "none"}}> 
    {/* <!-- gallery-user-bio --> */}
    <div className="gallery-user-bio-4">
      <i className="far fa-check-circle fa-2x verified"></i>
      <div className="gallery-user-4-top-image">
        <img src= {image4} alt="" className="gallery-user-img-4"/>
        <p className="gallery-user-name-4">@ilovekimberlyg</p>
      </div>
      
      <div className="gallery-user-socials-4">
        <i className="fab fa-instagram fa-2x"></i>                
        <i className="fab fa-facebook-square fa-2x"></i>
        <i className="fab fa-soundcloud fa-2x"></i>
      </div>
      <Iframe width="200" height="100" src="https://www.youtube.com/embed/JW8GaKZDLPM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
    </div>

    <form>
      <input type="email" name="email" placeholder="Join Mailing List" id="index-fix"/>
       <Link to="/" className="waitlist-btn-1" >
         <input type="submit" name="submit" value="Subscribe" id="index-fix-1"/></Link>
         </form>

      <div className="gallery-user-hashtags-4">
        <Link to="#"> <span role="img">&#10084;</span> Tap to support here</Link>
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
        </React.Fragment>
    );
}

 


export default MobileComponent;




















































































































































































































































































































































































































































































































































































































































































































































































































































































