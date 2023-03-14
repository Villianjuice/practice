const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {

})

server.listen(PORT, () => {
    console.log(`Servre start on ${PORT}`)
} )