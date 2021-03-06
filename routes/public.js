const express = require('express');
const router = express.Router();

router.get('/insights', (req, res) => {
    res.render('public/insights.ejs', { auth: req.isAuthenticated()});
});

module.exports = router;