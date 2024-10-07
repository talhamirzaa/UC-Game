import React from 'react'
import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';//to change active tabs
export default function NavBar() {
  

  return (
    <>
          <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <Link className="navbar-brand bg-transparent" to="/" id="nvnm"> <img className="w-75" src="/test_logo_rsz.png" alt="uc"/></Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/AboutGm">About Game</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/Points">Points Table</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/NewGame">Welcome</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="PickCard">PickCard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Elimiate">Elimination</NavLink>
        </li> */}
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
    
    </>
  )
}
