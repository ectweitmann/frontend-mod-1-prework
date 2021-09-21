/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  increaseLikes(newLike) {
    this.numberOfLikes = this.numberOfLikes + newLike;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
};

// Create instances of Tweet class
var funnyTweet = new Tweet(
  "Ethan", // Author of tweet
  "2020 is what 2012 tried so hard to be.", // Content of tweet
  "11:25 AM - September 21, 2021", // Timestamp of tweet
  1000000, // Number of likes
  ["OMG Yes!!", "SO True.", "I'd take 2012 over 2020 any day 🙌🏻"]); // List of comments

console.log(funnyTweet);

var angryTweet = new Tweet(
  "Ethan", // Author of tweet
  "If I forget to add a semicolon to the end of a command in Javascript one more time, I'M GONNA LOSE IT.", // Content of tweet
  "11:37 AM - September 21, 2021", // Timestamp of tweet
  86, // Number of likes
  ["Been there.💀", "I don't understand what this means?", "LOL 😂"]); // List of comments

console.log(angryTweet);

var honestTweet = new Tweet(
  "Ethan", // Author of tweet
  "I'm obsessed with Chvrches new album. It SLAPS.", // Content of tweet
  "11:42 AM - September 21, 2021", // Timestamp of tweet
  3, // Number of likes
  ["They're playing at the Paladium in LA in December! We should go!!"]); // List of comments

console.log(honestTweet);

var fillerTweet = new Tweet(
  "Ethan", // Author of tweet
  "I can't think of what to put here.", // Content of tweet
  "11:50 AM - September 21, 2021", // Timestamp of tweet
  0, // Number of likes
  []); // List of comments

console.log(fillerTweet);

var hungryTweet = new Tweet(
  "John Doe", // Author of tweet
  "TGILT definition: Thank God It's Lunch Time.🙏🏻😭🥳", // Content of tweet
  "12:30 PM - September 21, 2021", // Timestamp of tweet
  50000, // Number of numberLikes
  ["Highlight of my day, everyday 🙌🏻", "Can't wait. I'm gonna have some delicious goulash!!", "I don't really care for lunch tbh"]); // List of comments

console.log(hungryTweet);
console.log("------------------ ⬇️ Updated likes/comments for specific Tweets below ⬇️ ------------------");

// Test out Tweet class methods
honestTweet.increaseLikes(57);
console.log(honestTweet);

funnyTweet.addComment("This is hilarious!!😂 There's no way you came up with this!🤪");
console.log(funnyTweet);

fillerTweet.addComment("Come on, you're more creative than this tweet. You can do better 👎🏻");
console.log(fillerTweet);
