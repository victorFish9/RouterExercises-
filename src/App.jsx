import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./App.css"


function App() {


  return (
    <>
      <h1 className='title'>Welcome to React Router</h1>
      <div>
        <nav>
          <Link to={"/"} className='links'>Home</Link>
          <Link to={"/about"} className='links'>About</Link>
          <Link to={"/contact"} className='links'>Contact</Link>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default App
