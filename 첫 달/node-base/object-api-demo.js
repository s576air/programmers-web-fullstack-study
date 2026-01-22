const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

let youtuber1 = {
    title: "십오야",
    sub: "593",
    videoNum: "993"
}

let youtuber2 = {
    title: "침착맨",
    sub: "227",
    videoNum: "6600"
}

let youtuber3 = {
    title: "테오",
    sub: "54",
    videoNum: "726"
}

app.get('/:nickname', function(req, res) {
    const {nickname} = req.params;

    if (nickname == "@15ya") {
        res.json(youtuber1);
    } else if (nickname == "@Chim") {
        res.json(youtuber2);
    } else if (nickname == "@TEO") {
        res.json(youtuber3);
    } else {
        res.json({
            message: "저희가 모르는 유튜버입니다." 
        })
    }
});


app.listen(1235);