const app = require('express')()
const {readFile} = require('fs/promises')
const path = require('path')

app.get('/api/crash', async (req, res) => {
    const text = await readFile(path.resolve('data/crash.json'), 'utf8')
    const json = JSON.parse(text)
    res.status(200).json({ status: 'All Good', count: json.data.length })
})

module.exports = app