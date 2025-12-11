function isValidUrl(url) {
    const regExp = /^(https?):\/\/([a-z]{2,})\.(\w{2,})\.([a-z]{2,})(?::(\d{2,})*)*(?:\/([\/\w]{2,}))*(?:\?([&=\w]{2,})*)*(?:#([-\w]{2,})*)*$/
    return regExp.test(url);
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

module.exports = isValidUrl