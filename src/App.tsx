import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Chat from './pages/Chat.tsx'
import Registration from './pages/Registration.tsx'
import Login from './pages/Login.tsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    <div>App</div>
    <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
    </>
  )
}

export default App