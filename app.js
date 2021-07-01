const http = require('http');
const {writeFile} = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home Page');
    } else if(req.url === '/about'){
        res.end('About')
    } else {
        res.end(`
       <h1>You fucked up fam</h1>
       <p>There's no page like this</p>
       <a href="/">back to the kitchen</a> 
        `)
    }
});

server.listen(5001)

