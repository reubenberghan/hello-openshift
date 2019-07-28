const http = require('http')

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.end('hello openshift')
})

server.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`))