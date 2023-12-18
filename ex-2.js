//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  //Start coding here
  let emtryArray = [];
  for (let i = 1; i <= n; i++) {
    emtryArray.push(i.toString());
  }
  for (let j = 0; j < emtryArray.length; j++) {
    if (emtryArray[j] % 15 === 0) {
      emtryArray[j] = "FizzBuzz"
    } else if (emtryArray[j] % 3 === 0) {
      emtryArray[j] = "Fizz";
    } else if (emtryArray[j] % 5 === 0) {
      emtryArray[j] = "Buzz";
    }
  }
  return emtryArray;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
