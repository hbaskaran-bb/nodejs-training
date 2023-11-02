const express = require('express')
const cors = require('cors')
const config = require('dotenv');
config.config();

const api = express(); // to access REST API
const logger = require('./logger/logger')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./swagger/swagger.json')
api.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
api.use(express.json())
require('./routes/productRoute')(api);
require('./routes/cartRoute')(api);
require('./routes/authRoute')(api);
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

api.use((err,req,res,next)=>{
    //logger.log("error",err.message)
    res.status(500).send(err.message)
})


// setting port and listening for requests
const PORT = process.env.PORT // Port number should be kept in the env file
api.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})