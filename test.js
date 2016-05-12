var test = require('tape')
var grade = require('./index')

test('it works', function (assert) {
  var percent = 101
  while (percent--) {
    var letter = (
      percent >= 95 ? 'A+' :
      percent >= 93 ? 'A' :
      percent >= 90 ? 'A-' :
      percent >= 87 ? 'B+' :
      percent >= 83 ? 'B' :
      percent >= 80 ? 'B-' :
      percent >= 77 ? 'C+' :
      percent >= 73 ? 'C' :
      percent >= 70 ? 'C-' :
      percent >= 67 ? 'D+' :
      percent >= 63 ? 'D' :
      percent >= 60 ? 'D-' :
      percent >= 0 ? 'F' :
      void 0
    )
    assert.equal(
      grade(percent), letter,
      percent + '% == ' + letter
    )
  }

  assert.equal(grade(101), void 0) 
  assert.equal(grade(-1), void 0) 
  assert.end()
})
