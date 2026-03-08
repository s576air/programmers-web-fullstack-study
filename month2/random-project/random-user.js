const { faker } = require('@faker-js/faker');
const app = require('express')();
app.listen(5555);

app.get('/fake/users/:n', (req, res) => {
    return res.status(200).json(
        fakeUsers(req.params.n)
    );
})

function fakeUsers(n) {
    let users = [];
    for(let i = 0; i < n; i++) {
        users.push({
            email: faker.internet.email(),
            password: faker.internet.password(),
            fullName: faker.person.fullName(),
            contact: faker.phone.number()
        });
    }
    return users;
}

console.log(fakeUsers(2));
//console.log(faker.helpers.fromRegExp());

