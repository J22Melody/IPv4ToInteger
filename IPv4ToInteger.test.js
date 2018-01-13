const {IPv4ToInteger, IPv4ToIntegerIterateOnce} = require('./IPv4ToInteger')

const tests = [
  {
    input: '172.168.5.1',
    inputWithValidSpace: ' 172.168.5.1',
    inputWithInvalidSpace: ' 17 2.168.5.1',
    output: 2896692481,
  },
  {
    input: '1.1.1.1',
    inputWithValidSpace: '1 .1.1. 1',
    inputWithInvalidSpace: '1 .1.1 1. 1',
    output: 16843009,
  },
  {
    input: '0.0.0.0',
    inputWithValidSpace: '0   . 0 .    0   . 0',
    inputWithInvalidSpace: '0   . 0 .    0   . 0      0',
    output: 0,
  },
  {
    input: '255.255.255.255',
    inputWithValidSpace: '  255.255. 255.255   ',
    inputWithInvalidSpace: '  25 5.25 5. 255.2    55   ',
    output: 4294967295,
  },
]

describe('tests', () => {
  tests.forEach(({input, inputWithValidSpace, inputWithInvalidSpace, output}, index) => {
    test(`IPv4ToInteger outputs right when input valid in test ${index + 1}`, () => {
      expect(IPv4ToInteger(input)).toEqual(output)
      expect(IPv4ToInteger(inputWithValidSpace)).toEqual(output)
    })

    test(`IPv4ToInteger throws error when input invalid in test ${index + 1}`, () => {
      expect(() => { IPv4ToInteger(inputWithInvalidSpace) }).toThrow('Input invalid.')
    })

    test(`IPv4ToIntegerIterateOnce outputs right when input valid in test ${index + 1}`, () => {
      expect(IPv4ToIntegerIterateOnce(input)).toEqual(output)
      expect(IPv4ToIntegerIterateOnce(inputWithValidSpace)).toEqual(output)
    })

    test(`IPv4ToIntegerIterateOnce throws error when input invalid in test ${index + 1}`, () => {
      expect(() => { IPv4ToIntegerIterateOnce(inputWithInvalidSpace) }).toThrow('Input invalid.')
    })
  })
})
