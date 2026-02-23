const express = require('express');
let router = express.Router();
let {
    addToCart,
    getCartItems,
    removeCartItem
} = require('../controller/CartController');

router.post('/', addToCart); // 장바구니 담기
router.get('/', getCartItems); // 장바구니 조회
router.get('/:id', removeCartItem); // 장바구니 도서 삭제

module.exports = router;