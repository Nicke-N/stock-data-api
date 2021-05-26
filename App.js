const express = require('express')
const app = express()
const cors = require('cors')
bodyParser = require('body-parser')
const db = require('./Database/Db')
const reportRoute = require('./Routes/ReportRoute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/reports', reportRoute)

db.connect()

module.exports = app