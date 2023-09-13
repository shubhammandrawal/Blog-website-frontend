import React from 'react';
import "./featuredblogs.css";
import { MdOutlinePreview } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';

export default function FeaturedBlogs() {
  return (
    <div className='contianerFeatured'>
      <div className='wrapperFeatured'>
        <h3>Featured Blogs</h3>
        <div className='blogs'>
          <div className='leftFeatured'>
            <div className='mainBlog'>
              <img src='mountain.jpeg' alt='' />
              <div className='mainblogdata'>
                <div className='categoryandmetadata'>
                  <span className='categoryFeatured'>Nature</span>
                  <div className='metadata'>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className='metadata'>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>Blog 1</h4>
                <p className='blogdescription'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                <div className='author'>
                  <span><span>Author: </span>Villy</span>
                  <span><span>Created: </span>23/3/2018</span>
                </div>
              </div>
            </div>
          </div>
          <div className='rightFeatured'>
            <div className='secondaryblog'>
              <img src='mountain2.jpeg' alt='' />
              <div className='secondaryBlogData'>
                <h4>Blog 2</h4>
                <p className='description'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups  </p>
                <div className='author'>
                  <span><span>Author: </span>Villy</span>
                  <span><span>Created: </span>23/3/2018</span>
                </div>
              </div>
            </div>
            <div className='secondaryblog'>
              <img src='mountain2.jpeg' alt='' />
              <div className='secondaryBlogData'>
                <h4>Blog 2</h4>
                <p className='description'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups  </p>
                <div className='author'>
                  <span><span>Author: </span>Villy</span>
                  <span><span>Created: </span>23/3/2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
