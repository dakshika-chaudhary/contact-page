import React,{useState} from 'react';
import axios from 'axios';

const ContactForm=()=>{
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        message:'',
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
          const response=await axios.post('http://localhost:5000/api/contact',formData);
            alert(response.data.message);
        }
        catch(error){
       alert("failed to send message");
        }

    };

    return (
        

        <form className=" ml-80 mt-2 mb-2 p-6  w-1/2 bg-gradient-to-r from-gray-100 to-gray-600 shadow-white rounded-2xl " onSubmit={handleSubmit}>
            
           <div className='italic flex items-center font-semibold justify-center text-2xl  p-6	'>
            <label >Name:</label>
            <input  className='h-10 w-3/4 ml-2 bg-gradient-to-r rounded-md from-gray-200 to-gray-500 font-normal border-transparent text-center italic border-spacing-1 text-black border-black bg-gray-400'
            type="text" 
            name="name"
             value={formData.name} 
            onChange={handleChange} 
            required></input>
           </div>

           <div className='italic flex items-center font-semibold justify-center text-2xl p-6 box'>
            <label>Email:</label>
            <input className='h-10 w-3/4 ml-2 font-normal rounded-md text-center italic text-black border-transparent bg-gradient-to-r from-gray-200 to-gray-500'
            type="email" 
            name="email"
            placeholder='@gmail.com'
             value={formData.email} 
            onChange={handleChange} 
            required></input>
           </div>

           <div className='italic p-6  flex items-top justify-center font-semibold text-2xl'>
            <label className=''>Message:</label>
            <textarea className='h-40  w-3/4 ml-2 font-normal rounded-md bg-gradient-to-r from-gray-200 to-gray-500 text-center italic text-black border-transparent'
            name="message"
             value={formData.messsage} 
            onChange={handleChange} 
            required></textarea>
           </div>

           <button className="flex items-center justify-center  bg-black text-gray-300 rounded-lg w-1/4 h-10 mb-3 ml-6  font-extrabold text-xl shadow-white hover:bg-black hover:rounded-3xl hover:text-white " 
           type="submit" 
           onclick="handleSubmit">
            Send</button>
        </form>
    );
};

export default ContactForm;