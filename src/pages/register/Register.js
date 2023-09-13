import React, { useState } from 'react'
import "./register.css";
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../../utils/FetchApi';
import { register } from '../../Redux/authSLice';
import { useDispatch } from 'react-redux';

export default function Register() {
  
  const [data, setData] = useState({
    userName: '',
    password: '',
    email: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()

    if (data.userName === "" || data.password === "" || data.email === "") return

    try {
      const options = { 'content-type': 'application/json' }
      const value = await request('/auth/register', "POST", options, 
            { username: data.userName, email: data.email, password: data.password })
            dispatch(register(value))
            navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type='text' placeholder='usename...' onChange={(e) => {
            setData({ ...data, userName: e.target.value })
          }} value={data.userName} />
          <input type='password' placeholder='password' onChange={(e) => {
            setData({ ...data, password: e.target.value })
          }} value={data.password} />
          <input type='email' placeholder='johndoe@gmail.com' onChange={(e) => {
            setData({ ...data, email: e.target.value })
          }} value={data.email} />
          <button type='submit'>Register</button>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}
