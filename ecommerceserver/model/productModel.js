const mongoose = require('mongoose');
module.exports = mongoose =>{
    const schema = mongoose.Schema({
        title:String,
        description: String,
        price: Number,
        model: String
    })


schema.method("toJSON", function(){
    const {__v,_id, ...object} = this.toObject()
    object.id= _id
    return object 
})

// initializing a model based on the schema created above
const products = mongoose.model("products", schema)
return products

}