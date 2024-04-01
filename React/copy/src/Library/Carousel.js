import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
  
export default function Carousell() { 
  return ( 
    <div style={{ display: 'block', width: '', padding: 30 }}> 
      
      <Carousel className='curr' > 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block w-100"
src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730="
            alt="Image One" style={{height:'350px'}}
          /> 
          <Carousel.Caption> 
            
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2022-06/Books%20and%20Library.jpeg?itok=LiWX2NZX"
            alt="Image Two"style={{height:'350px'}}
          /> 
          <Carousel.Caption> 
           
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
src="https://sc0.blr1.digitaloceanspaces.com/inline/921668-vqidnqcdcn-1556716452.jpg"
            alt="Image Two"style={{height:'350px'}}
          /> 
          <Carousel.Caption> 
           
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  ); 
}