const jwt = require('jsonwebtoken')
const config = require('../config/authConfig')
const logger = require('../logger/logger')

exports.verifyToken = (req, res, next) => {
    console.log("Verifying token")
    const token = req.header['x-access-token'];
    if (!token) {
        logger.log("error","No token provided!")
        return res.status(403).send({
            message: "No token provided!"
        })
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.userId = decoded.id
        next()
    })
}
