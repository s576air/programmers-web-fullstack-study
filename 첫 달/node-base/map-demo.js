const express = require('express');
const app = express();
app.listen(1234);

let db = new Map();

let notebook = {
    name: "notebook",
    price: 200
};

let cup = {
    name: "cup",
    price: 3
}

let chair = {
    name: "chair",
    price: 10
}

// 키로 밸류를 찾을 수 있는 한 쌍을 저장
db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set("1", "문자열!!");

console.log(db);
console.log(db.get(1)); // 노트북 객체
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
        let product = db.get(id);
        product.id = id;
        // product["id"] = id;

        res.json(product);
    }
    
});


