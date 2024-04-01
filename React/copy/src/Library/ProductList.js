import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'; 
import './productlist.css';
import Footer from './footer';
import Carousell from './Carousel';
import Scroll from './Scroll';
function ProductList() {
   const [product, setProduct] = useState([]);

   useEffect(() => {
      axios.get('https://65a8f935219bfa3718681011.mockapi.io/lib')
         .then((response) => {
            setProduct(response.data);
         })
         .catch((error) => {
            console.log('Error:', error);
         });
   }, []); 

   return (
      <div className='all'>
      <Scroll/>
      <div className='mt-5'><Carousell/></div>
      <div className="container mt-5">
         
         
         <h1 className='text-center'style={{textDecoration:'underLine',color:'white'}}>Books List</h1>
         <div className="row ">
            {product.map((product) => (
               <div className='col-md-4 mb-3' key={product.id}>
                  <div className='card h-100'>
                     <img src={product.image} className='card-img-top' alt={product.name} style={{ height: '200px' }} />
                     <div className='card-body '>
                        <h5 className='card-title'> Name: {product.name}</h5>
                        <p className='card-text'>Price: {product.price}</p>
                        <p className='card-text'>Quantity: {product.quantity}</p>
            
                        
                        <Link to={`/${product.id}`} className="btn btn-primary"> <span>viewmore<ion-icon name="arrow-forward-outline"></ion-icon></span> </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
      <Footer/>
      </div>
   );
}

export default ProductList;
