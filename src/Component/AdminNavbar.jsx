import React from 'react'
import { Link } from 'react-router-dom'
import AdminAccount from "./AdminDropdown"
import "../Style/AdminNavbar.css"



export default function AdminNavbar() {
  return (
    <div className='AdminNavbar'>
        <div className="logo">
            <h1>E<span>kart</span></h1> 
        </div>  
        <div className="links">
            <Link to='/adminhomepage/addproducts'>Add Items</Link>
            <Link to='/adminhomepage/viewproducts'>ShoppingList</Link>
        </div>   
        <div className="account">
            <AdminAccount/>
        </div>
    </div>
  )
}
