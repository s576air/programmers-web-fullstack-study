const conn = require('../mariadb');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // 기본 모듈, 암호화
require('dotenv').config();

const join = async (req, res) => {
    const {email, password} = req.body;

    // 비밀번호 암호화
    // 10 길이의 바이트 생성 -> base64 인코딩
    const salt = crypto.randomBytes(10).toString('base64');
    // 비밀번호, 솔트, 해싱 반복수?, 결과물 길이, 알고리즘.   base64 인코딩
    const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 16, 'sha512').toString('base64');

    const sql = 'INSERT INTO users(email, password, salt) VALUES(?, ?, ?)';
    const values = [email, hashPassword, salt];

    let [results] = await conn.query(sql, values);

    if (results.affectedRows) {
        return res.status(StatusCodes.CREATED).json(results);
    } else {
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';

    let [results] = await conn.query(sql, email);
    console.log(results);

    const user = results[0];

    if (user == null) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: '이메일이 잘못됨'
        });
    }
    
    const hashPassword = crypto.pbkdf2Sync(password, user.salt, 10000, 16, 'sha512').toString('base64');

    console.log(user);
    if (user && user.password == hashPassword) {
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.PRIVATE_KEY,
            { expiresIn: '5m' }
        );

        res.cookie('authorization', token, {
            httpOnly: true
        })
        console.log('token: ' + token);
        
        return res.status(StatusCodes.OK).json(results);
    } else {
        // 401: Unauthorized 인증 안됨
        // 403: Forbidden 접근 권한 없음
        return res.status(StatusCodes.UNAUTHORIZED).end();
    }
};

const passwordResetRequest = (req, res) => {
    const {email} = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';

    conn.query(sql, email, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        const user = results[0];
        if (user) {
            return res.status(StatusCodes.OK).json({
                email
            });
        } else {
            return res.status(StatusCodes.UNAUTHORIZED).end();
        }
    })
};

const passwordReset = (req, res) => {
    const {email, password} = req.body;

    let sql = 'UPDATE users SET password = ?, salt = ? WHERE email = ?';

    const salt = crypto.randomBytes(64).toString('base64');
    const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 16, 'sha512').toString('base64');

    let values = [hashPassword, salt, email];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        if (results.affectedRows == 0) {
            return res.status(StatusCodes.BAD_REQUEST).end();
        } else {
            return res.status(StatusCodes.OK).json(results);
        }
        
    })
};

module.exports = {
    join,
    login,
    passwordResetRequest,
    passwordReset
};