import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { request } from '../../utils/FetchApi';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/authSLice';


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = async(e) => {
    e.preventDefault()

    if(email === " " || password === " ") return
    try {
      const options = {'content-type': 'application/json'}
      const value = await request('/auth/login', "POST", options, {email, password})
        dispatch(login(value))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <input type='email' placeholder='johnDoe@gmail.com'
            onChange={(e) => {
              setEmail(e.target.value)
            }} value={email}
          />
          <input type='password' placeholder='Enter Password...'
          onChange={(e) => {
            setPassword(e.target.value)
          }} value={password}
           />
          <button type='submit'>Login</button>
          <p>create new account <Link to='/register'>Register</Link> </p> 
        </form>
      </div>
    </div>
  )
}
