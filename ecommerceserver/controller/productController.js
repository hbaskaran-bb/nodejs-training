const models = require('../model')
const products = models.product

exports.showAll = (req,res) =>{
    products.find({})
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

exports.create= (req,res) =>{
    debugger;
    if(!req.body.title){
        return res.send(403).body({message : 'Please enter a title'}) 
    }

    const product = new products({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        model: req.body.model
    })
    debugger;
    product.save(product)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Error creating the product'
        })
    })
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await products.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!updatedProduct) {
            return res.status(404).send({
                message: `Cannot update product with id ${id}. Maybe product was not found`
            });
        }

        return res.send(updatedProduct);
    } catch (err) {
        return res.status(500).send({
            message: `Error updating product with id ${id}`,
            stackTrace: err.message
        });
    }
}

exports.delete = async(req,res)=>{
    try {
        const id = req.params.id;
        const deletedProduct = await products.findByIdAndRemove(id);

        if(!deletedProduct){
            return res.status(404).send({
                message: `Cannot delete product with id ${id}. Maybe product was not found`
            });
        }
    }
    catch(err){
        return res.status(500).send({
            message: `Could not delete product with id ${id}`,
            stackTrace: err.message
        });
    }
}

exports.deleteAll  = async(req,res)=>{
    try{
        const deletedProduct = await products.deleteMany();
        if(!deletedProduct){
            return res.status(404).send({
                message: 'Cannot delete all the products'
            });
        }
    }
    catch(err){
        return res.status(500).send({
            message: 'Could not delete all the products',
            stackTrace: err.message
        });
    }
}