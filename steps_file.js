// in this file you can append custom step methods to 'I' object
const fs = require('fs')
const script = fs.readFileSync('./index.user.js', { encoding: 'utf8' })

module.exports = function () {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    injectScript() {
      this.executeScript((s) => {
        eval(s)
      }, script)
    }
  })
}
