"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const fs = require('fs');
let server = http.createServer((req, res) => {
    let path = '../frontend';
    switch (req.url) {
        case '/login':
            path += '/index.html';
            break;
        case '/gallery':
            path += '/public/gallery.html';
            break;
        default:
            console.log('nope');
            break;
    }
    console.log(req.url, req.method);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.write(data);
            res.end();
        }
    });
}).listen(3000, '127.0.0.1');
