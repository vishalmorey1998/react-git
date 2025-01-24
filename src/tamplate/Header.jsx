import React from 'react'

function Header() {
  return (
   <nav className='bg-warning d-flex justify-content-between'>
    
    <i className='bi bi-github text-light fs-1 pl-10px'></i>
    <h1 className='text-light'>
        React-Github
    </h1>
    <div className='mt-3'>
        <button className='btn btn-light me-5'>Add_Product</button>
        <button className='btn btn-dark'>View_Product</button>
    </div>
   </nav>
  )
}

export default Header