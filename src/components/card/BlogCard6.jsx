import React, { Component, Fragment } from 'react';
import $, { data } from 'jquery';
import { Link } from 'react-router-dom';
import BlogCard4 from './BlogCard4';

class BlogCard6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogcardsec: [],
    };
  }

  getBlogData = () => {
    $.ajax({
      url: '/blogsecData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ blogcardsec: data.blogcardsec });
        console.log(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      },
    });
  };

  componentDidMount() {
    this.getBlogData();
  }

  render() {
    const { error, blogcardsec } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <Fragment>
          <BlogCard4 />

          {/* <section className="blog-page-2">
             <a href="getting started.html" className="page-2-top">
    <div className="featured">   
      <div className="avatar-1"> <img src="img/avatar-1.png" alt="">
        <h4 className="tips">Tips</h4>
      </div>
      <div className="featured-icon"><i className="fas fa-star"></i> Featured</div>
    </div> 
    
    <div className="blog-card-middle">
      <h4 className="blog-card-1-title"></i><span className="traffic">&#128678;</span>Getting started with your Beacons profile</h4>
    </div>
    <div className="blog-card-bottom">
      <h6>7 months ago &bull;<span> 3 min read</span></h6>
    </div>
  </a>
             </section> */}

          {/* {blogcardsec.map((data) => (
                  <section className="blog-page-2">
                  <Link href="getting started.html" className="page-2-top">
                  <div className="featured">   
                      <div className="avatar-1"> <img src="img/avatar-1.png" alt=""/>
                        <h4 className="tips">Tips</h4>
                      </div>
                      <div className="featured-icon"><i className="fas fa-star"></i> Featured</div>
                    </div> 
    
                  </Link>
                
                  </section>
               ))}
       */}
          <div className='card-container'>
            {blogcardsec.map((data) => (
              <div
                key={data.id}
                className='main-card-1'
                style={{ borderRadius: '15px' }}>
                <Link to='featuring a video.html' className='main-card'>
                  <img
                    src={require('../../img/' + data.blogbackground)}
                    alt=''
                    className='main-card-img'
                  />
                  <img
                    src={require('../../img/' + data.avatar)}
                    alt=''
                    className='card-avatar-1'
                  />
                  <h2 className='tips-card'>Tips</h2>
                  <div>
                    <h5>
                      {data.title} {data.emoji}
                    </h5>
                  </div>
                  <div>
                    <h6>
                      {data.time} &nbsp;&bull;&nbsp;<span>&nbsp;</span>
                    </h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Fragment>
      );
    }
  }
}

export default BlogCard6;
