import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


function AdminUpdateProduct() {
    let [category,setCategory] = useState("");
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [rating,setRating] = useState("");
    let [description,setDescription] = useState("")

    let data = {category,name,price,image,rating,description}
    function updateItem(e){
        e.preventDefault();
        axios.put(`http://localhost:2000/Product/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            toast.success("Item updated successfully")            
        })
        .catch((err)=>{
            console.log(err);
            toast.err("Invalid Item")
            
        })
    }

    let param = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:2000/Product/${param.id}`)
        .then((res)=>{
            console.log(res.data);        
            setName(res.data.name)
            setPrice(res.data.price)
            setImage(res.data.image)
            setRating(res.data.rating)
            setDescription(res.data.description)
            setCategory(res.data.category)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <div className="updateproducts">
            <form onSubmit={updateItem} action="">
                <fieldset>
                    <label htmlFor="">Category</label>
                    <select required value={category} onChange={(e) => {setCategory(e.target.value)}}>
                        <option>Dress Materials</option>
                        <option>Mobile</option>
                        <option>Mobile Assosories</option>                        
                        <option>Electronics</option>                        
                        <option>Groceries</option>                        
                    </select>
                    <label htmlFor="">Product Name</label>
                    <input required type="text" placeholder="Enter the Product" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="">Product Price</label>
                    <input required type="text" placeholder="Enter the price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <label htmlFor="">Description</label>
                    <textarea required rows="2" cols="30" placeholder="Enter the details" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label htmlFor="">Thumbnail</label>
                    <input required type="text" placeholder="Enter the image address" value={image} onChange={(e) => setImage(e.target.value)} />
                    <label htmlFor="">Ratings</label>
                    <input required type="Number" placeholder="Enter the ratings" value={rating} onChange={(e) => setRating(e.target.value)}/>
                    <button className="btn btn-success updatebtn" >Update</button>
                </fieldset>
            </form>
        </div>
    )
}
export default AdminUpdateProduct