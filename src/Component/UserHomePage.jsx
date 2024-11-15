import React from 'react'
import UserNavbar from './UserNavbar'
import UserFooter from './UserFooter'
import UserViewItems from './UserViewItems'
import {Routes , Route} from 'react-router-dom'

export default function UserHomePage() {
  return (
    <div className='UserHomePage'>
        <UserNavbar/>
        <UserFooter/>

        <Routes>
          <Route path='/viewproducts' element={<UserViewItems/>}/>
        </Routes>
      
    </div>
  )
}
