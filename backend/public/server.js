"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const http_1 = require("http");
const port = 5000;
const loginPage = (0, fs_1.readFileSync)('/Users/user/Desktop/nodejs_gallery/frontend/index.html');
const loginJs = (0, fs_1.readFileSync)('/Users/user/Desktop/nodejs_gallery/frontend/public/login.js');
const server = (0, http_1.createServer)((req, res) => {
    const url = req.url;
    try {
        if (url === '/login') {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(loginPage);
            res.end(console.log('loaded html'));
        }
        if (url === '/login.js') {
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.write(loginJs);
            res.end(console.log('loaded js'));
        }
        if (url === '/gallery') {
        }
    }
    catch (err) {
        throw new Error(err);
    }
    // const url = req.url;
    // if(url === '/login'){
    //   res.write(loginPage);
    //   res.end();
    // }
    // if(url === '/gallery'){
    // }
}).listen(port);
console.log(loginJs);
