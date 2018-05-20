// adding methods to an object
var obj = {
  name: 'chuck',
  age: 45,
  isCool: false,
  friends: ['bob', 'tina'],
  add: function (x, y) {
    return x + y
  }
}

console.log(obj.add(10, 5))
