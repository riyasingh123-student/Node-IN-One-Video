const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3001; // change default to 3001

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  console.log(req.url);
   if(req.url == '/') {
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
  else if(req.url == '/cwh') {
    res.statusCode = 200;
    res.end('<h1> This is CodeWithRiya</h1><p> Hey this is the way to rock the world!</p>');
  }
   else if(req.url == '/about') {
    res.end('<h1> About CodeWithRiya</h1><p>Hey this is about CodeWithRiya</p>');
  }
   else {
    // removed invalid call: res.riya();
    res.statusCode = 404;
    res.end('<h1> Not Found</h1><p> Hey this page was not found on this server</p>');
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} in use — stop the other process or change the port.`);
    process.exit(1);
  }
  console.error(err);
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

