import React, { useRef } from 'react'
import TopNavigation from './TopNavigation'

function ContactUs() {
// Refs for name and email inputs
let nameInputRef=useRef();
let emailInputRef=useRef();
// Refs for validation messages
let nameResultRef=useRef();
let emailResultRef=useRef();
// Regular expressions for name and email validation
const nameRegex=/[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const emailRegex=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// Function to validate name input
let validateName=()=>{
let result =nameRegex.test(nameInputRef.current.value);
if(result==true){
    nameResultRef.current.innerHTML="";
}else{
    nameResultRef.current.innerHTML="Numbers and special characters are not allowed";
    nameResultRef.current.style.color = "red";
}
}
// Function to validate email input
let validateEmail=()=>{
    let result=emailRegex.test(emailInputRef.current.value);
    if(result==true){
        emailResultRef.current.innerHTML="";
    }else{
        emailResultRef.current.innerHTML="invalid";
        emailResultRef.current.style.color = "red";
    }
}

    return (
    <div>
        {/* Including the TopNavigation component */}
        <TopNavigation/>
        {/* Contact paragraph */}
        <div className='contactus-para'>
        <p>Have a question or feedback? We'd love to hear from you!</p>
        </div>
        {/* Contact form */}
        <form className='contactus-form'>
            <div className='contactus-heading'><h1>Contact us</h1></div>
            <div>
                <label className='contactus-form-label'>Name</label>
                <input ref={nameInputRef} onChange={()=>{validateName(nameInputRef,nameResultRef)}}></input>
                <span  ref={nameResultRef}></span>
            </div>
            <div>
                <label className='contactus-form-label'>Email</label>
                <input ref={emailInputRef} onChange={()=>{validateEmail(emailInputRef,emailResultRef)}}></input>
                <span ref={emailResultRef}></span>
            </div>
            <div>
                <label className='contactus-form-label'>Message</label>
                <textarea maxLength={500}></textarea>
            </div>
            <div className='contactus-submit-button'>
                {/* Submit button */}
            <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactUs