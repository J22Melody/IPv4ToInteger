const SPACE = ' '
const DOT = '.'
const BASE = Math.pow(2, 8)

const IPv4ToInteger = (IPv4String) => {
  const groups = IPv4String.split('.')

  return groups.reverse().reduce((sum, value, index) => {
    const finalValue = value.trim()

    if (finalValue.indexOf(SPACE) !== -1) {
      throw 'Input invalid.'
    }

    return sum + parseInt(finalValue, 10) * Math.pow(BASE, index)
  }, 0)
}

const IPv4ToIntegerIterateOnce = (IPv4String) => {
  let sum = 0
  let exponent = 0
  let current = ''
  let digitStart = false
  let digitEnd = false
  const calculateSum = () => sum = sum + parseInt(current, 10) * Math.pow(BASE, exponent)

  for (let i = IPv4String.length - 1;i >= 0;i = i - 1) {
    const character = IPv4String[i]

    if (character === SPACE) {
      if (digitStart && !digitEnd) {
        digitEnd = true
      }

      if (i === 0) {
        calculateSum()
      }

      continue
    }

    if (character === DOT) {
      calculateSum()
      digitStart = false
      digitEnd = false
      exponent = exponent + 1
      current = ''
    } else {
      if (digitEnd) {
        throw 'Input invalid.'
      } else {
        digitStart = true
      }

      current = character + current

      if (i === 0) {
        calculateSum()
      }
    }
  }

  return sum
}

module.exports = {
  IPv4ToInteger,
  IPv4ToIntegerIterateOnce,
}
