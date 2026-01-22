const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/products/:n', function(req, res) {
    let num = req.params.n - 10;
    console.log(num); // 숫자 타입
    let num2 = parseInt(req.params.n);

    res.json({
        num: req.params.n
    });
});

// 영상 클릭 주소: https://www.youtube.com/watch?v=vvv&t=291s
app.get('/watch', function(req, res) {
    const {v, t} = req.query;
    console.log(v);
    console.log(t);

    res.json({
        video: v,
        timeline: t
    });
});

// 채널 주소: https://www.youtube.com/@nickname
app.get('/:nickname', function(req, res) {
    res.json({
        channel: req.params.nickname
    });
});


app.listen(1234);