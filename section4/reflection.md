## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

- My workflow improved in terms of my efficiency. I worked hard to implement the Pomodoro (POM) technique as I finished this final section of the Mod 1 Prework. Rather than implement the 25-35 minute work block, I elected to go with a 45-60 minute period of work time. Beyond that my workflow wasn't all that different. The structure of the POM technique was already something I naturally applied to my work time. However, the process of the literally writing out my goal, and setting a timer helped to keep me locked in for the entire time block.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

- It went well. Unlike in weeks past where I would just start working, I started out by setting specific goals for my time (e.g. complete classMethods.js & tweets.js). I think this helped to keep me from getting distracted/slowing my progress by attempting to accomplish tasks simultaneously. What's more I am glad that I decided to extend the lengths of time that I would set my work timer too, this helped me to get into and keep a rhythm for a longer period of time than if I had only set my work time for 25 minutes. To conclude, I am convinced of the POM techniques effectiveness and plan to implement it as I start the actually program come October.

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class  
  **Array**
  - Using an array would allow us to store all the students' names in a single variable (e.g.`studentRoster`). An object would be better suited for storing properties of an individual student.

  * List of states and their capitals
  **Array**
  - Assuming you follow the same naming convention when assigning each state/capital pair to an index (e.g. "State, Capital"), then I think an array is the best choice (if I am limited to picking one of the two) because it is list, and arrays are typically best for storing lists. Moreover, arrays have built-in mutator and accessor methods which would make it easier to change/access the elements in the array.  

  * List of things to pack for vacation
  **Object**
  - An object would be best store this information because of the ability to create key-value pairs. Creating an object called `packingList` would allow you to create key (e.g.`socks`) and value (e.g. 7) pairs within the `packingList` object to account for all the items (i.e. properties) on your packing list.

  * Names of all the Instagram accounts I follow
  **Array**
  - Arrays are best for storing lists of related information, these Instagram account names are related by the fact that I follow all of them.

  * List of student names and their cohort
  **Array**
  - Like the "List of states and their capitals" example above, an array would be best for storing this list so long as the manner in which the data is added to the array is consistent across all the values (e.g. "Student, Cohort" or something to that effect).

  * Ingredients and amount of each ingredient to bake a cake
  **Object**
  - Objects provide a greater structure within to store this recipe in part to objects being comprised of key-value pairs. Thus, within the `recipe` object one could add all the ingredients and their respective amounts as key-value pairs in the object.

  * All my favorite restaurants
  **Array**
  - This is a list of related items, ergo an array is best to house this collection of values.

5. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

- In the fintech app SoFi an object would be used for buy/sell orders for stocks. Examples of possible key-value pairs:
  1. account number: "123456789"
  2. date: "09/21/2021"
  3. order type: "market"
  4. stockQuantity: 50
  5. pricePerShare: 17.52
  6. totalCost: 876

6. What questions do you still have about classes and/or Objects?
- What is the best way to format properties that are really long strings? (Like in the objects.js exercise)
