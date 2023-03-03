const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

    let basePath = ''

    switch (req.url) {
        case '/': 
            basePath = createPath('index');
            res.statusCode = 200 
            break;
        case '/contacts': 
            basePath = createPath('contacts')
            res.statusCode = 200 
            break;
        default: 
            basePath = createPath('error')
            res.statusCode = 404
            break
    }
    console.log(basePath)
        fs.readFile(basePath, (err, data) => {
            if (err) {
                console.log(err)
                res.statusCode = 500 
                res.end()
            } else {
                res.write(data)
                res.end()
            }
        })

})

server.listen(3000, 'localhost', (err) => {
    err ? console.log(err) : console.log('Server is listening on 3000')
})
