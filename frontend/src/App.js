import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Products from './components/Products'

function App() {
  return (
    <>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path='/register'  element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/products' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App