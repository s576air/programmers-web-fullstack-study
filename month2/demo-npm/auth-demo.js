// authorization demo
let jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
// env 생략..
const PORT = 1234;
const PRIVATE_KEY = 'abc1234';
app.listen(PORT);

// GET /
app.get('/jwt', function(req, res) {
    let token = jwt.sign(
        {foo: 'bar'},
        PRIVATE_KEY,
        { expiresIn: '1m' }
    );

    res.cookie('jwt', token, {
        httpOnly: true
    });

    res.send('토큰 발행');
});

app.get('/jwt/decoded', function(req, res) {
    let token = req.headers['authorization'];
    console.log('jwt: ' + token);
    let decoded = jwt.verify(token, PRIVATE_KEY);

    // 유효기간 지남 -> 500 에러 남 -> 예외처리 필요!
    res.send(decoded);
})


app.listen(1234);
