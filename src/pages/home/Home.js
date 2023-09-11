import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'

export default function Home() {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
    </div>
  )
}
