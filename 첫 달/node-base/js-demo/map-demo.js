
const arr = [3, 4, 5, 6, 7];

// 객체에서 요소를 하나 꺼내고, 그 요소를 매개변수로서 호출
const foreachArray = arr.forEach(function(value, index, array) {
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
    return value * 2;
});

console.log('---');

const mapArray = arr.map(function(value, index, array) {
    console.log(`value: ${value}, index: ${index}, array: ${array}`);
    return value * 2;
});

console.log('---');

console.log(`foreach: ${foreachArray}, map: ${mapArray}`);