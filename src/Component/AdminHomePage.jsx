import React from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'
import {Routes , Route} from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import AdminViewItems from './AdminViewItems'
import AdminAddProducts from './AdminAddProducts'
import AdminUpdateProduct from './AdminUpdateProducts'

export default function AdminHomePage() {
  return (
    <div className="AdminHomePage">
        <AdminNavbar/>
        <Footer/>
        <Routes>
          <Route path='/' element={<AdminDashboard/>}/>
          <Route path='/viewproducts' element={<AdminViewItems/>}/>
          <Route path='/addproducts' element={<AdminAddProducts/>}/>
          <Route path='/updateproducts/:id' element={<AdminUpdateProduct/>}/>
        </Routes>
    </div>
  )
}
