import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <NavLink className="linkList" activeClassName="linkListActive" exact to="/discover">
        Discover
      </NavLink>
      <NavLink className="linkList" activeClassName="linkListActive" exact to="/about">
        About
      </NavLink>
      <NavLink className="linkList" activeClassName="linkListActive" exact to="/">
        Home
      </NavLink>
    </div>
  )
}
