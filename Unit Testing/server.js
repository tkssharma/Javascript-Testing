'use restrict'

// @ts-check
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const filename = 'data/todolist.txt'

const app = express()
app.use(bodyParser.json())
console.log('Start our code of node.js')
app.get('/', function(req, res) {
    console.log('get /')
    const readFileCallbak = function(err, data) {
        if (err) {
            res.status(500).send('Error reading the file')
            return
        }
        res.status(200).send(data)
    } // readFileCallbak()
    fs.readFile(filename, 'utf8', readFileCallbak)
})
app.post('/', function(req, res) {
    console.log('post /')
    const readFileCallbak = function(err, data) {
        if (err) {
            res.status(500).send('Error reading the file')
            return
        }
        data += `\n${req.body.data}`
        fs.writeFile(filename, data, err => {
            if (err) {
                res.status(500).send('Error writing the file')
            }
        })
        res.status(201).send(data)
    } // readFileCallbak()
    fs.readFile(filename, 'utf8', readFileCallbak)
})

app.listen(3000)
console.log('Server is running http://localhost:3000')
