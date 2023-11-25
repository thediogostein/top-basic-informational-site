const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/contact-me.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/pages/404.html')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})