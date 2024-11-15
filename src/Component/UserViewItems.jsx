import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../Style/UserViewItems.css"

export default function UserViewItems() {

  let [product,setProduct] = useState([])

  useEffect(()=>{
    function fetchdata() {
      axios.get('http://localhost:2000/Product')
      .then((res)=>{
        console.log(res.data);
        setProduct(res.data)
      })
      .catch((err)=>{
        console.log(err);
        
      })    
    }
    fetchdata();
  },[])

  console.log(product);
  return (
    <div className='UserViewItems'>
      
        {product.map((product)=>{
          return(
            <div className="sub_Item">
              <h1>{product.name}</h1>
              <h3>{product.category}</h3>
              <img src={product.image} alt="" />
              <h1>{product.price}</h1>
              <p>{product.description}</p>
            </div>
          )
        })}

      
    </div>
  )
}
