const winston = require('winston');
const awsLogger = require('aws-sdk')
const config = require('dotenv')



exports.putLogEvents = async(message) =>{
    try {
        awsLogger.config.update({
            region: 'us-west-2',
        })
        const cloudWatchLogger = new awsLogger.CloudWatchLogs()
      
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
        const params = {
            logGroupName: 'demo-log-group',
            logStreamName: 'demo-log-stream',
            logEvents: [
                {
                    message: message,
                    timestamp: new Date().getTime()
                }
            ]
        }
        await cloudWatchLogger.putLogEvents(params).promise()
            
    } catch (err) {
        //logger.log('error','Error sending log:', err)
        console.log(err)
    }
 }

//  module.exports = putLogEvents;