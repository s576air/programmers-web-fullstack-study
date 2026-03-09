// 2차 역량진단평가를 대비한 임시 코드들

// npm i express
let express = require('express');
let app = express();
app.listen(5555);
app.use(express.json());

let file = require('./data.json');
console.log(file);

let fs = require('fs');
let file2 = fs.readFileSync('./data.json', 'utf8');
let obj = JSON.parse(file2);

app.get('/abc', (req, res) => {
    console.log(req.query);
    res.status(400).json({
        message: "hello"
    })
})

app.post('/def', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "no"
    })
})