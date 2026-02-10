const express = require('express');
let router = express.Router();

// 전체 도서 조회
router.get('/', (req, res) => {
    res.send('전체 도서 조회');
});

// 개별 도서 조회
router.get('/:id', (req, res) => {
    res.send('개별 도서 조회');
});

// 카테고리별 도서 목록 조회
// router.get('/', (req, res) => {
//     res.send('카테고리별 도서 목록 조회');
// });

module.exports = router;