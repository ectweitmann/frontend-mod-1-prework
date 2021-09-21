/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
/*
class Dog {

}

var goldenRetriever = new Dog();
var italianGreyhound = new Dog();

console.log(goldenRetriever);
console.log(italianGreyhound);

// Prompt 2: Snack
class Snack {

}

var oreo =  new Snack();
var goldFish = new Snack();

console.log(oreo);
console.log(goldFish);

// Prompt 3: Shirt
class Shirt {

}

var vNeck = new Shirt();
var turtleNeck = new Shirt();

console.log(vNeck);
console.log(turtleNeck);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog {
  constructor() {
    this.name = "London";
    this.size = "large";
    this.color = "golden white";
  }
}

var goldenRetriever = new Dog();
console.log(goldenRetriever);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.taste = "sweet";
    this.type = "cookie"
    this.shape = "circle";
  }
}

var oreo = new Snack();
console.log(oreo);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "medium";
    this.color = "black";
    this.sleeveLength = "short";
  }
}

var tShirt = new Shirt();
console.log(tShirt);
*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(dogName, dogSize, dogColor) {
    this.name = dogName;
    this.size = dogSize;
    this.color = dogColor;
  }
}

var italianGreyhound = new Dog("Dante", "small", "grey/blue");
var yellowLab = new Dog("London", "big", "golden yellow");

console.log(italianGreyhound);
console.log(yellowLab);

// Prompt 2: Snack
class Snack {
  constructor(snackTaste, snackType, snackShape) {
    this.taste = snackTaste;
    this.type = snackType;
    this.shape = snackShape;
  }
}

var oreo = new Snack("sweet", "cookie", "circle");
var goldFish = new Snack("salty", "cracker", "fish");

console.log(oreo);
console.log(goldFish);

// Prompt 3: Shirt
class Shirt {
  constructor(shirtSize, shirtColor, fabric) {
    this.size = shirtSize;
    this.color = shirtColor;
    this.material = fabric;
  }
}

var tShirt = new Shirt("large", "green", "polyester");
var henley = new Shirt("large", "grey", "cotton");

console.log(tShirt);
console.log(henley);
