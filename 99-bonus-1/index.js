const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const laptopData = JSON.parse(json);

const server = http.createServer((request, response) => {

    const pathName = url.parse(request.url, true).pathname;
    const id = url.parse(request.url, true).query.id;
    console.log(id);

    if(pathName === '/products' || pathName === '/') {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end('This is the products page!');
    } else if(pathName === '/laptop' && id < laptopData.length) {
        response.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}`/templates/template-laptopData.html, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            let output = data.replace(/{%PRODUCTNAME%}/g, laptop.productName).replace(/{%IMAGE%}/g, laptop.image).replace(/{%PRICE%}/g, laptop.price).replace(/{%SCREEN%}/g, laptop.screen).replace(/{%CPU%}/g, laptop.cpu).replace(/{%STORAGE%}/g, laptop.storage).replace(/{%RAM%}/g, laptop.ram).replace(/{%DESCRIPTION%}/g, laptop.description);
            response.end(output);
        });
    } else {
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end('URL was not found on the server!');
    }
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for request now');
});