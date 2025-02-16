import React, { ChangeEvent } from 'react'
import { GInputTy } from '../GcomponetTy'

const InputEl = ({labelname,handleChange,id,type,value}:GInputTy) => {
  return (
    <div>
        <label htmlFor={id}>{labelname}</label>
        <input onChange={handleChange} id={id} name={id} value={value} type={type}/>
    </div>
  )
}

export default InputEl