const authConfig = require('../config/authConfig')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const logger = require("../logger/logger")

exports.signin = (req, res) => {
     //#swagger.tags= ['Auth']
    const token = jwt.sign({ id: 123 }
        , authConfig.secret, { expiresIn: 60 * 60 * 24, algorithm: 'HS256' })
        debugger
    logger.info(`request received ${token}`)
    res.send({
        accessToken: token,
        expiresIn: 60 * 60 * 24,
        userName: "Test"
    })
    res.status(200)
}