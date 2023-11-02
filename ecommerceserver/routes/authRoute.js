const authController = require('../controller/authController')

module.exports = app =>{
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "Origin", "x-access-token","Content-Type", "Accept");
        next();
    })
    app.post('/api/auth/signin', authController.signin)
}