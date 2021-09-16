
import { IncomingMessage, ServerResponse } from "http";
const http = require('http');
const fs = require('fs');

let server = http.createServer((req: IncomingMessage, res: ServerResponse) => {

  let path: string = '../frontend';
  switch(req.url){
    case '/login':
      path += '/index.html'
      break;
    case '/gallery':
      path += '/public/gallery.html'
      break;
    default: 
      console.log('nope')
      break;
  }

  console.log(req.url, req.method)
  res.writeHead(200, {'Content-Type': 'text/html'});
  

 
    fs.readFile(path, 
    (err: any, data: any) =>{
      if(err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  
}).listen(3000, '127.0.0.1')