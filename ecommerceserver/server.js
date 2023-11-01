const express = require('express')
const cors = require('cors')
const config = require('dotenv');
config.config();

const api = express(); // to access REST API
api.use(express.json())
require('./routes/productRoute')(api);
require('./routes/cartRoute')(api);

const db = require('./model')
db.mongoose
.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB")
})
.catch(err => {
    console.log(err)
    process.exit();
})

// api.get("/", (req,res)=>{
//     res.json({message: "New Express API"})
// })

// api.get("/api/products", (req,res)=>{
//     res.json({message: "New Express API mapped to the products API"})
// }) // This is for routing to navigate to the products api


// setting port and listening for requests
const PORT = process.env.PORT // Port number should be kept in the env file
api.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})