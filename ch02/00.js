const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello nhe');
});

server.listen(port, () => console.log(`Server started on port ${port}; press ctrl-c`));
