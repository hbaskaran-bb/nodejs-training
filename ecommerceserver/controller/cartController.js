const models = require('../model')
const carts = models.cart

exports.showAll = (req,res) =>{
    carts.find({})
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Error retrieving all products'
        })
        console.log(err)
    })
}

exports.create = (req, res) => {
    if (!req.body.title) {
        return res.send(403).body({ message: 'Please enter a title' })
    }
    const cart = new carts({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        totalPrice: req.body.price*req.body.quantity
    })

    carts.save(cart)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Error creating the cart'
            })
        })
}

exports.delete = async (req,res) =>{
    try{
        const id = req.params.id
        const deletedCart = await carts.findByIdAndDelete(id)

        if(!deletedCart){
            return res.status(404).send({
                message: `Cannot delete cart with id ${id}. Maybe cart was not found`
            })
        }
    }
    catch(err){
        return res.status(500).send({
            message: `Could not delete cart with id ${id}`,
            stackTrace: err.message
        })
    }
}

exports.deleteAll = async(req,res) =>{
    try{
        const deletedCart = await carts.deleteMany();

        if(!deletedCart){
            return res.status(404).send({
                message: 'Cannot delete all the carts'
            })
        }
    }
    catch(err){
        return res.status(500).send({
            message: 'Could not delete all the carts',
            stackTrace: err.message
        })
    }
}

exports.update = async(req,res) =>{
    try{
        const id = req.params.id
        const cart = new carts({
            title: req.body.title,
            description: req.body.description,
            quantity: req.body.quantity,
            totalPrice: req.body.quantity*req.body.price
        })
        const updatedCart = await carts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })

        if(!updatedCart){
            return res.status(404).send({
                message: `Cannot update cart with id ${id}. Maybe cart was not found`
            })
        }
    }
    catch(err){
        return res.status(500).send({
            message: `Error updating cart with id ${id}`,
            stackTrace: err.message
        })
    }
}