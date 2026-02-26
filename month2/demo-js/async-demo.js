/*
async-await
- Promise 객체를 좀 더 쉽고 편하게 사용할 수 있는 문법
*/

async function f() {
    return 7;
    // async 함수는 무조건 Promise 객체를 반환
    // - 반환값이 Promise가 아니면, Promise로 감싸서 반환
}

f().then(
    function(result) { console.log("성공") },
    function(error)  { console.log("실패") }
)

