const express = require('express');
const router = express.Router();

router.get('/dep/todos', (req, res, next) => {
    console.log(req.url, req.param);
    res.send(Array.from({length: 5}, (_, i) => 'todo_dep_' + i));
});

module.exports = router;
