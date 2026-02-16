const express = require('express');
let router = express.Router();
const {
    allBooks,
    bookDetail
} = require('../controller/BookController');

router.get('/', allBooks); // 전체 도서 조회 & 카테고리별 조회
router.get('/:id', bookDetail); // 개별 도서 조회

module.exports = router;