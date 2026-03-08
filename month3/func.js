/**
 * 일급객체 및 매개변수 실습
 */

function foo(arg) { // 함수를 매개변수로 사용
    return arg; // 반환값
}

function bar() {
    console.log(1, 'bar');
}

foo(bar)();

// 함수 할당
const foo2 = function(arg) {
    return arg
}

console.log(2, foo2(11));

// 동일비교 추가..
console.log(3, foo == foo);
console.log(4, foo == bar);

function foo3(arg) {
    console.log(5, arg)
}

function foo4(arg = 1) { // 기본값 매개변수
    console.log(6, arg)
}

foo3();
foo4();

function foo5(arg, ...args) { // 나머지 매개변수
    console.log(7, args);
}

foo5(1);
foo5(5, 6, 7, 8, 9);

function foo6(arg) {
    console.log(8, arguments); // argments 객체

}

foo6('qwer');

/**
 * 함수 생성 방법 실습
*/

// 함수 선언문
function foo7() {
    console.log(9, 'foo7');
}

foo7();

// 함수 표현식
const foo8 = function() {
    console.log(10, 'foo8');
}

foo8();

// Function 생성자 함수
const foo9 = new Function(
    "console.log(11, 'foo9')"
);

foo9();

// 화살표 함수 표현식
const foo10 = () => {
    console.log(12, 'foo10')
};

foo10();

/**
 * 함수의 여러가지 형태 실습
 */

// IIFE, 즉시 실행 함수 표현식
(function foo11() {
    console.log(13, 'foo11');
})();

// 재귀함수
function foo12(depth) {
    if (depth >= 3) return;
    console.log(14, depth);
    foo12(depth + 1);
}

foo12(0);

// 중첩함수
function foo13(arg) {
    function foo14() {
        console.log(15, arg);
    }
    foo14();
}

foo13(13);

// 콜백함수
function foo14(arg) {
    arg();
}

foo14(() => {
    console.log(16, 'hello');
})