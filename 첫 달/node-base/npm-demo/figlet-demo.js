let figlet = require("figlet");

figlet("Jaemin!!", function (err, data) {
    // 익명의 함수를 쓰는 이유: 다른 곳에서 안 쓸 거라서
    // 이 함수가 콜백함수를 인자로 받는 이유: 그렇게 만들어서

    // 매개변수 받기 -> 아스키 아트 제작 -> 콜백 함수 실행
    if (err) {
        console.log("Something went wrong..");
        console.dir(err);
        return;
    }
    console.log(data);
});