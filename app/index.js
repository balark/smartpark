/*const express = require ('express')
const app = express()
const port = 3000
app.get('/')
*/
var fs = require ('fs');
var file = 'data.txt';
console.log('code run');
fs.readFile('./app/data.txt','utf8',function(error,data)
                          {
                            console.log(data);
                          }

            );
