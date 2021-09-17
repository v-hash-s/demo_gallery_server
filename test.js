const fs = require('fs')

let data = fs.readFile([test1.html, test2.html], 'utf8', (err, data) => {
    if(err){
        console.log(err)
    } console.log(data)
});
