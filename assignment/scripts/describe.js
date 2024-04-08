// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and assign it the value of 'Dane'.
// Then, we make a conditional statement: 
// If name is Mary, we console log "Hi, Mary!"
// Otherwise, "How do you do?" will be console log. 
// Since name = Dane, it will log out 'How do you do?
//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create two variables: 'secret' and 'code'. We set 'code' to equal the vaule of 123;  
// We then make a conditional statement for the variable 'code' :
// if code is equal to 123; set 'secret' to be 'super' , and 'code' to be ('code' * 2); 
// if code is greater than 250; set 'secret' to be 'duper'.
// We check to see if 'code' equal 123, and it does. We multiply 123 by 2, 246 < 250
// We console log  the value of 'secret' and it will log out  'super'.
// 
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create variables: 'isStudent' set the value to true; 'age' set value to equal 34; 'zip' set value to equal '55407';
// We then make a compound conditional statement:
// If 'isStudent' is true, and  'zip' is greater than 80000, console log, 'You're a student on the West Coast!' ;
// If 'isStudent' is false, or age is less than 30, console log, 'What are your hobbies?';
// If 'isStudent' is ture, console log 'Welcome to Prime!';
// otherwise, console log "How about the weather?"
// when we evaluate the given variables, and values, we see that the 'isStudent' is true, but the zip is not greater than 80000.
// therefore, we skip the first two conditions. We console log "Welcome to prime!"
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - colorOne -- red, but the instructions ask to set to 'blue';
// should be: let colorOne = 'blue';
let colorOne = 'red';

// FIX - colorTwo -- blue, instructions ask to set to 'red';
// Should be: let colorTwo = 'red';
let colorTwo = 'blue';

let mix = true;

// Fix -- results -- instructions ask to set colorOne and colorTwo to 'purple' if mix equal true;
// Should be: if mix:
                 let colorOne = 'purple';
                 let colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;

// FIX --variable-- const, but instructions ask for variable, not a constant variable. Logging const time, will make time a variable that can not be changed.
// should be: let time = 4;
const time = 4;

// FIX -- conditional statement --instructions wants to check if temp is higher than 39 AND if time is greater or equal to 4
// should be: if (temp > 39 && time >= 4);
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;

// FIX -- variable -- const, insturctions ask to create two variables, not a constant variable
// Should be: let minAge = 21;
const minAge = 21;

if(minAge <= age) {

  // FIX -- console.log('no entry'); insturctions want to log 'enter' if age is greater or equal to minAge.
  // should be:  console.log('enter')
  console.log('no entry');

  // FIX --console.log('enter'), This is the value displayed if the conditional statment is true. There wasn't any additional information regarding and 'else' statement. 
  // However, an else statement can be made such as: 
                                                    else {
                                                      console.log('do not enter'); to give a different result if the statement doesn't meet the conditions.
                                                    }
} else {
  console.log('enter');
}
*/

