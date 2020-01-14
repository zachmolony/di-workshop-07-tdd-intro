var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should check cool', function() {
    result = mm.isCool(2232)
    expect(result).to.true
  })

  it('should sum', function() {
    result = mm.doSum([2, 4, 2, 3])
    expect(result).to.equal(11)
  })

  it('should multiply array', function() {
    result = mm.multiplyArray([2, 4, 6, 8], 2)
    expect(result).to.deep.equal([4, 8, 12, 16])
  })

  it('should find mean', function() {
    result = mm.mean([2, 4, 6])
    expect(result).to.equal(4)
  })

  it('should find factorial', function() {
    result = mm.factorial(5)
    expect(result).to.equal(120)
  })

  it('should give random', function() {
    result = mm.random(5)
    expect(result).to.equal(120)
  })

})
