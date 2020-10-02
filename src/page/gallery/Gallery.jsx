import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../img/Capture.png'; 
import '../../css/gallery.css';
import GalleryCard1 from '../../components/card/gallery/GalleryCard1';
import GalleryCard2 from '../../components/card/gallery/GalleryCard2';
import GalleryCard3 from '../../components/card/gallery/GalleryCard3';
import GalleryCard4 from '../../components/card/gallery/GalleryCard4';

function Gallery() {
    return (
        <React.Fragment>
        {/* Navbar */}
          <div className='container'>
          
      <section className='first-section' style={{backgroundColor: 'transparent'}}>
        <div className='navbar'>
          
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
      </div>
      
        <div class="gallery-heading">The Gallery</div>
        <div className="gallery-image-container">
        <GalleryCard1/>
        <GalleryCard2/>
        <GalleryCard3/>          
        <GalleryCard4/>   
        <GalleryCard3/> 
        <GalleryCard4/>          
        <GalleryCard3/> 
        <GalleryCard4/>          
        <GalleryCard3/> 
        <GalleryCard4/>          
        <GalleryCard3/> 
        <GalleryCard4/>      
        <GalleryCard1/>
        <GalleryCard2/>
        <GalleryCard3/>          
        <GalleryCard4/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
        <GalleryCard1/>       
        <GalleryCard2/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
        <GalleryCard1/>       
        <GalleryCard2/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
        <GalleryCard2/>       
        <GalleryCard1/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
        <GalleryCard3/>       
        <GalleryCard4/>       
          </div>          
        </React.Fragment>
    )
}

export default Gallery;
