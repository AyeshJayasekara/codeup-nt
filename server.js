const http = require('http');

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('HELLO WORLD\n');
    }else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<!DOCTYPE html> <html><head><title>About CodeUp</title></head><body>This is Code Up NT</body></html>');
    }
}).listen(8080);

console.log('Server is running at http://localhost:8080');