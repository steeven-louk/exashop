/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar p-3" style={{"background":"red"}}>
        <span className="navbar-brand"><img src="./logo.png" alt="logo" /></span>
        <ul className="nav">
          <li className="nav-item"><NavLink to={'/'} className="nav-link text-black fw-semibold">Home</NavLink></li>
          <li className="nav-item"><NavLink to={'/men'} className="nav-link text-black fw-semibold">Men's</NavLink></li>
          <li className="nav-item"><NavLink to={'/women'} className="nav-link text-black fw-semibold">Women's</NavLink></li>
          <li className="nav-item"><NavLink to={'/kids'} className="nav-link text-black fw-semibold">Kid's</NavLink></li>
          <li className="nav-item"><NavLink to={'/contactUs'} className="nav-link text-black fw-semibold">About Us</NavLink></li>
          <li className="nav-item"><NavLink to={'/faqs'} className="nav-link text-black fw-semibold">Contact Us</NavLink></li>
        </ul>
    </nav>
  )
}
