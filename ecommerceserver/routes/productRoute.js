module.exports = app => {
    const express = require('express')
    const router = require('express').Router();
    const products = require('../controller/productController');
    const jwt = require('../middleware/jwtAuth')
    router.get("/getProducts", products.showAll)
    router.post("/createProducts", products.create)
    router.put("/updateProducts/:id", products.update)
    router.delete("/deleteProductById/:id", products.delete)
    router.delete("/deleteAllProducts", products.deleteAll)
    // app.route("/api/products").get(products.showAll).post(products.create).put(products.update); // This uses the latest express.js router
        app.use((req,res,next)=>{
        res.header("Access-Control-Allow-Origin", "Origin", "x-access-token","Content-Type", "Accept");
        next();
    })
    app.all("/api/products/*",jwt.verifyToken)
    app.use("/api/products", router)
}