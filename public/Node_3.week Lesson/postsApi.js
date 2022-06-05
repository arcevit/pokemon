const express = require('express');
const router = express.Router();
const posts = require('./posts');

router.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});
router.get('/posts', function (req, res) {
    res.send(JSON.stringify(posts));
});

module.exports = router;
