import React, { useState } from 'react'
import "./create.css"
import Navbar from '../../components/navbar/Navbar'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { request } from '../../utils/FetchApi'

export default function Create() {
  const categories = [
    'nature',
    'music',
    'travel',
    'design',
    'programming',
    'fashion',
    'fun'
  ]

  const [title, setTitle] = useState(' ')
  const [description, setDescription] = useState(' ')
  const [category, setCategory] = useState(' ')
  const [img, setImg] = useState('')
  const navigate = useNavigate()
  const {token} = useSelector(state => state.auth) 

  const onChangeFile = (e) => {
    setImg(e.target.files[0])
  }

  const handleCloseImg = (e) => {
    setImg(null)
  }

  const createHandler = async(e) => {
    e.preventDefault()


    try {
      const formData = new FormData()

      let filename = null
      if(img){
        filename = crypto.randomUUID() + img.name;
        formData.append("filename", filename)
        formData.append('image', img)

        await fetch("http://localhost:4000/upload", {
          method: "POST",
          body: formData
        } )
      }

      else {return}

      const options = {
        'content-type': 'application/json',
        'bearer': `Authorization ${token}`
      }

      const body = {
        title,
        description,
        category,
        photo: filename
      }

      const data = await request('/blog', 'POST', options, body)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <Navbar />
      <div className='create-container'>
        <div className='create-wrapper'>
          <h2>Create Blog</h2>
          <form onSubmit={createHandler} encType='multipart/form-data'>
            <div className='inputwrapper'>
              <label>Title: </label>
              <input
                type='text'
                placeholder='title...'
                className='input'
                onChange={(e) => {setTitle(e.target.value)}}
                value={title}
              />
            </div>
            <div className='inputwrapper'>
              <label>Description: </label>
              <input
                type='text'
                placeholder='description...'
                className='input'
                onChange={(e) => {setDescription(e.target.value)}}
                value={description}
              />
            </div>
            <div className='inputwrapper'>
              <label>Category: </label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((category) => {
                  return <option key={crypto.randomUUID()} value={category}>{category}</option>
                })}
              </select>
            </div>
            <div className='inputwrapperimg'>
              <label htmlFor='image'>Image: <span>Upload here</span></label>
              <input id='image' type='file' className='input' onChange={onChangeFile} style={{display: 'none'}} />
              {img && <p className='imagename'>{img.name} <AiOutlineCloseCircle className='clsIcon' onClick={() => handleCloseImg()} /></p>}
            </div>
            <div className='buttonwrapper'>
              <button className='submitBtn' type='submit'>
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}