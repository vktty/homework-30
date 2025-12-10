function isValidEmail(email) {
    const regExp = /^([a-z][\w_\.-]{2,})@([a-z]{2,})\.([a-z]{2,})$/
    return regExp.test(email);
}
console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

module.exports = {isValidEmail}