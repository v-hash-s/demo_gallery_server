import { readFileSync } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';
 
const port = 5000;
const loginPage = readFileSync('/Users/user/Desktop/nodejs_gallery/frontend/index.html');
const loginJs = readFileSync('/Users/user/Desktop/nodejs_gallery/frontend/public/login.js')
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;

  try{
    if(url === '/login'){
      res.writeHead(200, {'content-type': 'text/html'})
      res.write(loginPage);
      res.end(console.log('loaded html'));
    }

    if(url === '/login.js'){
      res.writeHead(200, {'content-type': 'text/javascript'});
      res.write(loginJs);
      res.end(console.log('loaded js'));
    }
  
    if(url === '/gallery'){
  
    }
  } catch(err: any){
    throw new Error(err)
  }
  // const url = req.url;
  // if(url === '/login'){
  //   res.write(loginPage);
  //   res.end();
  // }

  // if(url === '/gallery'){

  // }

  
}).listen(port);
 
