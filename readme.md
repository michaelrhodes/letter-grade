# letter-grade

Calculate the letter grade for a given percentage. The data comes from this [Wikipedia page](https://en.wikipedia.org/wiki/Academic_grading_in_the_United_States#Numerical_and_Letter_grades) 😬

[![Build status](https://travis-ci.org/michaelrhodes/letter-grade.svg?branch=master)](https://travis-ci.org/michaelrhodes/letter-grade)

## Install
```sh
$ npm install letter-grade
```

### Example
``` js
var grade = require('letter-grade')

grade(100)
> 'A+'

grade(59)
> 'F'
```

### License
[MIT](http://opensource.org/licenses/MIT)
