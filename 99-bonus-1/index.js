const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const laptopData = JSON.parse(json);

const server = http.createServer((request, response) => {

    const query = url.parse(request.url, true);
    const pathName = query.pathname;
    console.log(pathName);

    response.writeHead(404, {'Content-type': 'text/html'});
    response.end('This is the response!');
    console.log('Someone did access the server!');
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for request now');
});