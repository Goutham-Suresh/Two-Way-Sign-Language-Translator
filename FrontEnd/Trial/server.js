const { response } = require("express");
var express = require("express");
const { request } = require("http");
var app = require('express')();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<style> body{background-color:#2d4d70} h1{color:#cbcfd4; font-family: Verdana }</style> <h1>Please Wait, Initializing Model!!</h1>");
    res.write("<style>  p{color:#cbcfd4; font-family: Verdana }</style> <p>.....This could take a few seconds.....</p>");    
    res.end('\n');
    trial();
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});

function trial()
{
    var spawn = require('child_process').spawn,
    ls    = spawn('cmd.exe', ['/c', 'trial.bat']);
    ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
    });
    ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
    });
    ls.on('exit', function (code) {
    console.log('child process exited with code ' + code);
    });
}