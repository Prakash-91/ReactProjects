var express = require("express");
var bodyparser= require("body-parser");
const cors = require('cors');

var app = express();

app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var productapi = require("./controllers/product.controller");
app.use("/api/products", productapi);
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests only from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, HTTP authentication) to be included in the request
  }));

app.listen(8080);
console.log("server UP and Running on port 8080");