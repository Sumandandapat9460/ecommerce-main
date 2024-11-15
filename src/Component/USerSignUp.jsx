import React, { useState } from 'react'
import '../Style/UserSignUp.css'
import axios from 'axios'
const UserSignUp = () => {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [name,setname] = useState("")
    let [phone,setPhone] = useState("")

   let data =  {name,password,phone,email}

    function addUser(){
        axios.post('http://localhost:2000/User',data)
        .then((res)=>{
            console.log(res);
            alert("User Creates Sucessfull")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Data ")            
        })
    }
  return (
    <div className='UserSignUp'>
        <div className="bg_img"></div>
        <form onSubmit={addUser} action="">
            <label htmlFor="">Name :</label>
            <input type="text" value={name} 
            onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Name' />
            <label htmlFor="">Email :</label>
            <input type="email" value={email} 
            onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter the Email' />
            <label htmlFor="">Password :</label>
            <input type="text" value={password} 
            onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the Password' />
            <label htmlFor="">Phone :</label>
            <input pattern='[0-9]{10}' value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder='Enter the Phone' />
            <button  className='btn btn-primary'>SignUp</button>
        </form>
    </div>
  )



}
export default UserSignUp;