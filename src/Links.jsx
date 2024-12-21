import React from 'react'
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className='h-[100vh] w-full bg-cyan-50 flex flex-col items-center justify-center ' > 
<div className='rounded-3xl shadow-2xl p-4 flex flex-col items-center justify-center bg-white '>
<h1 className='font-bold text-4xl py-4'>All Projects Links</h1>
        <ol className='list-decimal pl-5'>
          <li className='list-blue'><Link className='font-semibold text-blue-600 underline' to="/lecture">Courses Playlist</Link></li>
          <li className='list-blue'><Link className='font-semibold text-blue-600 underline' to="/quote">Generate Weather</Link></li>
          <li className='list-blue'><Link className='font-semibold text-blue-600 underline' to="/testimonial">Slider on Array</Link></li>
          <li className='list-blue'><Link className='font-semibold text-blue-600 underline' to="/form">Form</Link></li>
        </ol>
</div>
        <style>{`
          .list-blue {
            color: blue;
          }
        `}</style>
    </div>
  )
}

export default Links