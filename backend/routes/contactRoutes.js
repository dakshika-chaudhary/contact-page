const express=require('express');
const Contact=require('../models/contactModel');

const router = express.Router();

// Route to handle contact form submissions
router.post('/',async(req,res)=>{
    const{ name , email , message } = req.body;

try{
    const newContact=new Contact({name,email,message});
    await newContact.save();
    res.status(201).json({message:"Message is sent successfully!"});


}
catch{
    res.status(500).json({error:"Something went wrong!"});
}
});

module.exports = router;