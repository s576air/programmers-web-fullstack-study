/**
 * 배열에 쓰려고 만듦
 */

const arr = [3, 4, 5, 6, 7];

// 객체에서 요소를 하나 꺼내고, 그 요소를 매개변수로서 호출
arr.forEach(function(value, index, array) {
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
});

console.log('---');

let map = new Map();

map.set(7, "77");
map.set(9, "99");
map.set(8, "88");

map.forEach(function(value, index, array) {
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
});