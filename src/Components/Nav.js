import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav-bar">
    <div className="img-header">
      <img className="logo" src="images/mylogo.jpg" />
      <h1>cashPoint</h1>
    </div>
    <div>
      <ul className="list-items">
        <li>
        <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/register"> Register</Link>
        </li>
        <li>
        <Link to="/login"> Login </Link>
        </li>
        {/* <li>
          <a href="docs.js">Docs</a>
        </li> */}
      </ul>
    </div>
  </nav>
  )
}

export default Nav