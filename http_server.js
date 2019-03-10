const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const count = 1;
const server = http.createServer((req, res) => {
  var body = '';
  req.on('data', function(data) {
    body += data
    console.log(body);
  })
  req.on('end', function() {
    //console.log('Body: ' + body);
  })

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Response from server at : ' + new Date());
 console.log("Req received :" + new Date());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Started node `);
});
