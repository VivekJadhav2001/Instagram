import React from 'react'
import Stories from '../../components/Stories/Stories'
import Sidebar from '../../components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
function Home() {
  return (
    <div className='relative h-screen w-screen bg-black text-white'>
      <Stories/>
      <Sidebar/>

      <ToastContainer/>
      
    </div>
  )
}

export default Home