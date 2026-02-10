let jwt = require('jsonwebtoken');
let dotenv = require('dotenv');

dotenv.config();

console.log(process.env.PRIVATE_KEY);

let token = jwt.sign(
    {foo: 'baradsfafdffd'}, // payload
    process.env.PRIVATE_KEY, // key
);

console.log(token);

let decoded = jwt.verify(token, process.env.PRIVATE_KEY);

console.log(decoded);

try {
    let notDecoded = jwt.verify(token, 'notkey');
    console.log(notDecoded);
} catch (err) {
    console.log('notDecoded error');
}
