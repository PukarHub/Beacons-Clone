import React, { Component, Fragment } from 'react';
import $, { data } from 'jquery';
import avatar1 from '../../img/avatar-1.png';
import blog2 from '../../img/blog-card-2.jpg';
import { Link } from 'react-router-dom';
import blog3 from '../../img/blog-card-3.jpg';
import blog4 from '../../img/blog-card-4.jpg';
import blog5 from '../../img/blog-card-5.jpg';
import blog6 from '../../img/blog-card-6.jpg';
import blog7 from '../../img/blog-card-7.jpg';
import blog8 from '../../img/blog-card-8.jpg';
import blog9 from '../../img/blog-card-9.jpeg';
import blog10 from '../../img/blog-card-10.jpg';
import blog11 from '../../img/blog-card-11.jpeg';
import blog12 from '../../img/blog-card-12.jpg';

class BlogCard5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogcard: [],
    };
  }

  getBlogData = () => {
    $.ajax({
      url: '/blogData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ blogcard: data.blogcard });
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
    const { error, blogcard } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <Fragment>
          <div className='card-container'>
            {blogcard.map((data) => (
              <div key={data.id} className="main-card-1" style ={{borderRadius: '15px'}}>
                <Link to='featuring a video.html'className='main-card'>
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
    //    return (
    //   <React.Fragment>
    //     {/* <!-- REST OF THE CARDS --> */}
    //     <div className='card-container'>
    //       {/* <!-- CARD-3 --> */}
    //       <Link to='featuring a video.html' className='main-card main-card-1'>
    //         <img src={blog3} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Leveling up your links &#128279;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- CARD-4 --> */}
    //       <Link to='getting started.html' className='main-card main-card-4'>
    //         <img src={blog4} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>

    //         <div>
    //           <h5>Customizing your page &#127912;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- CARD-5 --> */}

    //       <Link to='featuring a video.html' className='main-card main-card-5'>
    //         <img src={blog5} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Your weekly update email &#129299;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             4 months ago &nbsp;&bull;&nbsp;<span>&nbsp;3 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- CARD-6 --> */}

    //       <Link to='getting started.html' className='main-card main-card-6'>
    //         <img src={blog6} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Enabling visitors to support your content&#129395;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- CARD-7 --> */}
    //       <Link to='featuring a video.html' className='main-card main-card-7'>
    //         <img src={blog7} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Featuring a video &#127916;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- card-8 --> */}
    //       <Link to='featuring a video.html' className='main-card main-card-8'>
    //         <img src={blog8} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Setting up with stripe&#127970;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;1 min read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- card-9 --> */}

    //       <Link to='featuring a video.html' className='main-card main-card-9'>
    //         <img src={blog9} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>The Smart Link&#9889;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- card-10 --> */}

    //       <Link to='getting started.html' className='main-card main-card-10'>
    //         <img src={blog10} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Monetization for content creators</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             5 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- card-11 --> */}

    //       <Link to='featuring a video.html' className='main-card main-card-11'>
    //         <img src={blog11} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Building your email list&#127969;.</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>

    //       {/* <!-- card-12 --> */}

    //       <Link to='featuring a video.html' className='main-card main-card-12'>
    //         <img src={blog12} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Building your email list&#127969;.</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //         s
    //       </Link>

    //       {/* <!-- card-13 --> */}
    //       <Link to='featuring a video.html' className='main-card main-card-13'>
    //         <img src={blog2} alt='' className='main-card-img' />
    //         <img src={avatar1} alt='' className='card-avatar-1' />
    //         <h2 className='tips-card'>Tips</h2>
    //         <div>
    //           <h5>Optimizing your links for clicks &#128170;</h5>
    //         </div>
    //         <div>
    //           <h6>
    //             6 months ago &nbsp;&bull;&nbsp;<span>&nbsp;2 mins read</span>
    //           </h6>
    //         </div>
    //       </Link>
    //     </div>
    //   </React.Fragment>
    // );
  }
}

export default BlogCard5;
/*  */
