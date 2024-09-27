import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

  const [image,setImage] = useState(false)
  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    Scientific_name:"",
    desc:"",
    //parameters
    soil_moisture:"",
    soil_temperature:"",
    light_intensity:"",
  })

  const imageHandler = (e)=>{
    setImage(e.target.files[0])
  }
  const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }
  const Add_Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:3000/upload',{
      method:'POST',
      headers:{
        Accept: 'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responseData=data});

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:3000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          "Content-Type":'application/json',

        },
        body:JSON.stringify(product)
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("FAILED")
      })
    }
  }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Plant title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Scientific Name</p>
        <input value={productDetails.Scientific_name} onChange={changeHandler} type="text" name="Scientific_name" placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Plant Description</p>
        <input value={productDetails.desc} onChange={changeHandler} type="text" name="desc" placeholder="Type here" />
      </div>
      <div className="addproduct-itemfield">
        <p>Parameters</p>
        <div className="parameters">
        <p>soil-moisture:<input value={productDetails.soil_moisture} onChange={changeHandler} type="soil_temp" name='soil_moisture' placeholder='Type here'/></p>
        <p>soil-temperature:<input value={productDetails.soil_temperature} onChange={changeHandler} type="humidity" name='soil_temperature' placeholder='Type here'/></p>
        <p>light-intensity:<input value={productDetails.light_intensity} onChange={changeHandler} type="moisture" name='light_intensity' placeholder='Type here'/></p>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumbnail-img" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
      </div>
      <button onClick={()=>{Add_Product()}} className="addproduct-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
