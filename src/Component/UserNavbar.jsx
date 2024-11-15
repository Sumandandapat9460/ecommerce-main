import React from 'react'
import { Link } from 'react-router-dom'
import UserAccount from "./UserDropdown"
import "../Style/UserNavbar.css"


export default function UserNavbar() {
  return (
    <div className='UserNavbar'>
        <div className="logo">
            <h1>E<span>kart</span></h1> 
        </div>  
        <div className="links">
            <Link to='/userhomepage/viewproducts'>ShoppingList</Link>
        </div>   
        <div className="account">
            <UserAccount/>
        </div>
    </div>
  )
}
