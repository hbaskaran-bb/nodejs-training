module.exports = app => {
    const router = require('express').Router();
    const cart = require('../controller/cartController');
    router.get("/", cart.showAll)
    router.post("/", cart.create)
    router.delete("/:id", cart.delete)
    router.deleteAll("/", cart.deleteAll)
    router.update("/:id", cart.update)
    app.use("/api/carts", router)
}