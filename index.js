const express = require('express')
const app = express()
const port = 5000

const mongoose = require("mongoose");
const connect = mongoose.connect('mongodb+srv://anhyunjin:ahj961205@cluster0.qsqfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello Woorld!'))

app.listen(port, () => console.log(`Examle app listening on port ${port}!`))