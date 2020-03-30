function calculateSwitch(answer) {
  switch (answer[1]) {
    case '+':
      return answer[0] + answer[2]
    case '-':
      return answer[0] - answer[2]
    case '*':
      return answer[0] * answer[2]
    case '/':
      return answer[0] / answer[2]
    default: return NaN
  }
}

function isUsableValue(value) {
  const operators = ['+', '-', '*', '/']

  return isNumb(value) || operators.includes(value)
}

function isNumb(value) {
  return !isNaN(value)
}

function isSkipAbleValue(value) {
  return value === ''
}

function calculate(calculationSteps) {
  let answer = []

  calculationSteps.forEach(calcElements => {
    if (!isSkipAbleValue(calcElements) && isUsableValue(calcElements)) {
      answer.push(calcElements)
    }
  })

  return calculateSwitch(answer)
}

module.exports = calculate
