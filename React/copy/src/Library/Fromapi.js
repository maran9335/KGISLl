import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './form.css';

function Fromapi() {
  
  let passCompenet  =useNavigate()
    const [formdata, setformdata] = useState({
        name: "",
        price: "",
        quantity: "",
        image: "",
        features: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setformdata(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://65a8f935219bfa3718681011.mockapi.io/lib', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        .then(response => {
            if (response.ok) {
                alert("Product is added");
            } else {
                alert("Product not added");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <div className='formapi'>
            <div className='container'>
           <h1 className='text-center'>Books details</h1>
           <div className='row'>
            <Form onSubmit={handleSubmit} className='formbox1 col-lg-5'>
                <Form.Group className="mb-3" controlId="ProductsName">
                    <Form.Label>Book name</Form.Label>
                    <Form.Control type="text" placeholder="name" value={formdata.name} name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsPrice">
                    <Form.Label>Price of Book</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={formdata.price} name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductsQuantity">
                    <Form.Label>Quantity of Book</Form.Label>
                    <Form.Control type="text" placeholder="Quantity" value={formdata.quantity} name="quantity" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Productsimage">
                    <Form.Label>Image of Book</Form.Label>
                    <Form.Control type="text" placeholder="Image" value={formdata.image} name="image" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ProductDescription">
                    <Form.Label>Book Features</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description" value={formdata.features} name="features" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type={"submit"} className='mx-4'>Submit</Button>
                <Button variant="danger" type= {"button"} onClick={()=>{return passCompenet('./table')}}>View all details</Button>
            </Form>
            <div className='col-lg-5 '>
            <img src='https://thumbs.dreamstime.com/b/pile-books-white-background-32010505.jpg'
             style={{height:'400px', width:'300px', borderRadius:'20px',margin:'50px', marginLeft:'50px'}}/>
            </div>
        </div>
        </div>
        </div>



    );

}

export default Fromapi;
