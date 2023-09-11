import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [showmodal, setshowmodal] = useState(false)
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <Link to='/'>Webmania</Link>
        </div>
        <ul className='center'>
          <li className='listitem'>Home</li>
          <li className='listitem'>About</li>
          <li className='listitem'>Categories</li>
          <li className='listitem'>Contacts</li>
        </ul>
        <div className='right'>
          <img src='shubham.jpeg' alt='img' onClick={() =>{
            setshowmodal(prev => !prev)
          }}/>
          {showmodal && 
            <div className='modal'>
            <Link to='/create'>Create</Link>
            <span>Logout</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
