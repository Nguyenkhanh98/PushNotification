var express = require ('express');
var http = require ('http');
var getData = require( '../helpers/request');



var listenRouter = express.Router();
listenRouter.post('/', (req, res, next) => {
    console.log('sssssssssssssssssssssssss');
    let status;
    let clientStatesValid;
    // If there's a validationToken parameter in the query string,
    // then this is the request that Office 365 sends to check
    // that this is a valid endpoint.
    // Just send the validationToken back.
    if (req.query && req.query.validationToken) {
      res.send(req.query.validationToken);
      // Send a status of 'Ok'
      status = 200;
    } else {
      clientStatesValid = false;
  
      // First, validate all the clientState values in array
      for (let i = 0; i < req.body.value.length; i++) {
        const clientStateValueExpected = subscriptionConfiguration.clientState;
  
        if (req.body.value[i].clientState !== clientStateValueExpected) {
          // If just one clientState is invalid, we discard the whole batch
          clientStatesValid = false;
          break;
        } else {
          clientStatesValid = true;
        }
      }
  
      // If all the clientStates are valid, then process the notification
      if (clientStatesValid) {
        for (let i = 0; i < req.body.value.length; i++) {
          const resource = req.body.value[i].resource;
          const subscriptionId = req.body.value[i].subscriptionId;
        }
        // Send a status of 'Accepted'
        status = 202;
      } else {
        // Since the clientState field doesn't have the expected value,
        // this request might NOT come from Microsoft Graph.
        // However, you should still return the same status that you'd
        // return to Microsoft Graph to not alert possible impostors
        // that you have discovered them.
        status = 202;
      }
    }
    res.status(status).end(http.STATUS_CODES[status]);
  });
module.exports = listenRouter;
