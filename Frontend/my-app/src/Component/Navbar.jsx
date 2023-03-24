import React from "react"
import {Link} from "react-router-dom"
import "../CSS/Navbar.css"

export const Navbar=()=>{
    return <div className="Nav">
          <Link style={{"color":"white", "textDecoration": "none","backgroundColor": "black"}} to="/signup">Signup</Link>
          <Link style={{"color":"white", "textDecoration": "none","backgroundColor": "black"}} to="/">Login</Link>
       
    </div>
}