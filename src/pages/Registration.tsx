import React, { ChangeEvent, SetStateAction, useState } from 'react'
import styled from "styled-components"
import InputEl from '../components/GlobalInputs/InputEl.tsx'
import { FormTy } from '../components/GcomponetTy'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg";
import { toast,  } from 'react-toastify'

const Registration = () => {
  const [formDetails,setFormDetails] = useState<FormTy>({username:"",email:"",password:"",confirmPassword:""})
  const [error,setError] = useState<FormTy>({} as FormTy)


  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormDetails(prev=>({...prev,[name]:value}))
    if (error && error[name]){
      let errorObj = {...error}
      delete errorObj[name as keyof object]
      setError(Object.keys(errorObj).length>0?errorObj:{} as FormTy)
    }
    
  }

  const isValid=()=>{
    const errorObj = {} as FormTy
    const condtions = [
      {name:"username",condition:!formDetails.username,message:"This Field is Required"},
      {name:"email",condition:!formDetails.email,message:"This Field is Required"},
      {name:"password",condition:!formDetails.password ,message:"This Field is Required"},
      {name:"confirmPassword",condition:!formDetails.confirmPassword || formDetails.password!==formDetails.confirmPassword,message:formDetails.password!==formDetails.confirmPassword?"password and confirm should be same":"This Field is Required"},
    ]

    for (let condition of condtions){
      if (condition.condition){
        errorObj[condition.name] = condition.message
      }
    }

    if (errorObj){
      setError(errorObj)
      return  toast.error("something went wrong")

    }
    return true

  }


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(isValid()){
         // register the user
         toast.success("Toast should appear now!");
      } 
  }

  return (
    <>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className='brand'>
           <img src={Logo} alt="logo"/>
           <h1>Snappy</h1>
        </div>
        <InputEl error={error.username} value={formDetails.username} type="text" labelname='Username' id={"username"} handleChange={handleChange}/>
        <InputEl error={error.username} value={formDetails.email} type="email" labelname='Email' id={"email"} handleChange={handleChange}/>
        <InputEl error={error.username} value={formDetails.password} type="password" labelname='Password' id={"password"} handleChange={handleChange}/>
        <InputEl error={error.username} value={formDetails.confirmPassword} type="password" labelname='Confirm password' id={"confirmPassword"} handleChange={handleChange}/>
        <button type="submit">Create User</button>
        <span>Already have an Account? <Link to="/login">Login</Link></span>
      </form>
    </FormContainer>
    </>
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

