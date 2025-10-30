import React from 'react'
import Stories from '../../components/Stories/Stories'
import Sidebar from '../../components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import SirSidebar from '../../components/SirSidebar/SirSidebar';
import ContentPage from '../../components/ContentPage/ContentPage';
import Profile from '../Profile/Profile';
function Home() {
  return (
    <div className='relative min-h-screen p-4 w-screen bg-black text-white overflow-x-hidden'>
      {/* relative min-h-screen p-4 w-screen bg-black text-white overflow-x-hidden */}
      <Stories/>
      <Sidebar/>
      {/* <SirSidebar/> */}

      <ContentPage/>
      <Profile/>

      <ToastContainer/>

      
    </div>
  )
}

export default Home