const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())

app.post("/api/games", (req, res) => {
    res.send({
        username: req.body.user
    })
})

app.listen(process.env.PORT || 8000)