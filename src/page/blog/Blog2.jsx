import React, { Fragment } from 'react';
import Blog1Nav from '../../components/Navbar/Blog1Nav';
import '../../css/blog1.css';
import Blog2Footer from '../../components/footer/Blog2Footer'
import BlogCard4 from '../../components/card/BlogCard4'
import BlogCard6 from '../../components/card/BlogCard6';

const Blog2 = () => {
  return <Fragment>
      <Blog1Nav/>
      <div className="blog-image">
     <div className="blog-title">
      Beacons Blog <br/> <br/>
      <span className="blog-span">Tips, research and stories from a startup to build the best toold for the creator community</span> 
     </div>
    </div>
    {/* Getting Started Card */}
       <BlogCard6/>
      <Blog2Footer/>
  </Fragment>;
};

export default Blog2;
