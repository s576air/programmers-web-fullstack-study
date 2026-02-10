const express = require('express');
let router = express.Router();

// 주문 하기
router.get('/', (req, res) => {
    res.send('주문 하기');
});

// 주문 목록 조회
router.get('/', (req, res) => {
    res.send('주문 목록 조회');
});

// 주문 상세 상품 조회
router.get('/:id', (req, res) => {
    res.send('주문 상세 상품 조회');
});

module.exports = router;