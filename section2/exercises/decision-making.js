/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
//The value of doorChoice is being compared to that of 1 to check and see if they are equal. Based on the result of this condition 1 of two outcomes will be executed.
//If the condition is found to be true: Than the value of the variable bearClothing is re-assigned to be "hat".
//On the other hand, if the condition is found to be false: the value of bearClothing is re-assigned to be "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
//the variable bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//the bearClothing value would be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
//The value of the variable bearChoice is being compared to the value of 1 to see if they are the exact value.
//If the above condition is found to be true, then the stories outcome is that we offer the bear our hat, resulting in it showing us a secret passage outcome.
//Else if the first condition is found to be false and instead the value of bearChoice is found to equal 2, then the stories outcome different.
  Instead, we tell the bear that his clothing is too small, which causes it to cry.
//Else if the prior to conditions are found to be false and instead the value of bearChoice is found to equal 3, then outcome is different yet again.
  In this scenario, we run as fast as we can into the next room to find that it is full of snakes.
//Finally if all of the prior conditions are returned false, then none of those possible outcomes take place.
  Instead, the conclusion of the story is that we stay with the bear and become it's best friend.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//The final outcome would be that we run as fast as we can into the next door only to find that it's full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//The final outcome of the story will be that we tell the bear that its hat is too small, which makes it start to cry.

7. What is your favorite ending?
//My favorite ending is the one in which I become best friends with the bear.

*/
