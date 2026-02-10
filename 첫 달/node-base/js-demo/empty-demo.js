let obj = {};
let obj2 = { 1:1, 2:2 };
let num = 1;
let str = "one";
let arr = [1, 2, 3, 4, 5];

console.log(Object.keys(obj).length);
console.log(Object.keys(obj2).length);
console.log(Object.keys(num).length);
console.log(Object.keys(str).length);
console.log(Object.keys(arr).length);

console.log('---')

console.log(Object.values(obj).length);
console.log(Object.values(obj2).length);
console.log(Object.values(num).length);
console.log(Object.values(str).length);
console.log(Object.values(arr).length);

function isEmpty(obj) {
    if (obj.constructor === Object && Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
    // 그냥 if문 안에 조건식을 바로 리턴하면 되는거 아닐까요?
    // gpt 피셜 가장 안전한 오브젝트 판별법(100%는 아님):
    // Object.getPrototypeOf(obj) === Object.prototype
}