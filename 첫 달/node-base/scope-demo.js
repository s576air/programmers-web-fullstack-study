if (true) { // {} 블록 스코프 시작
    var num1 = 7;
    const num2 = 3;
    let num3 = 5;

    console.log(num1);
    console.log(num2);
    console.log(num3);

    // num2 = 3;
    num3 = 21;

    console.log(num1 + " * " + num2 + " = " + num3);
    console.log(`${num1} * ${num2} = ${num3}`); // 템플릿 문자열
} // {} 블록 스코프 끝

console.log(num1);
//console.log(num2);
//console.log(num3);