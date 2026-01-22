const express = require('express');
const app = express();
app.listen(1234);

let db = new Map();
// 키로 밸류를 찾을 수 있는 한 쌍을 저장
db.set(1, '노트북');
db.set(2, "cup");
db.set(3, "Chair");
db.set("1", "문자열!!");

console.log(db);
console.log(db.get(1)); // 노트북
console.log(db.get("1")); // 문자열!!
console.log(db.get(123)); // undefined

app.get('/:id', function(req, res) {
    let {id} = req.params;
    console.log(id);
    id = parseInt(id);

    if (db.get(id) == undefined) {
        console.log("언디파인드!");
        res.json({
            message: "없는 상품입니다."
        })
    } else {
        res.json({
            id: id,
            productName: db.get(id)
        })
    }
    
});


