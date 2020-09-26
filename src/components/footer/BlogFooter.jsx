import React from 'react';
import { Link } from 'react-router-dom';

function BlogFooter() {
  return (
    <React.Fragment>
      <div className='page-btn'>
        <div>
          <p>
            Page 1 of 2{' '}
            <Link to='blogs2.html'>
              <i className='fas fa-arrow-right page-arrow'></i>
            </Link>
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
  );
}

export default BlogFooter;
