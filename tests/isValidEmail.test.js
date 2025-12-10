const isValidEmail = require('../functions/isValidEmail')

describe('testing emails', () => {
    test('email will be invalid without @', () => {
        expect(isValidEmail('email-without-the-symbol.com')).toBeFalsy()
    })
    test('email will be invalid without .com', () => {
        expect(isValidEmail('example@example')).toBeFalsy()
    })
    test('email will be valid using - _ and numbers', () => {
        expect(isValidEmail('example45-_4@example.com')).toBeTruthy()
    })
})