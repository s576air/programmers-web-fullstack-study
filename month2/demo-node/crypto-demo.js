const crypto = require('crypto');

let password = 'asdf';

// 비밀번호 암호화
const salt = crypto.randomBytes(64).toString('base64');
// 비밀번호, 솔트, 해싱 반복수?, 결과물 길이, 알고리즘.   base64 인코딩
const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');

console.log(hashPassword);