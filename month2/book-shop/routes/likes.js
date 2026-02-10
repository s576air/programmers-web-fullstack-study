const express = require('express');
let router = express.Router();

// 좋아요 추가
router.post('/:id', (req, res) => {
    res.send('좋아요 추가');
});

// 좋아요 삭제
router.delete('/:id', (req, res) => {
    res.send('좋아요 삭제');
});

module.exports = router;