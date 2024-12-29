
// 1.) provide an error : PrivateRoute.jsx:6 You should call navigate() in a React.useEffect(), not when your component is first rendered. Error Component Stack

// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// function PrivateRoute({privatePage}) {
//     const navigate = useNavigate();
//   {privatePage ? navigate('/dashboard') : navigate('/login')}
//   return null;
//   }
// export default PrivateRoute


// 2.) 

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function PrivateRoute({ privatePage }) {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // If privatePage is false, navigate to login page
//         if (!privatePage) {
//             navigate('/login');
//         } else {
//             // If privatePage is true, navigate to dashboard
//             navigate('/dashboard');
//         }
//     }, [privatePage, navigate]); // Re-run effect when privatePage changes

//     return null; // Since you're only redirecting, there's no need to render anything
// }

// export default PrivateRoute;
