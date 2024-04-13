const express = require('express');
const passport = require('passport');
const User = require('./models/user.model');

const router = express.Router();

    router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
    }));

    router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(500).send('Error registering user.');
    }
    });

    router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
    });

    module.exports = router;
