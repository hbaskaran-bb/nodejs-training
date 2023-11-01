const http  = require('http');
const fileSystem = require('fs');
http.createServer(function(request,response){
    fileSystem.readFile('temp.txt', function(err,data){
        response.writeHead(200, {"Content-type": "text/html"});
        response.write(data);
        console.log(JSON.stringify(data.toString()));
        //console.log(data.toString()); // converts buffer to a string format as we read the data as a byte from the file
        return response.end();
    });
}).listen(5600);

