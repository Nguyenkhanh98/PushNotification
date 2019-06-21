var express = require('express');
var  subscriptionConfiguration =require('../contants');
var { postData, deleteData } = require('../helpers/request');
var SaveDatafrom  = require('../modals/Sup');

var router = express.Router();
var authHelper = require('../helpers/auth');

/* GET /authorize. */
router.get('/',async function(req, res, next) {
  // Get auth code
  const code = req.query.code;
  // If code is present, use it
  if (code) {
    
    try{
       const token = await authHelper.getTokenFromCode(code, res);
       const accessToken = await authHelper.getAccessToken(req.cookies,res);
       subscriptionConfiguration.expirationDateTime = new Date(Date.now() + 86400000).toISOString();
       
       var sup = await postData('/beta/subscriptions',token,JSON.stringify(subscriptionConfiguration));
       if(sup)
       {
          sup.userId = token.userId;
          sup.accessToken = accessToken;
       }
       SaveData(sup);
       res.redirect(
        '/index.hbs?subscriptionId=' + subscriptionData.id +
        '&userId=' + subscriptionData.userId
      );
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