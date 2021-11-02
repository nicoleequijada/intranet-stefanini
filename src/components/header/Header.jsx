import React from "react"
import { Link } from "react-router-dom";



function Header () {
    return(
    <div className="header-container">
        <div className="logo-container">
                <img className="logo-stefanini" src="https://i.postimg.cc/mZ3wNtyp/stefanini-png.png" alt="stefanini-png"/>
        </div>
               
        <div className="login-btn-container">
        <Link to="/Admin"><img className="user-admin" src="https://i.postimg.cc/2yx7zK5N/user.png" alt="user"/></Link>
        </div>    
    </div>
           
    )
}
export default Header