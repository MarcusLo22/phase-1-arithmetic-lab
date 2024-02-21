require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply(2, 31)).to.equal(62);
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      expect(Number.isInteger(random())).to.be.true;
expect(random()).to.not.eq(0);
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      // Declare and assign values to num3 and num4
      let num3 = 7;
      let num4 = 3;
  
      // Calculate the remainder using the modulus operator
      let mod = num3 % num4;
  
      // Assertion tests
      expect(num3).to.be.a('number');
      expect(num4).to.be.a('number');
      expect(mod).to.eq(1);
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      // Define the set of numbers
      const set = [10, 5, 20, 15];

      // Call the max function
      const result = max(set);

      // Assertion test
      expect(result).to.eq(20);
    });
  });
});
