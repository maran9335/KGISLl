import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

function ProductView() {
    const { id } = useParams(); // Notice the parentheses after useParams
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`https://65a8f935219bfa3718681011.mockapi.io/lib/${id}`)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Product Details</h1>
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={product.image}
                        className="img-fluid"
                        alt={product.name}
                       style={{height:'350px',width:'300px',borderRadius:'20px' }} />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                    <Button variant="info" type="submit">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
