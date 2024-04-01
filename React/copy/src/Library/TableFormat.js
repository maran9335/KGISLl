import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import  {useNavigate } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
import { FaTrashAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
function TableFormat() {
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

function handleDelete(id){
    axios.delete(`https://65a8f935219bfa3718681011.mockapi.io/lib/${id}`)
    .then((response) => {
        if(response.status===200){
            alert("Data is Delete")
        }
        else{
            console.error("Error:",response.statusText)
        }
     })

     .catch((error) => {
        console.log('Error:', error);
     }); 

}

 const update = useNavigate()
function handleUpdate(id){
update(`${id}`)
}

   return (
      <div>
      <h1 className='text-center'> Full details </h1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Book Name</th>
          <th>Book Price</th>
          <th>Book Image</th>
          <th>Book Quantity</th>
          <th>Descriptions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {product.map((product,index)=>(
      
       <tr key={product.id}>
        <td>{index+1} </td>
        <td>{product.name} </td>
        <td>{product.quantity} </td>
        <td>{product.image}</td>
        <td>{product.price}</td>
        <td>{product.description}</td>
         <td>
         <Button className='btn btn-warning mb-1 mx-3'  onClick={()=>handleUpdate(product.id)}><FaDownload/> </Button>
         <Button className='btn btn-danger mb-1 mx-3 'onClick={()=>handleDelete(product.id)}><FaTrashAlt /></Button>
         </td>
        </tr>

   ))}
      </tbody>
    </Table>
    </div>
  );
}


export default TableFormat;
