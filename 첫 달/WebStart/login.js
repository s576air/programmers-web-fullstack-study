// var vs let vs const
function compareVariable() {
    var a; // 원래 이것만 있었음, let과 const의 역할. 요즘 안씀
    let num1 = 10; // 바뀔 수 있음
    const num2 = 30; // 고정

    num1 = 20; // 먼저 들어간 값을 빼고 이 값을 넣음
    // num2 = 20; // const라 바꾸면 에러남
    alert('num1: ' + num1);
    alert('num2: ' + num2);
}
/* ID 란에 입력된 값을 팝업 창에 띄우기 */
function popId() {
    let userId = document.getElementById('txt_id').value;
    if (!userId) {
        // userId == ""와 동일
        alert('아이디를 입력해 주세요.');
    } else {
        alert(userId);
    }
}

// 나만의 함수 만들고, 버튼 클릭하면 호출하기
function myFunction() {
    alert('1');
    alert('2');
    alert('3');
}