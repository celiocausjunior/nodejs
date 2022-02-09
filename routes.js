const fs = require('fs')
const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome!')
  }
  if (url === '/users') {
    res.write('<html>')
    res.write('<head><title>Users List</title><head>')
    res.write('<body><el><li>User One</li><li>User Two</li></el></body>')
    res.write('</html>')
    return res.end()
  }
}

module.exports = requestHandler
