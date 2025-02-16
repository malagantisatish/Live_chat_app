import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import styled from "styled-components"
import InputEl from '../components/GlobalInputs/InputEl.tsx'
import { FormTy } from '../components/GcomponetTy'
import { Link } from 'react-router-dom'

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
           <img src="" alt="logo"/>
           <h1>Snappy</h1>
        </div>
        <InputEl value={formDetails.username} type="text" labelname='Username' id={"username"} handleChange={handleChange}/>
        <InputEl value={formDetails.email} type="email" labelname='Email' id={"email"} handleChange={handleChange}/>
        <InputEl value={formDetails.password} type="password" labelname='Password' id={"password"} handleChange={handleChange}/>
        <InputEl value={formDetails.confirmPassword} type="password" labelname='Confirm password' id={"confirmPassword"} handleChange={handleChange}/>
        <button type="submit">Create User</button>
        <span>Already have an Account?<Link to="/login">Login</Link></span>
      </form>
    </FormContainer>
  )
}

export default Registration


const FormContainer = styled.div``