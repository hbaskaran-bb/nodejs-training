const dbconfig = require('../config/dbConfig')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbconfig.localhostUrl
db.product = require('./productModel')(mongoose)
db.cart = require('./cartModel')(mongoose)

module.exports = db