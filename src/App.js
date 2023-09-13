import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UpdatedBlog from './pages/updatedBlog/UpdatedBlog';
import BlogDetails from './pages/blogDetails/BlogDetails';
import Create from './pages/create/Create';
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
function App() {
  return <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<Create />} />
            <Route path='/updatedblog/:id' element={<UpdatedBlog />} />
            <Route path='/blogdetails/:id' element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
}

export default App;
