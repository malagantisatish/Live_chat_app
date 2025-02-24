import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import styled from "styled-components"
import InputEl from '../components/GlobalInputs/InputEl.tsx'
import { LoginTy } from '../components/GcomponetTy'
import { Link, useNavigate } from 'react-router-dom'
import { toast,  } from 'react-toastify'
import axios from 'axios'
import { loginRoute } from '../utilities/APIRoutes.tsx'
import {Buffer} from "buffer"
import { avatarList } from '../utilities/Sources.ts'

const SetAvatar = () => {
    // const [avatarList,setAvatarList] = useState([])
    const [isloading,setIsLoading] = useState<boolean>(false)
    const [selectedAvatar,setSelectedAvatar] = useState("")
    const randomImgApi = "https://api.multiavatar.com"
    const navigate = useNavigate()
    const avatarStyles = ["bottts", "avataaars", "pixel-art"];
const usernames = ["Alice", "Bob", "Charlie"];
    useEffect(()=>{
        const fetchTheImages=async()=>{
            // for (let i=0;i<4;i++){
                try{
                    const response = await axios.get(`${randomImgApi}/user123.svg`)
                    console.log(response)
                }
                catch(error:any){
                    toast.error(error.msg,{toastId:"randomImg"})
                }
            }
        // }
        fetchTheImages()
    },[])

    console.log("avatarList",avatarList)
  return (
    <div className='avatar-container'>
        <div className='title-container'>
            <h1>Pick an avatar as your profile picture</h1>
            <ul className='img-list'>
            {avatarList.map((item:string)=>{
            return(
              <li className='img-item'>
                <img src={item} alt="avatar_img"  />
              </li>
            )  
            })}
            </ul>
          </div>
        <div></div>
    </div>
  )
}


export default SetAvatar