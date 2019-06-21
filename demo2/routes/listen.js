var express = require ('express');
var http = require ('http');
var getData = require( '../helpers/request');



var listenRouter = express.Router();

listenRouter.post('/',async function(req,res,next) {
    let status;
    let clientStateValid;

    if (req.query && req.query.validationToken) {
        res.send(req.query.validationToken);
        // Send a status of 'Ok'
        status = 200;
      }
    else{
        console.log('__fail__');
    }

})
module.exports = listenRouter;
