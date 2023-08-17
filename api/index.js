const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://bartaTrade:ULwN0zf07F4biIJM@cluster0.f7vpesz.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>  {
    console.log("Mongo database connection successfully...");
})
.catch((error) => {
    console.log("Error connecting to mongo database", error)
})

app.listen(port, () => {
    console.log("Server listening on port " + port)
});



