import React from 'react';
import Logo from '../../img/Capture.png';
import { Link } from 'react-router-dom';
import Circle from '../../components/circle/Circle';
import MobileComponent from "../../components/mobilecomponent/MobileComponent"
import CircleSecond from '../../components/circlesecond/CircleSecond'
import Card1 from '../../components/card/Card1'
import Card2 from '../../components/card/Card2'
import Card3 from '../../components/card/Card3'
import Footer from '../../components/footer/Footer'


function Homepage() {
  return (
    <React.Fragment>
    <div className='container'>
      <section className='first-section' style={{backgroundColor: 'transparent'}}>
        <div className='navbar' >
          
          {/* logo  */}
          <Link to='/' className='logo'>
            <img src={Logo} alt='' />
          </Link>
          <Link to='/' className='logo-only'>
            <img src='../img/logo-only.PNG' alt='' />
          </Link>
          {/* navbar-items */}
          <div className='navbar-items'>
            <Link to='/blog1' className='navbar-item'>
              Blog
            </Link>
            <Link to='/gallery' className='navbar-item'>
              Gallery
            </Link>
            <Link to='/shop' className='navbar-item'>
              Shop
            </Link>
            <Link to='/merchants' className='navbar-item'>
              Merchants
            </Link>
          </div>
        </div>
        {/* <!-- signin button --> */}
        <div className='drop-down-container'>
          <div className='signin'>  
            <Link to='/'>Sign In</Link>
          </div>
        </div>

        {/* <!-- menubar --> */}
        <div className='dropdown'>
          <button onclick='show_hide()' className='button'>
            &#9776;
          </button>
          {/* <!-- drop-content --> */}
          <div style={{ display: 'none' }} id='drop-content'>
            <Link to='/'>Blog</Link>
            <Link to='/'>Gallery</Link>
            <Link to='/'>Shop</Link>
            <Link to='/'>Merchants</Link>
          </div>
        </div>
      </section>
      
      {/* second section */}
    <section className="second-section">
     <Circle/>
     <div className="two-parts">

        <div className="left-main">
          <div className="left-part">
            <div className="main-heading-block">
              <h1 className="main-heading">The best mobile <br/> website for <br/> creators.</h1>
            </div>      
          </div>   
         {/* <!-- landing waitlist btn --> */}
        <div className="waitlist-btn">
            <form>
            <input type="email" name="email" placeholder=" Your email"/>
              <Link to="signin.html" className="waitlist-btn-1">
                <input type="submit" name="submit" value="Join Waitlist"/>
              </Link>
            </form>
        </div> 
        {/* landing ends  */}
      </div>
{/* right path */}
<div className="right-part">
  <MobileComponent/>
  <CircleSecond/>
</div>
     </div>
{/* right path ends */}
    </section>
   {/*section end here */}
    </div>

    
    <section className="third-section">
    <div className="third-section-title">Start building your business today.<br/>
        Free Forever.</div>
        <div className="third-section-picture">
          <Card1/>
          <Card2/>
          <Card3/>
        </div>
    </section>
      <Footer/>
   
</React.Fragment>
  )
}                                      

export default Homepage;
