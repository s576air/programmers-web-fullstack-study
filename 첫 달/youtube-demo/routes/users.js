const express = require('express');
const router = express.Router();
const conn = require('../mariadb');
const expressValidator = require('express-validator');
const {body, param, validationResult} = expressValidator;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const validate = (req, res, next) => {
    const err = validationResult(req);

    if (err.isEmpty()) {
        return next();
    }
    
    res.status(400).json(err.array());
}

function isExist(obj) {
    return Boolean(Object.keys(obj).length);
} // 쓰고있어서 남갑니다.

function findMap(map, callback) {
    let res;
    map.forEach((value) => {
        let callbackRes = callback(value);
        if (callbackRes) {
            res = value;
        }
    })
    return res;
}

// 로그인
router.post('/login',[
    body('email').notEmpty().isEmail().withMessage('숫자 입력 필요'),
    body('password').notEmpty().isString().withMessage('비밀번호 확인 필요'),
    validate
], function(req, res) {
    const {email, password} = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';

    conn.query(sql, email,
        function(_, results) {
            var loginUser = results[0];
            if(results.length) {
                if (loginUser && loginUser.password == password) {
                    const token = jwt.sign({
                        email: loginUser.email,
                        name: loginUser.name
                    }, process.env.PRIVATE_KEY);

                    res.cookie("token", token, {
                        httpOnly: true,
                        expiresIn: '30m',
                        issuer: "poodle"
                    });

                    res.status(200).json({
                        message: `${loginUser.name} 로그인`,
                        token: token
                    });
                } else {
                    res.status(404).json({
                        message: "이메일 or 비번 틀림"
                    });
                }
            } else {
                res.status(404).json({
                    message: "회원 정보 없음"
                });
            }
        })
});

// 회원가입
router.post('/join', [
    body('email').notEmpty().isEmail().withMessage('이메일 입력 필요'),
    body('name').notEmpty().isString().withMessage('이름 확인 필요'),
    body('password').notEmpty().isString().withMessage('비밀번호 확인 필요'),
    body('concat').notEmpty().isString().withMessage('연락처 확인 필요'),
    validate
], function(req, res) {
    if (isExist(req.body)) { // 강사님 req.body == {}는 항상 false에요
        const {email, name, password, concat} = req.body;
        const sql = 'INSERT INTO users(email, name, password, concat) VALUES(?, ?, ?, ?)';
        const values = [email, name, password, concat];
        conn.query(
            sql, values,
            function(_err, results, _fields) {
                res.status(201).json({
                    message: `${email}님 환영합니다.`
                });
            }
        )
    } else {
        res.status(400).json({
            message: '입력 값을 다시 확인해주세요'
        });
    }
})

router.route('/users')
    .get([
        body('email').notEmpty().isEmail().withMessage('이메일 입력 필요'),
        validate
    ], function(req, res) { // 회원 개별 조회
        let {email} = req.query; // 강의는 body인데 바꿈

        conn.query(
            'SELECT * FROM users WHERE email = ?', 
            [email],
            function(_err, results) {
                if (results.length) {
                    res.status(200).json(results);
                } else {
                    res.status(404).json({
                        message: "회원 정보가 없습니다.",
                    })
                }
                
            }
        );
    })
    .delete([
        body('email').notEmpty().isEmail().withMessage('이메일 입력 필요'),
        validate
    ], function(req, res) { // 회원 개별 탈퇴
        let {email} = req.body;

        conn.query(
            'DELETE FROM users WHERE email = ?', 
            [email],
            function(_err, results) {
                if (results.affectedRows) {
                    res.status(200).json(results);
                } else {
                    res.status(404).json({
                        message: "회원 정보가 없습니다.",
                    })
                }
                
            }
        );
    })

module.exports = router;