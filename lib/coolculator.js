class Coolculator {
  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  multiply(a, b) {
    return a * b
  }

  divide(a, b) {
    return a / b
  }

  isCool(a) {
    var s = a.toString().split('')
    return (s[0] == s[s.length - 1])
  }

  doSum(a) {
    return a.reduce((a, c) => {
      return a + c
    })
  }

  multiplyArray(a, m) {
    return a.map(x => x * m);
  }

  mean(a) {
    return this.divide(this.doSum(a), a.length)
  }

  factorial(x) {
    return (x == 1 ? 1 : x * this.factorial(x - 1))
  }
}

m = new Coolculator()
console.log(m.factorial(5))

module.exports = Coolculator
