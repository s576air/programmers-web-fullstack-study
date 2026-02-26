function first() {
    console.log("첫 번째");
}

function second() {
    console.log("두 번째");
}

function third() {
    console.log("세 번째");
}

first();
setTimeout(second, 200); // 0.2초 뒤 second 함수 실행
third();