const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const path = require("path");
const rutas = require('./router/index.js')

const app = express();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
      "mongodb+srv://josebernal:123@cluster0.jmwvo.mongodb.net/?retryWrites=true&w=majority",
      mongoOptions,
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    rolling: true, 
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use('/', rutas)

app.listen(3000, () => {
  console.log("Servidor escuchando puerto 3000");
});