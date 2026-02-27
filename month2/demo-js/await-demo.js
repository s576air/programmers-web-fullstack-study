
async function f() {
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve('첫번째'), 300);
    })
    let result1 = await promise1;
    console.log(result1);

    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve('두번쨰' + result1), 300);
    })
    let result2 = await promise2;
    console.log(result2);

    let promise3 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve('세번째' + result2), 300);
    })
    let result3 = await promise3;
    console.log(result3);

    
    
    
    // return result;
}

