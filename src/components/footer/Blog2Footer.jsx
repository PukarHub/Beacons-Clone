import React from 'react'
import { Link } from 'react-router-dom';

function Blog2Footer() {
    return (
        <React.Fragment>
             <div className='page-btn'>
        <div>
          <p>
          <Link to='/blog1'>
              <i className='fas fa-arrow-left page-arrow'></i>
            </Link>
            Page 2 of 2{' '}
          </p>
        </div>
      </div>
      <section
        className='footer'
        style={{ display: 'block', padding: '2rem', borderRadius: '0px' }}
      >
        <p>Beacons Blog &copy;2020&nbsp; &bull; &nbsp;Published with Ghost</p>
        <Link to='https://www.facebook.com/beaconsai'>
          <i className='fab fa-facebook-square fb fa-2x'></i>
        </Link>
        <Link to='https://twitter.com/beaconsai'>
          <i className='fab fa-twitter fa-2x twitter'></i>
        </Link>
        <p>Javascript license information</p>
      </section>
        </React.Fragment>
    )
}

export default Blog2Footer
