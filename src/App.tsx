import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Chat from './pages/Chat.tsx'
import Registration from './pages/Registration.tsx'
import Login from './pages/Login.tsx'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <div>App</div>
    </BrowserRouter>
  )
}

export default App