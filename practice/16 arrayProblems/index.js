function printReverse (input) {
  var len = input.length - 1
  for (var i = len; i >= 0; i--) {
    console.log(input[i])
  }
}

// function isUniform (input) { my solution
//   console.log('isUniform')
//   for (var i = 0; i < (input.length - 1); i++) {
//     if (input[i] !== input[i + 1]) {
//       return false
//     }
//   }
//   return true
// }
function isUniform (arr) {
  var first = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false
    }
  }
  return true
}
// forEach doesnt work because when it returns false, it only breaks out of the internal function in the for each. so it always returns true

function sumArray (input) {
  var sum = 0
  input.forEach(function (num) {
    sum += num
  })
  return sum
}

function max (input) {
  var high = 0
  input.forEach(function (test) {
    if (test > high) {
      high = test
    }
  })
  return high
}

var test = ['a', 'b', 'c']
printReverse(test)

console.log(isUniform([1, 1, 1, 1]))
console.log(isUniform([2, 1, 1, 1]))
console.log(isUniform(['a', 'b', 'c', 'd']))
console.log(isUniform(['a', 'a', 'a', 'a']))
console.log(isUniform(['a', 'a', 'a', 'b']))

console.log(sumArray([1, 2, 3]))
console.log(sumArray([10, 3, 10, 4]))
console.log(sumArray([-5, 100]))

console.log(max([1, 2, 3]))
console.log(max([10, 3, 10, 4]))
console.log(max([-5, 100]))
