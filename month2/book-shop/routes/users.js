const express = require('express');
let router = express.Router();
const {
    join,
    login,
    passwordResetRequest,
    passwordReset
} = require('../controller/UserContoller');

// router.use(express.json()); // app.js에 추가


router.post('/join', join); // 회원가입
router.post('/login', login); // 로그인
router.get('/reset', passwordResetRequest); // 비밀번호 초기화 요청
router.post('/reset', passwordReset); // 비밀번호 초기화

module.exports = router;
/*
저의 id, 보고 있는 사람 팔로잉 id
반환할 때, 팔로잉 저의 id 기준으로 팔로잉 id

특정 유저 1명의 팔로우
1:1 상태 판단
*/