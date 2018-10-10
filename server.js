const express = require('express')
const mongoose =require('mongoose')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express()

// DB Config
const db = require('./config/keys.js').mongoURI

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World, Boi'))

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT

app.listen(port, process.env.IP, () => console.log("Yo your server is running"))