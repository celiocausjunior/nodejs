const fs = require('fs')
const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  else if (url === '/users') {
    res.write('<html>')
    res.write('<head><title>Users List</title><head>')
    res.write('<body><el><li>User One</li><li>User Two</li></el></body>')
    res.write('</html>')
    return res.end()
  }else if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); 
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
}

module.exports = requestHandler
