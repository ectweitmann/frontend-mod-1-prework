// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "King Coder";
var specialAbility = "technopath";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "If you don't know, " + heroName + " is the name; else, prepare to be refactored!";
var catchphrase = `My ${specialAbility} ability ensures that this goes just as I scripted!`;

// Declare two variables - power AND energy - set to integers
var power = 1;
var energy = 0;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Emperor EMP", "Anti-Automation", "King Pulley"];
var sidekicks = ["Typing Temp", "Java the Hutt", "Loop Master"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Dark Age Heretic");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel < 10) {
    console.log("Meh. Hard Pass.");
  } else if (dangerLevel >= 10 && dangerLevel <= 50) {
    console.log(saveTheDay);
  } else {
    console.log(badExcuse);
  }
}
//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

assessSituation(99, announcement, excuse) // Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse) // Should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse) // Should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Hungry Mungry",
  smell: "rotten eggs",
  weight: 1000000,
  citiesDestroyed: ["Brooklyn", "Chicago", "New Orleans", "San Fransico"],
  luckyNumbers: [6, 66, 666],
  address: {
    number: 666,
    street: "Elm",
    state: "Ohio",
    zip: "43231"
  }
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000
  }
  gainPower(addedPower) {
    this.powerLevel = this.powerLevel + addedPower;
  }
}

// - Create 2 instances of your SuperHero class
var firstHero = new SuperHero("Unstoppable", "invulnerability", "unknown");
var secondHero = new SuperHero("Mac Attack", "master of branding", 45);

console.log(firstHero);
console.log(secondHero);

// Reflection
// What parts were most difficult about this exerise?
/*
The most difficult part of this exercise for me was understanding that I need to
uncomment the test cases for the assessSituation test case.
*/
// What parts felt most comfortable to you?
/*
I felt comfortable with every part of this process. Sometimes I was a little confused
by the instructions, but once I understood what they were asking of me I was confident
coding it.
*/
// What skills do you need to continue to practice before starting Mod 1?
/*
I'd like to improve my typing. I am a relatively fast typer but I want to get more
efficient and master proper finger placement. Sometimes projects take me longer simple
because I'm making typing errors because my fingers are in the wrong place.
*/
