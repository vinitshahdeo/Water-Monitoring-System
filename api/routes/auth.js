"use strict"
require("dotenv").config();
const express = require("express");
const router = express.Router();
const { google } = require('googleapis');

/**
 * Send the user a verification code via SMS, for phone authentication service.
 * @async
 * @method
 * @param {String} phoneNumber - User's phone number
 * @param {String} recaptchaToken - recaptchaToken generated on client side
 * @throws {Could not send verification code} When the user cannot be send with verification code
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authenticating users
 */

/**
 * @swagger
 * path:
 *  /auth/sendSMS:
 *    post:
 *      summary: Send the user a verification code via SMS, for phone authentication service.
 *      tags: [Authentication]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  phoneNumber:
 *                      type: string
 *                      example: +919446570779
 *                  recaptchaToken:
 *                      type: string
 *                      example: CD54YK
 *      responses:
 *        "200":
 *          description: Send SMS to user's phone for verification
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"error":"Could not send verification code"}
 *                  
 *      
 */

router.post('/sendSMS', function (req, res) {

    // body must have phoneNumber and recaptchaToken
    const { phoneNumber, recaptchaToken } = req.body;

    const identityToolkit = google.identitytoolkit({
        auth: process.env.GCP_API_KEY,
        version: 'v3',
    });

    try {
        const response = identityToolkit.relyingparty.sendVerificationCode({
            phoneNumber,
            recaptchaToken: recaptcha,
        });

        // save phoneSessionId into database . We will need this to verify the SMS code
        const phoneSessionId = response.data.sessionInfo;

    }
    catch (error) {
        res.status(500).send({ error: 'Could not send verification code' })
    }

});

/**
 * Verifying the user, from the SMS code sent via client end
 * @async
 * @method
 * @param {String} verificationCode - verificationCode send by user
 * @throws {User Cannot be verified} When the user is not verified.
 */

/**
 * @swagger
 * path:
 *  /auth/verifySMS:
 *    post:
 *      summary: Verifying the user, from the SMS code sent via client end.
 *      tags: [Authentication]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  verificationCode:
 *                      type: integer
 *                      example: 7689
 *      responses:
 *        "200":
 *          description: The user is verified.
 *        "500":
 *          description: Internal error message 
 *          content:
 *            application/json:
 *                example: {"error":"User Cannot be verified"}
 *                  
 *      
 */

router.post('/verifySMS', function (req, res) {

    //body must have verification code from client side
    const { verificationCode } = req.body;

    const identityToolkit = google.identitytoolkit({
        auth: process.env.GCP_API_KEY,
        version: 'v3',
    });

    //get session Info from database
    try {
        identityToolkit.relyingparty.verifyPhoneNumber({
            code: verificationCode,
            sessionInfo: phoneSessionId,
        });

    }
    catch (error) {
        res.status(500).send({ error: 'User Cannot be verified' })
    }


    //verification is done, do other tasks

});

module.exports = router;