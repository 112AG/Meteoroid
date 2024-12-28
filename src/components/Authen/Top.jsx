import React from 'react'
import {Link} from 'react-router-dom'

function Top() {
  return (
    <div className='bg-gray-900 h-[100vh] w-full text-white font-bold text-xl'>
        <nav className='w-full bg-gray-950 flex items-center justify-between p-6'>
            <h1 >Logo</h1>
            <ul className='flex items-center justify-center gap-4 '>
                <li className='hover:underline'><Link to='/login'> LogIn</Link></li>
                <li className='hover:underline'><Link to='/signup'>SignUp</Link></li>
            </ul>
        </nav>
        <div className='w-full'>
            <h1 className='w-full text-6xl mt-[200px] text-center'>Authentic Page</h1>
            <p className='text-white text-xl font-bold text-center my-4'>This is Home Page.</p>
        </div>
    </div>
  )
}

export default Top