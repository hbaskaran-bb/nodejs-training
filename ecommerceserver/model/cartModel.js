//const mongoose = require('mongoose');
module.exports = mongoose =>{
    const schema = mongoose.Schema({
        productId:String,
        Quantity: Number,
        TotalPrice: Number
    })


schema.method("toJSON", function(){
    const {__v,_id, ...object} = this.toObject()
    object.id= _id
    return object 
})

// initializing a model based on the schema created above
const cart = mongoose.model("cart", schema)
return cart

}