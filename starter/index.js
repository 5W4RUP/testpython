const hello = "hello world";
const fs = require('fs');
const http = require('http');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) =>{
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world'
      });
    res.end('<h1>Page not found!</h1>');
});

server.listen(8000, '127.0.0.1' , () => {
    console.log('Listening to requests on port 8000');
});

