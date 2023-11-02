const options = {
    openapi: 'OpenAPI 3',
    language: 'en-US',
    disableLogs: false,
    autoHeaders: false,
    autoQuery: false,
    autoBody: false
}

//const config = require('../routes')
const swaggerAutoGen = require('swagger-autogen')

const doc = {
    info: {
        version: '1.0.0',
        title: 'Ecommerce API',
        description: 'An API for an Ecommerce application'
    },
    //host: config.host,
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Products',
            description: 'Endpoints for Products'
        },
        {
            name: 'Carts',
            description: 'Endpoints for Carts'
        },
        {
            name: 'Auth',
            description: 'Endpoints for Auth'
        }
    ]
}
const outputFile = './swagger.json'
const routes = ['../routes/productRoute.js','../routes/cartRoute.js','../routes/authRoute.js'];
const endpointsFile = ['../routes/*.js','../controller/*.js']
swaggerAutoGen(outputFile, routes,doc, options).then(()=>{
    require('../server.js')
})