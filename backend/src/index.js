const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const path = require('path')
const cors = require('cors')

const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')
env.config();

const port = process.env.PORT || 2000;
mongoose.connect(`mongodb://localhost:27017/home`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}).then(() => {
    console.log('database connected');
});

app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(express.json());

app.use('/api', userRoute)
app.use('/api', categoryRoute)
app.use('/api', productRoute)

env.config();

app.listen(port, () => {
    console.log(`running on port ${port}`);
  });