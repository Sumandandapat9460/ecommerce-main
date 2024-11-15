import React, { useEffect, useState } from "react";
import "../Style/Userlogin.css"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Userlogin() {
    let [username , setusername] = useState("");
    console.log(username);
    
    let [password , setpassword] = useState("");
    console.log(password);

    let navigate = useNavigate();

    let [user,setUser] = useState([]);
    useEffect(()=>{
        async function fetchUser() {
          let data = await fetch('http://localhost:2000/User')
          let res = await data.json();
          setUser(res)
        }
        fetchUser()
      },[]);
      console.log(user);
      
      function login() {
        let val = user.filter((x)=>{
            return x.email === username && x.password === password 
        })

        if(val.length > 0){
            alert("Login successful");
            navigate('/userhomepage')
        }
        else{
            alert("Login Failed");
        }

      }

    return(
        <div className="Userlogin">
            <form action="">
                <label htmlFor="">Username: </label>
                <input type="text" value={username} onChange={(e) => {setusername(e.target.value)}} placeholder="Enter the username" required/>
                <label htmlFor="">Password: </label>
                <input type="text" value={password} onChange={(e) => {setpassword(e.target.value)}} placeholder="Enter the password" required/>
                <button onClick={login}>Login</button>
                <span>Create new User <Link to='/usersignup'>Sign Up</Link></span>

            </form>
        </div>
    )
    
}

export default Userlogin;