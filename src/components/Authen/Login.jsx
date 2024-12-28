import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login({authData}) {
    // console.log(authData);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    function handleChange(e) {
        // console.log(e.target.value);
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }
    function handleSubmit (e) {
        e.stopPropagation();
        e.preventDefault();
        const valid = authData.filter((data) => {
            data.email === formData.email && data.password === formData.password
        })
        if(valid) 
            navigate('/dashboard')
        else
            alert('Email or Password is wrong')
        console.log(formData);
        console.log(authData);
    }

  return (
    <div className='h-screen w-full flex items-center justify-center flex-col bg-gray-900 text-white'>
        <h1 className='text-4 text-3xl font-bold py-4'>If you have no account then go & SignUp first</h1>
        <form onSubmit={handleSubmit} className='px-6 py-4 bg-gray-600 border-2 border-white rounded flex flex-col items-start justify-center'>
            <h1 className='text-2xl font-bold'>Login </h1>
            <label >
                <p>Email * </p>
                <input
                type="email"
                className='border border-black rounded outline-none text-black px-2 py-1'
                onChange={handleChange}
                name='email'
                value={formData.email}
                />
            </label>
            <label >
                <p>Password * </p>
                <input
                type="password"
                className='border border-black rounded outline-none text-black px-2 py-1'
                onChange={handleChange}
                name='password'
                value={formData.password}
                />
            </label>
            <Link to='/signup'>SignUp</Link>
            <button className='w-full rounded py-1 bg-gray-950 border border-white text-xl font-bold my-2'>Login</button>
        </form>
    </div>
  )
}

export default Login