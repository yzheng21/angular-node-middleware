const express = require('express');
const logger = require('../../components/logger')('api');
const router = express.Router();

router.get('/dep/todos', (req, res, next) => {
    logger.info('dep todos api -> ', req.url);
    res.send(Array.from({length: 5}, (_, i) => 'todo_dep_' + i));
});

module.exports = router;
