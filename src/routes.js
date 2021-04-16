const express = require('express')
const routes = express.Router()


routes.get('/', (req, res) => {
    res.render(__dirname + '/views/index', { url: '/' })
})
routes.get('/:id', (req, res) => {
    const id = req.params.id

    res.render(__dirname + '/views/index', { url: id })
})

module.exports = routes