const fly = require('fly');
const path = require('path');
const http = require('http');
const fs = require('fs');

console.log(fs)

http.createServer(()=>{
    console.log('server')
},8080)


