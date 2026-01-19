const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/test', function(req, res) {
    res.send("TEST SUCCESS");
});

app.get('/test/1', function(req, res) {
    res.send("TEST SUCCESS");
});

// GET /hello, /bye, /nice
app.get('/hello', function(req, res) {
    res.json({
        say : '안녕하세요'
    });
});

app.get('/bye', function(req, res) {
    res.send("안녕히 가세요");
});

// GET 메소드로, '/nice'가 날아오면
// 매개변수로 받은 콜백 함수를 호출 -> 서버에 세팅
app.get('/nice', function(req, res) {
    res.send("만나서 반가워요");
});

app.listen(1234);
