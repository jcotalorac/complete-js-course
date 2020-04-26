const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const laptopData = JSON.parse(json);

const server = http.createServer((request, response) => {

    const pathName = url.parse(request.url, true).pathname;
    const id = url.parse(request.url, true).query.id;
    console.log(pathName);

    if(pathName === '/products' || pathName === '/') {
        response.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
            
            fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (err, card) => {                

                const cardsOutput = laptopData.map(laptop => 
                    replaceTemplate(card, laptop)
                ).join('');
                
                response.end(data.replace(/{%CARDS%}/g, cardsOutput));
            });
        });
    } else if(pathName === '/laptop' && id < laptopData.length) {
        response.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            
            response.end(replaceTemplate(data, laptop));
        });
    } else if((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            response.writeHead(200, { 'Content-type': 'image/jpg'});
            response.end(data);
        });
    } else {
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end('URL was not found on the server!');
    }
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for request now');
});

function replaceTemplate(originalHtml, laptop){
    let output = originalHtml.replace(/{%PRODUCTNAME%}/g, laptop.productName).replace(/{%IMAGE%}/g, laptop.image).replace(/{%PRICE%}/g, laptop.price).replace(/{%SCREEN%}/g, laptop.screen).replace(/{%CPU%}/g, laptop.cpu).replace(/{%STORAGE%}/g, laptop.storage).replace(/{%RAM%}/g, laptop.ram).replace(/{%DESCRIPTION%}/g, laptop.description).replace(/{%ID%}/g, laptop.id);
    return output;
};