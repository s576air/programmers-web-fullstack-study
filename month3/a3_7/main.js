console.log('test');

try {
    console.log('1:', a); // undefined
    console.log('2:', b); // ReferenceError
    console.log('3:', c); // ReferenceError
} catch (err) {
    console.log(err);
}

var a;
const b = 2;
let c;

console.log('4:', a); // undefined
console.log('5:', b); // 2
console.log('6:', c); // undefined

a = 1;
c = 3;

console.log('7:', a); // 1
console.log('8:', c); // 3