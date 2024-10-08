const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const bodyParser = require('body-parser');

require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


//Routes
app.use('/api/contact', contactRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB database is connected'))
  .catch(err => console.log(`MongoDB database is not connected ${err}`));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT,() => console.log(`Server is connected and running on port ${PORT}`));
