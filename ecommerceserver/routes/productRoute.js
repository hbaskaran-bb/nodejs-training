module.exports = app => {
    const express = require('express')
    const router = require('express').Router();
    const products = require('../controller/productController');
    router.get("/", products.showAll)
    router.post("/", products.create)
    router.put("/:id", products.update)
    router.delete("/:id", products.delete)
    router.delete("/", products.deleteAll)
    // app.route("/api/products").get(products.showAll).post(products.create).put(products.update); // This uses the latest express.js router

    app.use("/api/products", router)
}