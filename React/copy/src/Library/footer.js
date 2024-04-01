import React from 'react'
import './footer.css';
import { MdAddIcCall} from "react-icons/md";
import {IoIosMail}from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div class="container-fluid">
   <div class="row">
    <h2>Contact with Us:</h2>
    <hr/>
    <div class="col-sm-4">
     <h5>Cudtomer Care:</h5>
      <ul>
        <li>Returns & Exchange </li>
        <li>Cancelling Or changing</li>
        <li>Shiping & Handling</li>
        <li>FAQs</li>
      </ul>
    </div>
    <div class="col-sm-4">
      <ul>
        <li> <h4>  </h4></li>
        <li> <span className='font1'><MdAddIcCall/></span> : +91987654321</li>
        <li><span className='font1'><IoIosMail/></span> : Library123@Gmail.com</li>
      </ul>
    </div>
    <div class="col-sm-4">
      <ul>
        <li><span className='icon'><FaXTwitter/> </span> : Librarytwitter.com  </li>
        <li>  <span className='icon'> <FaInstagram/> </span> : Libraryinstagram.com </li>
        <li>  <span className='icon'> <FaFacebookF/></span> : Libraryfacebook.com </li>
      </ul>
    </div>
    </div>
    <p className='text-center '><span><FaRegCopyright/> 2024 All rights reserved</span></p>
    <hr/>
   </div>
    </div>
  )
}

export default Footer
