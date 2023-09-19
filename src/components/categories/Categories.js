import React, { useEffect, useState } from 'react';
import './categories.css'
import { request } from '../../utils/FetchApi'
import { Link } from 'react-router-dom'
import { MdOutlinePreview } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
import {format} from 'timeago.js'

export default function Categories() {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    'all',
    'nature',
    'music',
    'design', 
    'programming',
    'fun',
    'fashion'
  ]

  useEffect(() => {
    const fetchBlogs = async() => {
      try {
        const data = await request('/blog/getAll', 'GET')
        setBlogs(data)
        setFilteredBlogs(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBlogs()
  }, [])

  console.log(blogs)
  return (
    <div className='category-container'>
      <div className='category-wrapper'>
        <h2>Select a Category</h2>
        <div className='categoriesandblogs'>
          <div className='categories'>
            {categories.map((category) => {
              return <span 
                key={crypto.randomUUID()}
                className={`${"Category"} ${activeCategory === category && "active"}`}
                onClick={() => setActiveCategory(prev => category)}
                >
                  {category}
                </span>
            })}
          </div>
          {filteredBlogs?.length > 0 ? 
            <div className='category-blogs'>
              {filteredBlogs?.map((blog) => {
                return <div key={blog._id} className='blog'>
                  <Link to={"/blogdetails"}>
                    <img src={`http://localhost:4000/images/${blog?.photo}`} alt='' />
                  </Link>
                  <div className='blogdata'>
                    <div className='categorymetadata'>
                      <span className='Category'>
                        {blog?.category}
                      </span>
                      <div className='metadata'>
                        <MdOutlinePreview /> {blog?.views} views
                      </div>
                      <div className='metadata'>
                        <AiFillLike /> {blog?.likes?.length} likes
                      </div>
                    </div>
                    <h4>{blog?.title}</h4>
                    <p className='blogDesc'>{blog?.description}</p>
                    <div className='authorandcreatedat'>
                      <span><span>Author: </span> {blog?.userId?.username}</span>
                      <span><span>Created: </span> {format(blog?.createdat)}</span>
                    </div>
                    <Link to={`/blogdetails/${blog._id}`} className='readmore'>
                      Read more <FiArrowRight />
                    </Link>
                  </div>
                </div>
              })}
            </div>
          : <h3 className='noBlogs'>No Blogs</h3>}
        </div>
      </div>
    </div>
  )
}
