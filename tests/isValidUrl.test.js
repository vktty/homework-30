const isValidUrl = require('../functions/isValidUrl')

describe('url testing', () => {
    test('url will be valid using https', () => {
        expect(isValidUrl('https://www.example.com')).toBeTruthy()
    })
    test('url will be valid using http', () => {
        expect(isValidUrl('http://www.example.com')).toBeTruthy()
    })
    test('url will be invalid without https/http in the beginning', () => {
        expect(isValidUrl('://www.example.com')).toBeFalsy()
    })
    test('url has to contain .com', () => {
        expect(isValidUrl('https://www.example')).toBeFalsy()
    })
    test('url will be valid with port', () => {
        expect(isValidUrl('https://www.example.com:80')).toBeTruthy()
    })
    test('url will be valid with path', () => {
        expect(isValidUrl('https://www.example.com:80/path/that/leads/somewhere')).toBeTruthy()
    })
    test('url will be valid with parameter', () => {
        expect(isValidUrl('https://www.example.com:80/path/that/leads/somewhere?key1=value1')).toBeTruthy()
    })
    test('url will be valid with a couple of parameters', () => {
        expect(isValidUrl('https://www.example.com:80/path/that/leads/somewhere?key1=value1&key2=value2')).toBeTruthy()
    })
    test('url will be valid with hash', () => {
        expect(isValidUrl('https://www.example.com:80/path/that/leads/somewhere?key1=value1&key2=value2#thisIsHash')).toBeTruthy()
    })
})

