const Assertion = require("./Assertion.js");
class Equal extends Assertion {
  check() {
    return this.val1 === this.val2;
  }
}

module.exports = Equal;
