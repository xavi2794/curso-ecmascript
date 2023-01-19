const user = { username: 'abc', age: 30, country: 'ES' };
const { username, ...values } = user;
console.log(username);
console.log(values);
