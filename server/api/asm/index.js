const express = require('express');
const router = express.Router();

router.get('/asm/todos', (req, res, next) => {
    console.log(req.url, req.param);
    res.send(Array.from({length: 5}, (_, i) => 'todo_asm_' + i));
});

module.exports = router;
