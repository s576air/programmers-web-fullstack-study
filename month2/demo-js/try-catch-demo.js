

try {
    //username;
    let json = JSON.parse('{ "num": 1 }');
    
    if (json.name) {
        console.log('이름: ', json.name);
    } else {
        throw new SyntaxError("입력 값에 이름 없음!");
    }
} catch (err) {
    // console.log('username이 선언되지 않았습니다.')
    // console.log(err);
    console.log('오류 이름: ', err.name);
    console.log('오류 메시지: ', err.message);
}