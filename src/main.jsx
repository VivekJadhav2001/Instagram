import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx'
import MyProfile from './Pages/MyProfile/MyProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        } />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path="/myprofile"
          element={
            <ProtectedRoutes>
              <MyProfile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
