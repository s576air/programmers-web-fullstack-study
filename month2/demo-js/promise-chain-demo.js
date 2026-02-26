new Promise(function(resolve, reject) {
    setTimeout(() => resolve('완료!'), 300);
}).then(
    function(result) {
        console.log('then에서 results 확인1: ' + result);
        return result + '!!!!';
}, function(_error) {}
).then(
    function(result) {
        console.log('then에서 results 확인2: ' + result);
        return result + '!!!!';
}, function(_error) {}
).then(
    function(result) {
        console.log('then에서 results 확인3: ' + result);
}, function(_error) {}
);

