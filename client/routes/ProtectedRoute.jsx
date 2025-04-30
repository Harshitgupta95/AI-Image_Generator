import React, { useContext } from 'react'
import { AppContext } from '../src/context/AppContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const {isLoggedIn, setShowLogin} = useContext(AppContext)
    if (!isLoggedIn) {
        setShowLogin(true)
        return <Navigate to="/" replace />;
      }
    
      return children;
}
