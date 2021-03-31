// DataTypes: undefined, null, string, number, object, symbol

var myName;
myName = "John";
console.log(myName)

myName = 1;
console.log(myName)

var sum = 10 + 10;
console.log(sum)

var product = 10.1939 * 10;
console.log(product);

var rem = 11 % 3;
console.log(rem);

var a = 10;
console.log(a += 12);
console.log(a -= 5); // Any other operator can be shortened
// compound assignment with augmented (operator name)
// Also works for strings (funny)

// Numbers can be decimal (float).
// You can do any mathematical operation (/, -)

// Escape string
var myStr = "I am a \"double quote\" inside another \"double quote\"";
console.log(myStr)

// we could also...
var otherStr = 'I\'m also a "single quote" inside a "single quote"';
console.log(otherStr);

var anotherStr = `I\'m also a 'single quote' inside a "double quote"`;
console.log(anotherStr);

var myName = "Churchill"
var greetings = "\nMy name is " + myName + ". How are you?";
console.log(greetings);

// Appending variables to strings
var adj = "awesome";
var str = "I am very ";
str += adj;
console.log(str);
console.log(str.length);

// Arrays
var myArray = ["this", "is", 1, "array"];
console.log(myArray);

var nestedArray = [["first", "array"], ["second", ["one", "with", "another"]]];
console.log(nestedArray[0]);
console.log(nestedArray[0][0]);

// Adding items to an array (like append)...we use push
var ourArray = [1, 2, 3];
ourArray.push(4);
console.log(ourArray);

var removedFromOurArray = ourArray.pop();
console.log(ourArray);
console.log(removedFromOurArray);

var removedFirstFromOurArray = ourArray.shift();
console.log(ourArray);
console.log(removedFirstFromOurArray);

// unshift adds to the front of the array

function reusableFunction() {
    console.log("This is a reusable function");
}

reusableFunction();
// They can accept args too