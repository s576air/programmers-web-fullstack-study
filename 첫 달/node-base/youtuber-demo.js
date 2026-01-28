const express = require('express');
const app = express();
app.listen(1238);
app.use(express.json());

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
let id = 1; // 교수님은 var로 바꿨는데, 난 안 바꿔도 잘 동작함
db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

app.get('/youtubers', function (req, res) {
    var youtubers = {};
    
    if (db.size !== 0) {
        db.forEach((value, key) => {
            youtubers[key] = value;
        });

        // res.json(JSON.stringify(jsonObject)); <- 더럽게 나옴
        res.json(youtubers);
    } else {
        res.status(404).json({
            message: "조회할 유튜버 없음"
        });
    }
})

// REST API 설계
app.get('/youtubers/:id', function(req, res) {
    let {id} = req.params;
    console.log(id);
    id = parseInt(id);

    const youtuber = db.get(id);
    if (youtuber != undefined) {
        res.json(youtuber);
    } else {
        res.json({
            message: "유튜버 정보를 찾을 수 없습니다."
        });
    }
});

/*
[body]
{
    "title": "집 가고싶다."
    "sub": 0,
    "videoNum": 0
}
*/
app.post('/youtubers', (req, res) => {
    console.log(req.body);
    let title = req.body.title;
    if (title) {
        db.set(id, req.body);

        res.status(201).json({
            message: `${db.get(id++).title}님 유튜버 등록을 응원합니다`
        })
    } else {
        res.status(400).json({
            message: "요청 값을 제대로 보내주세요."
        });
    }
})

app.delete('/youtubers/:id', (req, res) => {
    let {id} = req.params;
    id = parseInt(id);

    if (db.has(id)) {
        const title = db.get(id).title;
        db.delete(id);

        res.json(`${title}님 삭제`);
    } else {
        res.json({
            message: `${id}번 유튜버는 존재하지 않습니다. 해당 유튜버를 봤다면 당장 컴퓨터를 끄십시오.`
        });
    }
})

app.delete('/youtubers', (req, res) => {
    if (db.size >= 1) {
        db.clear();

        res.json({
            message: "모든 유튜버 삭제됨"
        });
    } else {
        res.status(404).json({
            message: "삭제할 유튜버가 없습니다."
        });
    }
})

app.put('/youtubers/:id', function(req, res) {
    let {id} = req.params;
    id = parseInt(id);
    
    let youtuber = db.get(id);
    let oldTitle = youtuber.title;
    if (db.has(id)) {
        let newTitle = req.body.title;
        
        youtuber.title = newTitle;
        db.set(id, youtuber);

        res.json(`채널명 변경: ${oldTitle} -> ${newTitle}`);
    } else {
        res.json({
            message: `${id}번 유튜버는 존재하지 않습니다. 해당 유튜버를 봤다면 당장 컴퓨터를 끄십시오.`
        });
    }
});