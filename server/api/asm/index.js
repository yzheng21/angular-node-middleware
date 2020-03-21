const express = require('express');
const logger = require('../../components/logger')('api');
const router = express.Router();

router.get('/asm/todos', (req, res, next) => {
    logger.info('asm todos api -> ', req.url);
    res.send(Array.from({length: 5}, (_, i) => 'todo_asm_' + i));
});

module.exports = router;
