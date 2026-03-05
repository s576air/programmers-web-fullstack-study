const jwt = require('jsonwebtoken');
require('dotenv').config();

// 요청 꺼내기 + 디코드이므로, 더 명확한 이름을 사용하는 것이 좋다.
function decodeJwt(req) {
    try {
        let token = req.headers['authorization'];
        if (token == null) throw new ReferenceError('jwt 필요');
        let decodedJwt = jwt.verify(token, process.env.PRIVATE_KEY);
        
        return decodedJwt;
    } catch (err) {
        console.log(err.name);
        console.log(err.message);

        return err;
    }
}

module.exports = decodeJwt;