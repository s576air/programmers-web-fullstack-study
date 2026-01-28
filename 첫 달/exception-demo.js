const express = require('express');
const app = express();
app.listen(1234);

let fruits = [
    { id: 1, name: 'apple'},
    { id: 2, name: 'orange'},
    { id: 3, name: 'strawberry'},
    { id: 4, name: 'blueberry'}
];

// 과일 전체 조회
app.get('/fruits', (req, res) => {
    res.json(fruits); // 배열이 잘 전달됨
});

// 과일 개별 조회
app.get('/fruits/:id', (req, res) => {
    let id = req.params.id;

    let findFruit = fruits.find(f => f.id == id);

    if (findFruit) {
        res.json(findFruit);
    } else {
        res.status(404).send(
            "id에 해당하는 과일이 없습니다."
        );
    }
});