"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverGallery_js_1 = require("./serverGallery.js");
const http = require('http');
const fs = require("fs");
const path = require("path");
const token = {
    'token': 'token',
};
const users = {
    'asergeev@flo.team': 'jgF5tn4F',
    'vkotikov@flo.team': 'po3FGas8',
    'tpupkin@flo.team': 'tpupkin@flo.team',
};
const regex = /^\b([0-9A-Z])+\b$/gi;
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.email = email;
        this.password = password;
    }
    isCorrectPassword() {
        if (this.password.match(regex))
            return true;
        else {
            alert("Invalid form of password");
            return false;
        }
    }
}
const requestListener = function (req, res) {
    let url = req.url;
    if (req.method == "OPTIONS") {
        //In case of an OPTIONS, we allow the access to the origin of the petition
        res.setHeader('Access-Control-Allow-Methods', "PUT,PATCH,DELETE,POST,GET");
        res.setHeader("Access-Control-Allow-Headers", "API-Key,Content-Type,If-Modified-Since,Cache-Control,Access-Control-Allow-Methods, Authorization");
        res.setHeader("Access-Control-Max-Age", "86400");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200);
        res.end();
    }
    if (req.method === "POST") {
        let body = "";
        req.on("data", (data) => {
            body += data.toString();
            console.log(body);
        });
        //res.end(JSON.stringify(token))
        req.on("end", () => {
            let user_temp = JSON.parse(body);
            // let user = new User(user_temp.email, user_temp.password);
            if (user_temp.email in users && user_temp.password === users[user_temp.email]) {
                console.log(JSON.stringify(token));
                console.log(req.method);
                //res.end('dddd')
                res.setHeader('Access-Control-Allow-Methods', "PUT,PATCH,DELETE,POST,GET");
                res.setHeader("Access-Control-Allow-Headers", "API-Key,Content-Type,If-Modified-Since,Cache-Control,Access-Control-Allow-Methods, Authorization");
                res.setHeader("Access-Control-Max-Age", "86400");
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.writeHead(200);
                res.end(JSON.stringify(token));
            }
        });
    }
    else if (req.method === "GET") {
        (0, serverGallery_js_1.sendGalleryObject)(url);
    }
    // else if (url === "/static") {
    // }
};
const server = http.createServer(requestListener);
console.log("I'm started");
server.listen(8080);
