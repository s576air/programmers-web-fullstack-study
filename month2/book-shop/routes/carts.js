const express = require('express');
let router = express.Router();

// 장바구니 담기
router.post('/', (req, res) => {
    res.send('장바구니 담기');
});

// 장바구니 조회
router.get('/', (req, res) => {
    res.send('장바구니 조회');
});

// 장바구니 도서 삭제
router.get('/:id', (req, res) => {
    res.send('장바구니 도서 삭제');
});

module.exports = router;