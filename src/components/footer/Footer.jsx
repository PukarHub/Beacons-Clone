import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <React.Fragment>


          <section className="footer" style={{backgroundColor: '#eee'}}>
      <div className="footer-first-part">
        <h5 style={{color: '#000'}}>By invite only.</h5>
        <form className="footer-form">
          <input type="email" name="email" id="email" placeholder="Enter your email"/>
          <Link to="#"><button type="submit" className="btn-submit">Join Waitlist</button></Link>
        </form>
      </div>
        <div className="footer-second-part">
            <Link to ="#">Privacy Policy |&nbsp;</Link>        
            <Link to ="#">Terms of Service |&nbsp;</Link>         
            <Link to ="#">Contact</Link>          
        </div>     
    </section>
   
    </React.Fragment>
  )
}

export default Footer
