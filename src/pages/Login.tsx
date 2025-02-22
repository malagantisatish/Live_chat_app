import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import styled from "styled-components"
import InputEl from '../components/GlobalInputs/InputEl.tsx'
import { LoginTy } from '../components/GcomponetTy'
import { Link, useNavigate } from 'react-router-dom'
import { toast,  } from 'react-toastify'
import axios from 'axios'
import { loginRoute } from '../utilities/APIRoutes.tsx'
import logo from "../assets/logo.svg";


const Registration = () => {
  const [formDetails,setFormDetails] = useState<LoginTy>({username:"",password:""})
  const [error,setError] = useState<LoginTy>({} as LoginTy)
  const navigate = useNavigate()

  useEffect(()=>{
    if (localStorage.getItem("chat_app_user")){
      navigate("/")
    }

  },[])


  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormDetails(prev=>({...prev,[name]:value}))
    if (error && error[name]){
      const errorObj = error 
      delete errorObj[name as keyof object] 
      setError(errorObj)
    }
    
  }

  const validation=():boolean=>{
    const errorObj = {} as LoginTy
    let isvalid :boolean= true
    const condtions = [
      {name:"username",condition:!formDetails.username,message:"This Field is Required"},
      // {name:"email",condition:!formDetails.email,message:"This Field is Required"},
      {name:"password",condition:!formDetails.password ,message:"This Field is Required"},
    ]

    for (let condition of condtions){
      if (condition.condition){
        errorObj[condition.name] = condition.message
        isvalid = false
      }
    }

    if (errorObj){
      setError(errorObj) 

    }
    return isvalid

  }


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const isvalid:boolean = validation()
      if(isvalid){
        const reqBody = {
          username:formDetails.username,
          // email:formDetails.email,
          password:formDetails.password
        }
        try{
          const {data}:any =await  axios.post(loginRoute,reqBody)
          if (data.status===false){
         return  toast.error(data.msg,{toastId:"registererr"})
          }
          if (data.status===true){
            localStorage.setItem("chat_app_user",JSON.stringify(data.user))
            navigate("/")
          }

        }catch(err:any){
           return toast.error(err.message,{toastId:"registererr"})
        }
      } 
  }

  return (
    <>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className='brand'>
           <img src={logo} alt="logo"/>
           <h1>Snappy</h1>
        </div>
        <InputEl error={error.username} value={formDetails.username} type="text" labelname='Username' id={"username"} handleChange={handleChange}/>
        {/* <InputEl error={error.username} value={formDetails.email} type="email" labelname='Email' id={"email"} handleChange={handleChange}/> */}
        <InputEl error={error.username} value={formDetails.password} type="password" labelname='Password' id={"password"} handleChange={handleChange}/>
        <button type="submit">Login</button>
        <span>Don't have an Account? <Link to="/registration">Register new account</Link></span>
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

