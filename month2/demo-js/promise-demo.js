// Promise 객체: 약속을 지키는 친구

let promise = new Promise(function(resolve, reject) {
    // executor: 이 친구가 할 일
    setTimeout(() => resolve('완료!'), 300);
    // 성공하면 resolve(결과)
    // 실패하면 reject(에러)
    //
})

promise.then(function(results) {
    console.log('then에서 results 확인: ' + results);
}, function(error) {
    //
})