import { useState } from "react"
import "../Style/AdminAddProducts.css"
import axios from "axios";
import { toast } from "react-toastify";


function AdminAddProduct(){
    let [category,setCategory] = useState("");
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [rating,setRating] = useState("");
    let [description,setDescription] = useState("")

    let data = {category,rating,description,name,price,image}

    function addProduct(e){
        e.preventDefault();
        axios.post('http://localhost:2000/Product',data)
        .then((res)=>{
            console.log(res);
            toast.success("Data Added Successfully")
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid Data")
        })
    }
    return(
        <div className="addproduct">
            <form onSubmit={addProduct} action="">
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
                    <button className="btn btn-danger">Add Product</button>
                </fieldset>
            </form>
        </div>
    )
}
export default AdminAddProduct