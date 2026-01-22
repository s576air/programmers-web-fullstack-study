const express = require('express');
const app = express();

// GET /
app.get('/', function(req, res) {
    res.send('Hello World');
});

let nodejsbook = {
    title: "Node.js를 공부해보자",
    price: 20000,
    description: "이 책 좋음"
};

app.get('/products/1', function(req, res) {
    res.json(nodejsbook);
});

app.get('/product/:n', function(req, res) {
    if (req.params.n > 10) {
        // console.log()
    }
    res.json({
        //
    });
});

app.listen(1234);
/*
저는 에러가 안 나서, 해결법만 구경하겠습니다.
에러명: (생략) adress already in use :::3000 (생략)
내용: 3000포트를 이미 쓰고 있음
해결법: 포트를 3000이 아닌 다른 값으로 바꾸기
*/