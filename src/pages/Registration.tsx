import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import styled from "styled-components"
import InputEl from '../components/GlobalInputs/InputEl.tsx'
import { FormTy } from '../components/GcomponetTy'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg";

const Registration = () => {
  const [formDetails,setFormDetails] = useState<FormTy>({username:"",email:"",password:"",confirmPassword:""})
  const [error,setError] = useState<FormTy>({} as FormTy)


  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormDetails(prev=>({...prev,[name]:value}))
  }
  const handleSubmit = (e:any)=>{
      e.preventDefault()
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className='brand'>
           <img src={Logo} alt="logo"/>
           <h1>Snappy</h1>
        </div>
        <InputEl value={formDetails.username} type="text" labelname='Username' id={"username"} handleChange={handleChange}/>
        <InputEl value={formDetails.email} type="email" labelname='Email' id={"email"} handleChange={handleChange}/>
        <InputEl value={formDetails.password} type="password" labelname='Password' id={"password"} handleChange={handleChange}/>
        <InputEl value={formDetails.confirmPassword} type="password" labelname='Confirm password' id={"confirmPassword"} handleChange={handleChange}/>
        <button type="submit">Create User</button>
        <span>Already have an Account? <Link to="/login">Login</Link></span>
      </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
gap:1rem;
background-color:#131324;
.brand{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
img {
    height:5rem;
    width:5rem;
    }
h1 {
    color:white;
    text-transform:uppercase;
    }  
}
form {
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#00000076;
    border-radius:2rem;
    padding:3rem 5rem;
button{
   background-color:#997af0;
   padding:1rem 2rem;
   color:white;
   border:0px;
   cursor:pointer;
   font-weight:bold;
   border-radius:0.4rem;
   font-size:1rem;
   text-transform:uppercase;
   transistion:0.4sec ease-in-out;
   &:hover{
   background-color:#4e0eff;
   }
    }
   span{
   color:white;
   text-transform:uppercase;
   a{
   color:#4e0eff;
   text-decoration:none;
   font-weight:bold;
   }
   }
}      

`
export default Registration

