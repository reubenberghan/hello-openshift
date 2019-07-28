const http = require('http')

const server = http.createServer((req, res) => {
  res.end('hello openshift')
})

server.listen(3000, () => console.log('Server up and running on port 3000!'))