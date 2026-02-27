/*
async-await
- Promise 객체를 좀 더 쉽고 편하게 사용할 수 있는 문법
*/

async function f() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve('완료!'), 300);
    })

    let result = await promise;
    return result;
}

f().then(
    function(result) { console.log("성공") },
    function(error)  { console.log("실패") }
)

