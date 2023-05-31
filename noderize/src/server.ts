require("dotenv").config()
var morgan = require('morgan')

// import { randomJoke } from './jokes';
import { isAuthenticated } from './middleware/auth';

// Setup API Server
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const session = require("express-session");

app.use(cors())
app.use(session({
  secret: process.env.SECRET,
  saveUninitialized: true,
  resave: true,
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({
  limit: '15mb'
}))
app.use(morgan('combined'))

// Setup Routes 
const users = require('./users')

// User Routes
app.get("/api/user/:id", isAuthenticated, users.getUser)
// Admin User Route
// app.get("/api/joke/random", isAuthenticated, randomJoke )

// Health Check
app.get("/api/health", (_req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date(),
    release: process.env.RELEASE
  }

  res.status(200).send(data);
});

const port = process.env.PORT || 8081;
app.listen(port)

console.info(`Listening on : ${port}`)

