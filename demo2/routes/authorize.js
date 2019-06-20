import { subscriptionConfiguration } from '../constants';
import { postData, deleteData } from '../helpers/requestHelper';
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');

/* GET /authorize. */
router.get('/',async function(req, res, next) {
  // Get auth code
  const code = req.query.code;
  const
  // If code is present, use it
  if (code) {
    
    try{
       const token = await authHelper.getTokenFromCode(code, res);
       const accessToken = await authHelper.getAccessToken(req.cookies,res);
       subscriptionConfiguration.expirationDateTime = new Date(Date.now() + 86400000).toISOString();
       
       var sup = await postData('/beta/subscriptions',token,JSON.stringify(subscriptionConfiguration);
       if(sup)
       {
          sup.userId = token.userId;
          sup.accessToken = accessToken;
       }
       
       res.redirect('/');
    }catch(error){
        res.render('error',{});
      }
  } else {
    // Otherwise complain
    res.render('error', { title: 'Error', message: 'Authorization error', error: { status: 'Missing code parameter' } });
  }
});
router.get('/signout', function(req, res, next) {
    authHelper.clearCookies(res);
    
    // Redirect to home
    res.redirect('/');
  });

module.exports = router;