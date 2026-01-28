function range(start, end) {
    let startN = function(end) {
        let arr = [];
        for(let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }

    if (end != null) {
        return startN(end);
    } else {
        return startN;
    }
}

console.log(range(3, 3));
console.log(range(3, 8));
console.log(range(3, 0));

let start3 = range(3);
let start4 = range(4);

console.log(start3(3));
console.log(start3(8));
console.log(start3(0));

console.log(start4(6));