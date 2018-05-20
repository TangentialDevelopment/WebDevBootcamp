var age = prompt("what is your age");

if (age < 0) {
  console.log("Invalid entry - user entered a negative value");
}

else if (age == 21) {
  console.log("Happy 21st birthday!!");
}

else if ((age % 2) === 1) {
  console.log("Your age is odd!");
}

else if (age % Math.sqrt(age) === 0) {
  console.log("Perfect sqaure!");
}

else {
  console.log("Wow you are " + age + " years old!");
}