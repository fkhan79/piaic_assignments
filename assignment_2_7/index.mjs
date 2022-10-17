//Assignment 2
/*Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?*/
console.log("Assignment 2:");
let personName = "Faisal Khan";
console.log(personName);
console.log("\n\n");
//Assignment 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Assignment 3:");
let personNameJumbledCase = "A case of Total RanDOM KIND A word LIST.";
console.log("In Lower Case: " + personNameJumbledCase.toLowerCase());
console.log("In Upper Case: " + personNameJumbledCase.toUpperCase());
console.log("In Title Case: " + convertToProperCaseUsingArrays(personNameJumbledCase));
console.log("\n\n");
function convertToProperCaseUsingArrays(temp) {
  let wordList = temp.toLowerCase().split(" ");//Convert the sentence in to an array of words on the basis of spaces
  let stringTemp = "" //Initialize a temporary variable to concatenate String after case conversion
  for (let i = 0; i < wordList.length; i++) {
    stringTemp += wordList[i][0].toUpperCase() + wordList[i].slice(1).toLowerCase() + " ";
  }
  return stringTemp;
}

//Assignment 4/5
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
Your output should look something like the following, including the quotation marks:
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message.*/
console.log("Assignment 4/5:");
let message = "Your life is the sum of a remainder of an unbalanced equation inherent to the programming of the matrix. " +
  "You are the eventuality of an anomaly, which despite my sincerest efforts " +
  "I have been unable to eliminate from what is otherwise a harmony of mathematical precision.";
let theAuthor = "The Architect";
console.log(theAuthor + ` once said,` + `"` + message + `"`);
console.log("\n\n");
//Assignment 6
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
console.log("Assignment 6:");
let stringWithEscapeSequences="\tHello\n\tWorld    ";
console.log(stringWithEscapeSequences);
//Now Strip the spaces from start and end
console.log(stringWithEscapeSequences.trim());
console.log("\n\n");
//Assignment 7
/*Number Eight: Write addition, subtraction, multiplication, 
and division operations that each result in the number 8. 
Be sure to enclose your operations in print statements to see the results.*/
console.log("Assignment 7:");
let number8=2+2+2+2
console.log("Addition: 2+2+2+2="+number8) 
number8=16-8
console.log("Subtraction: 16-8="+number8) 
number8=4*2
console.log("Multiply: 4*2="+number8) 
number8=Math.pow(4,3)/4
console.log("Exponent: Math.pow(4,3)/4="+number8) 
number8=Math.pow(2,3)
console.log("Exponent: Math.pow(2,3)="+number8) 
console.log("\n\n");

