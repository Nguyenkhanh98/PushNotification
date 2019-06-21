var express = require('express');
var  subscriptionConfiguration =require('../contants').subscriptionConfiguration;
var { postData, deleteData } = require('../helpers/request');
var SaveDatafrom  = require('../modals/Sup');

var router = express.Router();
var authHelper = require('../helpers/auth');

/* GET /authorize. */
router.get('/',async function(req, res, next) {
  // Get auth code   

  console.log('-------------------------');
  const code = req.query.code;
  // If code is present, use it

  if (code) {
    try{
       const token = await authHelper.getTokenFromCode(code, res);
       subscriptionConfiguration.expirationDateTime = new Date(Date.now() + 86400000).toISOString();
       
    await postData('/beta/subscriptions',token,JSON.stringify(subscriptionConfiguration),(RequesError , SubData)=>{

if(SubData){
  
  SubData.userId = token.userId;
  SubData.accessToken = accessToken;
}else if(RequesError){
  console.log("FAILLLLLLLLLLLLLLLLL");
}

       });
      
    console.log(SubData);
       SaveData(SupData);
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