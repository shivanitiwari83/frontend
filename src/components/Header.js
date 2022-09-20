import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate} from 'react-router-dom'
import {toast} from "react-hot-toast"


const Header = () => {
    const navigate=useNavigate()
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

    const logout =()=>{
        if(currentUser){
            sessionStorage.removeItem("user")
            setCurrentUser(null)
            toast.success("You Are Logout")
            navigate("/login")
        }else{
            window.location.reload()
        }
    }

  return (
        <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarExample01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <NavLink className="nav-link" aria-current="page" to="home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="login">
           Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="imageeditor">
            ImageEditor
          </NavLink>
        </li>
      </ul>
    <button onClick={logout} className="btn btn-primary" >Logout</button>
    </div>
  </div>
</nav>

   </header>
  )
}

export default Header