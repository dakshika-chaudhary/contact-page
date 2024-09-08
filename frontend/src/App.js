import React from 'react';
import ContactForm from './components/ContactForm.js';

function App(){
  return(
    
   <div className='App p-4 bg-gradient-to-r from-gray-400 to-gray-800 '>
     <h1 className='flex items-center arial text-gray-200 justify-center text-5xl font-bold p-1'>Contact Us</h1>
     <ContactForm/>
   
    </div>
    
  );
}

export default App;