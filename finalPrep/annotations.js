// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Declare a function named buildABear that takes 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare a variable named greeting and assign it to a string
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declare a variable named demographics and assign it to an array
  var demographics = [name, age];
  // Declare a variable named powerSaying and assign it to a string
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declare an object called builtBear
  var builtBear = {
    // Create a key named basicInfo assigned to the value of the variable demographics
    basicInfo: demographics,
    // Create a key named clothes assigned to the value of the parameter clothes
    clothes: clothes,
    // Create a key named exterior assigned to the value of the parameter fur
    exterior: fur,
    // Create a key named cost assigned to the value 49.99
    cost: 49.99,
    // Create a key named sayings assigned to an array comprised of 3 elements
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Create a key named isCuddly assigned to the value true
    isCuddly: true,
  };
  // End the function and return the value of the builtBear object
  return builtBear
}
// Call the function buildABear and pass it 5 arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Call the function buildABear and pass it 5 arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



// Declare a function named FizzBuzz that takes 3 parameters
function fizzBuzz(num1, num2, range) {
  // Create a for loop that loops for as long as i is less than or equal to the value
  // of the range parameter
  for (var i = 0; i <= range; i++) {
    // Check if the modulo of i divided by num1 is strictly equal to 0
    // and the modulo of i divided by num2 is also strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
      // Log to the console 'fizzbuzz' if the prior condition is true
      console.log('fizzbuzz');
      // Check if only the modulo of i divided by num1 is strictly equal to 0
    } else if (i % num1 === 0) {
      // Log to the console 'fizz' if the immediately prior condition is true
      console.log('fizz');
      // Check if only the modulo of i divided by num2 is strictly equal to 0
    } else if (i % num2 === 0) {
      // Log to the console 'buzz' if the immediately prior condition is true
      console.log('buzz');
      // What to do if none of the prior conditions are found true
    } else {
      // Log to the console the value of i
      console.log(i);
    }
  }
}
// Call the fizzBuzz function and pass it 3 arguments
fizzBuzz(3, 5, 100);
// Call the fizzBuzz function and pass it 3 arguments
fizzBuzz(5, 8, 400);
