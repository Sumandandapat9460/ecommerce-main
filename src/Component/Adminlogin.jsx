import React, { useEffect, useState } from "react";
import "../Style/Adminlogin.css"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Adminlogin() {
    let [username , setusername] = useState("");
    console.log(username);
    
    let [password , setpassword] = useState("");
    console.log(password);

    let navigate = useNavigate();

    let [admin,setAdmin] = useState([]);
    useEffect(()=>{
        async function fetchAdmin() {
          let data = await fetch('http://localhost:2000/Admin')
          let res = await data.json();
          setAdmin(res)
        }
        fetchAdmin()
      },[]);
      console.log(admin);
      
      function login() {
        let val = admin.filter((x)=>{
            return x.email === username && x.password === password 
        })

        if(val.length > 0){
            alert("Login successful");
            navigate('/adminhomepage')
        }
        else{
            alert("Login Failed");
        }

      }

    return(
        <div className="Adminlogin">
            <form action="">
                <label htmlFor="">Username: </label>
                <input type="text" value={username} onChange={(e) => {setusername(e.target.value)}} placeholder="Enter the username" required/>
                <label htmlFor="">Password: </label>
                <input type="text" value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder="Enter the password" required/>
                <button onClick={login}>Login</button>
                <span>Create new Admin <Link to='/adminsignup'>Sign Up</Link></span>

            </form>
        </div>
    )
    
}

export default Adminlogin;