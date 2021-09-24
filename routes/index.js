const express = require('express');
const router = express.Router();

const auth = require('./auth');
const Job = require('../models/job');

router.get('/', auth.checkIfAuthenticated, async (req, res) => {
    const jobs = await Job.find({});
    jobs.sort((a, b) => b.postDate - a.postDate);
    res.render('index', { job: new Job(), jobs: jobs, username: req.user.username });
});

router.delete('/logout', (req, res) => {
    req.logOut();
    
    req.flash('info', 'Account has been successfuly logged out');
    res.redirect('/login');
});

module.exports = router;