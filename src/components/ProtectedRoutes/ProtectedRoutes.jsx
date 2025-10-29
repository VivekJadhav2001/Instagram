import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    const [token] = useState(()=>{
        return localStorage.getItem("token")
    })
  return (
    <div>
        {token ? children :<Navigate to="/login" replace/>}
    </div>
  )
}

export default ProtectedRoutes