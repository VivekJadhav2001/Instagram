import React from 'react'

function InputBox({type}) {
  return (
    <input type={type} id="" placeholder={`enter your ${type}`} className='p-1.5 h-[6vh] w-[19vw] bg-[#121212] border-white border rounded' />
  )
}

export default InputBox