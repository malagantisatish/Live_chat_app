import React, { ChangeEvent } from 'react'
import { GInputTy } from '../GcomponetTy'

const InputEl = ({labelname,handleChange,id,type,value}:GInputTy) => {
  return (
    <div className='g-input-container'>
        <label className='g-input-label' htmlFor={id}>{labelname}</label>
        <br/>
        <input className='g-input-ele' onChange={handleChange} id={id} name={id} value={value} type={type}/>
    </div>
  )
}

export default InputEl