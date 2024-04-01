import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './update.css'
function Update() {
    const { id } = useParams(); // Notice the parentheses after useParams

    const [formdata, setformdata] = useState({
        name: "",
        price: "",
        quantity : "",
        image: "",
        features: ""
    });

    useEffect(() => {
        axios.get(`https://65a8f935219bfa3718681011.mockapi.io/lib/${id}`)
            .then((response) => {
                console.log(response.data);
                setformdata(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);
function handleChange(e){
    const { name, value } = e.target;
    setformdata(prevData => ({
        ...prevData,
        [name]: value
    }));
}

function handleSubmit(e){
   
        e.preventDefault();

     axios.put(`https://65a8f935219bfa3718681011.mockapi.io/lib/${id}`,formdata)
     .then(()=>{
        alert("product is updates")

     })
   .catch((error)=>{
    console.error('Error updating', error)
   })
}


  return (
    <div>
    <div>
    update page
    <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="ProductsName">
            <Form.Label>Name of book</Form.Label>
            <Form.Control type="text" placeholder="name" value={formdata.name} name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ProductsPrice">
            <Form.Label>Price of book</Form.Label>
            <Form.Control type="text" placeholder="Price" value={formdata.price} name="price" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ProductsQuantity">
            <Form.Label>Quantity of book</Form.Label>
            <Form.Control type="text" placeholder="Quantity" value={formdata.quantity} name="quantity" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Productsimage">
            <Form.Label>Image of book</Form.Label>
            <Form.Control type="text" placeholder="Image link address" value={formdata.image} name="image" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ProductDescription">
            <Form.Label>book Features</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description" value={formdata.features} name="features" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type={"submit"} >Submit</Button>
        
    </Form>
</div>
    </div>
  )
}

export default Update
