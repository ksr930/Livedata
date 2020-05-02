var express = require('express')

var router = express.Router();

var cors = require('cors')

var corsoptions = {
    origin: "http://localhost:5000",
    optionSuccessStatus: 200
}


module.exports=router;