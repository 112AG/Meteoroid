import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp({formData, setFormData , setAuthData, authData}) {

    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }
    function handleSubmit (e) {
        e.stopPropagation();
        e.preventDefault();
        // console.log(formData);
        const newUser = {
            ...formData,
            id: authData.length + 1, // Generate a new user ID
          };
      
          // Update the authData state by adding the new user to the existing list
          setAuthData([...authData, newUser]);
      
        
        // setAuthData({
        //     ...authData,
        //     [e.target.name] : e.target.value,
        //     id : authData.length+1
        // })
        navigate('/dashboard');
    }
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-900 text-white'>
        <form onSubmit={handleSubmit} className='px-6 py-4 bg-gray-600 border-2 border-white rounded flex flex-col items-start justify-center'>
            <h1 className='text-2xl font-bold'>SignUp </h1>
            <label >
                <p>Full Name * </p>
                <input
                type="text"
                className='border border-black rounded outline-none text-black px-2 py-1'
                onChange={handleChange}
                name='fullname'
                value={formData.fullname}
                required
                />
            </label>
            <label >
                <p>Email * </p>
                <input
                type="email"
                className='border border-black rounded outline-none text-black px-2 py-1'
                onChange={handleChange}
                name='email'
                value={formData.email}
                required
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
                required
                />
            </label>
            <Link to='/login'>Login</Link>
            <button   type='submit' className='w-full rounded py-1 bg-gray-950 border border-white text-xl font-bold my-2'>SignUp</button>
        </form>
    </div>
  )
}

export default SignUp