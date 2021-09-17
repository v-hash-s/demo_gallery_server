import { IncomingMessage, ServerResponse } from "http";

const http = require('http');
const fs = require("fs");
const path = require("path");


interface UsersDB {
  [k: string]: string;
}

interface Token {
  [k: string]: string;
} 

const token: Token = {
  'token': 'token',
}

const users: UsersDB = {
  'asergeev@flo.team': 'jgF5tn4F',
  'vkotikov@flo.team': 'po3FGas8',
  'tpupkin@flo.team': 'tpupkin@flo.team',
}

const regex = /^\b([0-9A-Z])+\b$/gi;
class User {
    constructor(private email: string, private password: string) {
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

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
  let url = req.url;

  if (req.method == "OPTIONS")
    {
        console.log(req);
        //In case of an OPTIONS, we allow the access to the origin of the petition
        res.setHeader("Access-Control-Allow-Origin", "no-cors");
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, body");
        res.setHeader("Access-Control-Max-Age", "1728000");
        res.writeHead(200);
        res.end();
    }
  if (url === "/api/login") {
        let body = "";
        req.on("data", (data) => {
            body += data;
        });

        

        req.on("end", () => {
          
            let user_temp = JSON.parse(body);
            // let user = new User(user_temp.email, user_temp.password);
            if (user_temp.email in users && user_temp.password === users[user_temp.email]) {
              console.log(token);
              console.log(req.method);
              res.end();
            } 
        });
    
  }
  // else if (url === "/api/gallery") {
    
  // }
  // else if (url === "/static") {

  // }

  res.end();
}

const server = http.createServer(requestListener);
console.log("I'm started");
server.listen(8080);

