const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../model/User.js');
const sendMail = require('../email/account.js');

router.post('/contact/new', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const user = new User(req.body);
        await user.save();

        sendMail(email, message);
        res.send({ message: 'Message Sent !' });

    } catch (e) {
        res.send(e);
    }
})

router.get('/resume', async (req, res) => {
    const filePath = path.resolve(__dirname, '../assets/cv.pdf')
    res.download(filePath, 'mohib-cv.pdf', function (err) {
        if (err) {
            res.send(err);
        }
    });
})

module.exports = router;