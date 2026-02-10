const express = require('express');
let router = express.Router();

// router.use(express.json()); // app.js에 추가

// 회원가입
router.post('/join', (req, res) => {
    res.send('회원가입');
});

// 로그인
router.post('/login', (req, res) => {
    res.send('로그인');
});

// 비밀번호 초기화 요청
router.get('/reset', (req, res) => {
    res.send('비번초기화 요청');
});

// 비밀번호 초기화
router.post('/reset', (req, res) => {
    res.send('비번 초기화');
});

module.exports = router;