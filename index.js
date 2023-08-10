require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello e-commerce!')
})


const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Web app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()



