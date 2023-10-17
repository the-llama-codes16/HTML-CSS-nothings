/* <-- TEMPORARY COMMENT MARK

/* 
JavaScript Study Sheet
Reference: https://www.javascript.info


"use strict";
// The statement above explicitly enables the script to work the modern way.
// We can also use that inside functions, so only that function works the modern way.
// Must always write at the top to work!!

// Must enter the JavaScript world with a proper greeting
alert("Hello World!")

// Create a page that shows a message "I'm JavaScript!"
alert("I'm JavaScript!")

// TASK: Working with Variables
let admin;
let name;
name = "Leeloo";
admin = name;
alert(admin);

let ourPlanetName = "Earth";
let currentUser = "User 01";
let thisIsABigInt = 123456789012345678901234567890n; // Note the n at the end
let aStringWithDoubleQuotes = "Both keys at the same time?";
let aStringWithSingleQuotes = "Three words Vera: kid, nap, ping!";
let aStringWithBackTicks = `${name} Dallas Multipass`; // Can only embed values in strings with backticks!
alert(aStringWithBackTicks);

let typeOfAVar = typeof thisIsABigInt; //typeof is an operator, not a function
alert(typeOfAVar);


// INTERACTION: alert, prompt, confirm
// Inserts a message with OK and Cancel buttons. If user cancels, null is returned.
let userAge = prompt("How old are you?"); 
alert(userAge);
// Inserts a message with OK and Cancel buttons. It returns true for OK and false for Cancel.
let isBoss = confirm("Are you the boss?"); 
alert(isBoss);


// TASK: A Simple Page: Create a webpage that asks for a name and outputs it
let userName = prompt("Como se llama usted?");
alert(`Su nombre es ${userName}. Bienvenido!`);

// CONVERSIONS
let numToString = String(5);
alert(numToString);
let stringToNum = Number("16");
alert(stringToNum);
let boolToNum = Number(true); // true is 1, false is 0
alert(boolToNum);
// Anything intuitively "empty" is false, such as 0, null, an empty string, etc. BUT NOT the "0" string!
let anyToBool = Boolean(0); 
alert(anyToBool);
let anyToBoolVer2 = Boolean("He's dead Jim!");
alert(anyToBoolVer2);

// BASIC OPERATORS/MATHS
// The usual + - * / % **
// + Converts any number to string, if the other operand is a string
let strAndNumUnited = "Who's counting? " + 1;
alert(strAndNumUnited);

// BUT take note of the string's position in the expression!
let strAndNumHybrid = 2 + 2 + "1";
alert(strAndNumHybrid);
let anotherStrAndNumHybrid = 2 + "1" + 2;
alert(anotherStrAndNumHybrid);

// + also converts a string to a number ONLY IF POSSIBLE, it can be a shorthand for Number()
let strButNum = +"23";
alert(strButNum);
let boolButNum = +false;
alert(boolButNum);
let strButCannotBeNum = +"hello";
alert(strButCannotBeNum);

// SHORTHAND
let a = 1;
a = a + 1;
let b = 1;
b += 1;
alert(b == a);

// INCREMENT AND DECREMENT can only be used on variables!
let incr = 2;
incr++;
alert(incr);

// Prefix increment/decrement returns the value after applying the change
let preIncr = 2;
alert(++preIncr);
// Postfix increment/decrement returns the value before applying the change
let postIncr = 2;
alert(postIncr++);

// COMMAS allows evaluation of several expressions, but only the result of the last one is returned
let commaSample = (1 + 2, 3 + 4);
alert(commaSample);

// COMPARISONS
// JavaScript attempts to convert the values to numbers if at least one is not a number
alert("2" > 1);
alert(0 == false);

// The strict equality operator checks without type conversion
alert("2" === 2);

// Null and undefined are sweethearts for ==, but not for ===
alert(`Alert == undefined: ${null == undefined}`);
alert(`Alert === undefined: ${null === undefined}`);

// Null and undefined will only equal with each other and nothing else
// When they are evaluated with anything except equality/inequality, they are treated differently:
// null -> 0, undefined -> NaN

// THE TERNARY OPERATOR
let age = prompt("How old are you?", 0);
let ageMessage = (age >= 18) ? "You're old!" : "You're young!";
alert(ageMessage);

let ageVer2 = prompt("How old are you?", 0);
let ageMessageVer2 = (ageVer2 < 3) ? "What a baby!" : (ageVer2 < 18) ? "You are young!": (ageVer2 < 100) ? "You're an adult!" : "What an unusual age...";
alert(ageMessageVer2);

// TASK: The Name of JavaScript
// Write an if..else construct which asks the official name of JavaScript and returns an appropriate output
let userResponse = prompt("What is the official name of JavaScript?");
let ansResponse = (userResponse == "ECMAScript") ? "Right!" : "You don't know? It's ECMAScript!";
alert(ansResponse);

// TASK: Show the sign
// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the variable is greater than 0
// -1, if less than zero
// 0, if equals zero
let userNumber = prompt("Enter a number:");
if (userNumber > 0){
    alert(1);
}
else if(userNumber < 0){
    alert(-1);
}
else if(userNumber == 0) {
    alert(0);
}

// TASK: Rewrite this if using the conditional operator '?'
// let result;
// if (a + b < 4){
//   result = 'Below';}
// else {
//   result = 'Over';}

let result = (a + b < 4) ? 'Below' : 'Over';

// LOGICAL OPERATORS
// The OR || finds the first truthy value, immediately returns it without executing the rest
// If all of the operands are false, the last value is returned
// The AND && works the same, but for falsy values
// AND has a higher precendence than OR
// NOT ! operator can be used to convert a value to a boolean such as
alert(!!"non-empty string");
// But you're better off using the function Boolean() instead

// TASK: Check the Login
// Write the code which asks for a login with prompt
// If the visitor enters "Admin", then prompt for a password.
// If the input is an empty line or Esc, show cancelled.
// If the input is another string, then show "I don't know you"
let userIdentification;
let password;
userIdentification = prompt("Who's there?");
if (userIdentification == "Admin"){
    password = prompt("Password?");
    if (password == "TheMaster"){
        alert("Welcome!");
    }
    else if(password == "" || password == null) {
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if (userIdentification == "" || userIdentification == null){
    alert("Canceled");
}
else {
    alert("I don't know you.");
}

// NULLISH COALESCING OPERATOR ??
// A value is "defined" if it is neither null nor undefined
// It has the same precedence value as the OR || operator
// In a ?? b, it returns a if a is defined. Otherwise, b is returned.
let user;
alert(user ?? "Anonymous");

let firstName = null;
let lastName = null;
let nickName = "The Philly Flash";
alert(firstName ?? lastName ?? nickName);

// JavaScript forbids the use of ?? together with && and || unless the precedence is explicitly specified with parentheses.
TEMPORARY COMMENT MARK --> */ 

// LOOPS: WHILE AND FOR
// To break out of two loops, add a label for the loop and call it when using break

myLoop: for(let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, "");
        // Exit the entire loop if an empty string or ESC is entered
        if (!input) break myLoop;
        alert(`${i}, ${j}`);
    }
}
