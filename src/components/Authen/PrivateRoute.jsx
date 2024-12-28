import React from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({formData, authData}) {
    const navigate = useNavigate();
  return {
    authData.filter((data) => {
        if(data.email === formData.email && data.password === formData.password){
            navigate('/dashboard');
        }else{
            alert('Enter wrong password or email, Try again!')
        }
    })
  }
}

export default PrivateRoute