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
setTimeout(() => { second(); }, 200);
// 0.2초 뒤에 second 함수를 실행합니다.
// 매개변수로 함수를 전달하는 것!
// == "콜백 함수"
third();