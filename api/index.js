const express = require('express')
const {readFile} = require('fs/promises')
const path = require('path')

const app = express()

app.get('/api/crash', async (req, res) => {
    const text = await readFile(path.resolve('data/crash.json'), 'utf8')
    const json = JSON.parse(text)
    res.status(200).json({ status: 'All Good', count: json.data.length })
})
app.post('/api/crash', async (req, res) => {
    const text = req.body
    const json = JSON.parse(text)
    res.status(200).json({ status: 'All Good', count: json.data.length })
})

module.exports = app