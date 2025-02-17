import React, { ChangeEvent } from 'react'
import { GInputTy } from '../GcomponetTy'

const InputEl = ({labelname,handleChange,id,type,value,error}:GInputTy) => {
  return (
    <div className='g-input-container'>
        <label className='g-input-label' htmlFor={id}>{labelname}</label>
        <br/>
        <input className='g-input-ele' onChange={handleChange} id={id} name={id} value={value} type={type}/>
        <br/>
        {error &&<span className='error-msg'>{error} *</span>}
    </div>
  )
}

export default InputEl