const isValidEmail = require('../functions/isValidEmail')

describe('testing emails', () => {
    test('example@example.com will be true', () => {
        expect(isValidEmail('example@example.com')).toBeTruthy()
    })
    test('invalid-email will be false', () => {
        expect(isValidEmail('invalid-email')).toBeFalsy()
    })
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