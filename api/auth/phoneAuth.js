"use strict"
require("dotenv").config();
const express = require("express");
const router = express.Router();
const { google } = require('googleapis'); 

// route to trigger for auth
router.post('/sendSMS', function (req, res) {
   
  // body must have phoneNumber and recaptchaToken
  const { phoneNumber, recaptchaToken } = req.body;
  
  const identityToolkit = google.identitytoolkit({
    auth: process.env.GCP_API_KEY,
    version: 'v3',
  });
  
  const response = await identityToolkit.relyingparty.sendVerificationCode({
    phoneNumber,
    recaptchaToken: recaptcha,
  });
  
  // save phoneSessionId into databse . We will need this to verify the SMS code
  const phoneSessionId = response.data.sessionInfo;
  
});


router.post('/verifySMS', function (req, res) {
   
  //body must have verification code from client side
  const { verificationCode } = req.body;
  
  const identityToolkit = google.identitytoolkit({
    auth: process.env.GCP_API_KEY,
    version: 'v3',
  });
  
  //get session Info from database
  await identityToolkit.relyingparty.verifyPhoneNumber({
    code: verificationCode,
    sessionInfo: phoneSessionId,
  });
  
  //verification is done, do other tasks
 
});

module.exports = router;


