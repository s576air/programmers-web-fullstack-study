const express = require('express');
const app = express();
app.listen(1234);

// 데이터 세팅
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

// db 세팅
let db = new Map();
db.set(1, youtuber1);
db.set(2, youtuber2);
db.set(3, youtuber3);

// REST API 설계
app.get('/youtuber/:id', function(req, res) {
    let {id} = req.params;
    console.log(id);
    id = parseInt(id);

    const youtuber = db.get(id);
    if (youtuber == undefined) {
        res.json(youtuber);
    } else {
        res.json({
            message: "유튜버 정보를 찾을 수 없습니다."
        });
    }    
});


