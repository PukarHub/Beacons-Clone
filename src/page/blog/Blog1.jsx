import React from 'react';
import '../../css/blog1.css';
import Blog1Nav from '../../components/Navbar/Blog1Nav'
import BlogCard4 from '../../components/card/BlogCard4'
import BlogCard5 from '../../components/card/BlogCard5'
import BlogFooter from '../../components/footer/BlogFooter'


function Blog1() {
  return (
    <React.Fragment>
      <Blog1Nav />

      {/* <!-- blog-image SECTION --> */}
    <div className="blog-image">
     <div className="blog-title">
      Beacons Blog <br/> <br/>
      <span className="blog-span">Tips, research and stories from a startup to build the best toold for the creator community</span> 
     </div>
    </div>

    {/* Getting Started Card */}
    <BlogCard4/>
    <BlogCard5/>
    <BlogFooter/>

    </React.Fragment>
  );
}

export default Blog1;
