module.exports = app => {
    const router = require('express').Router();
    const cart = require('../controller/cartController');
    const jwtToken = require('../middleware/jwtAuth')
    router.get("/getCart", cart.showAll)
    router.post("/createCart", cart.create)
    router.delete("/deleteCartById/:id", cart.delete)
    router.delete("/deleteAllCart", cart.deleteAll)
    router.put("/updateCart/:id", cart.update)

    app.all('/api/carts/*',jwtToken.verifyToken)
    app.use("/api/carts", router)
}