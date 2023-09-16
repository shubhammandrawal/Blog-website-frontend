import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UpdatedBlog from './pages/updatedBlog/UpdatedBlog';
import BlogDetails from './pages/blogDetails/BlogDetails';
import Create from './pages/create/Create';
import { useSelector } from 'react-redux';
function App() {

  const user = useSelector((state) => state.auth)
  return <>
    <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
      <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
      <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
      <Route path='/updatedblog/:id' element={user ? <UpdatedBlog /> : <Navigate to='/login' />} />
      <Route path='/blogdetails/:id' element={user ? <BlogDetails /> : <Navigate to='/login' />} />
    </Routes>
  </>
}

export default App;
