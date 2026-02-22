const express = require('express');
let router = express.Router();
const {addLike, removeLike} = require('../controller/LikeController');

router.post('/:id', addLike); // 좋아요 추가
router.delete('/:id', removeLike); // 좋아요 삭제

module.exports = router;