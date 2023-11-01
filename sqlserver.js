var Connection = require('tedious').Connection;  
    var config = {  
        server: 'devsql21.nti.notification.com',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'ntiuser', //update me
                password: 'ntiuser',  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: false,
            database: 'WebServices',  //update me
            port: 2003 // SQL Server instance name
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected"); 
        executeStatement() 
        if(err){
            console.log(err.message, err.stack);
        }
    });
    connection.connect();

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        var request = new Request("SELECT TOP 1 * from NTI.dbo.Institutions", function(err) {  
            console.log("inside execute statement");
        if (err) {  
            console.log(err);}  
        });  
        var json = {}; 
        var result = "";  
        request.on('row', function(columns) { 
            console.log("inside request.on function call"); 
            columns.forEach(function(column) {  
              if (column === null) {  
                console.log('NULL');  
              } else {  
                result += column.metadata.colName
                result+= column.value + " ";  

                debugger;
            json[column.metadata.colName] = column.value;
              }  
            });  
            console.log(json);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
    }  