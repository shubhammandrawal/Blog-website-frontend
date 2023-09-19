import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Categories from '../../components/categories/Categories'

export default function Home() {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs />
      <Categories />
    </div>
  )
}
