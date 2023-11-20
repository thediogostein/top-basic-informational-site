const fs = require('fs')
const http = require('http')

const HOSTNAME = 'localhost'
const PORT = 8080

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    let path = './pages'

    switch (req.url) {
        case '/':
            path = `${path}/index.html`
            res.statusCode = 200
            break
        case '/about':
            path = `${path}/about.html`
            res.statusCode = 200
            break;
        case '/contact-me':
            path = `${path}/contact-me.html`
            res.statusCode = 200
            break;
        default:
            path = `${path}/404.html`
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
})