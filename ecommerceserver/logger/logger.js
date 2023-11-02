const winston = require('winston');
const awsLogger = require('aws-sdk')
const config = require('dotenv')
 const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
          (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
    transports :[
        new winston.transports.File({ filename: "logs/app.log" })
    ]
 })

 const cloudWatchLogger = new awsLogger.CloudWatchLogs()

 const putLogEvents = async(message) =>{
    try {
        const params = {

        }
    } catch (err) {
        
    }
 }

 module.exports = logger;