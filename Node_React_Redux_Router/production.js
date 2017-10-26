const express = require('express')
const path = require('path')
const app = express()

const ClientStatsPath = path.join(__dirname, './static/stats.json')

const ServerRendererPath = path.join(__dirname, './static/server.js')
const ServerRenderer = require(ServerRendererPath).default

const Stats = require(ClientStatsPath)

app.use('/static', express.static(path.join(__dirname, './static')))
app.use(ServerRenderer(Stats))

console.log('The server its run in port 3001');
app.listen(3001)
