//Question 1: 
//Array with provided numbers shown below and logged out
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Subtraction of the first element from the last.
// Using the slice operator to identify the first and last elements
var f = ages.slice(0, 1);
var l = ages.slice(-1);
console.log(l - f);


//using .push to add a new age
ages.push(101);

console.log(ages);
//repeating steps to indicate the method works for arrays of different lengths
var f = ages.slice(0, 1);
var l = ages.slice(-1);
console.log(l - f);

//for loop to find average
var sum = 0;
for (i = 0; i < ages.length; i++) {
//find the sum here in statement
    sum = sum + ages[i];
    //average is equal to the sum divided the number of ages (age.length)
        average = sum / ages.length;
}
console.log(average)
//Question 2:
//creating array of given names
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);
//finding the average number of letters per name using a for loop
//using for loops as number of iterations is fixed
//initialization, conditions
var nameLengths = [];
//statements to be executed
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
var sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum/names.length);

//another for loop to concatenate names. 
var stringOfNames = "";
for (let i = 0; i < names.length; i++) {
    stringOfNames += names[i] + " ";
}
console.log(stringOfNames);

//Question 3:
//The last element of an array can be access in several ways;
//-The pop method will remove the last element of an array and return it 
//-Using the slice method will directly identify and return the any element of the array without modifying the array 
//-One can also use the array length property (array.length -1) to find the last element
//The array.at method uses the index of the array to find the last element (array.length -1)

//Question 4:
//The first element of an array also has several methods of being accessed;
//-Similar to the last element, one can use the slice method to find the first element
//-The shift method is the same as the pop method but works for the first element instead of the last
//The array length property is applicable here as well
//the array.at method is applicable here as well

//Question 5:
//New array to show length of names in array. Uses map function to create new array populated with length property of each name 
var nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths);
//Question 6:
//using a for loop to find the sum of the name lengths via an addiiton operator use in my statement
var sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum)
//Question 7:
//function which takes 2 parameters as arguments and returns the word concatenated to itself n number of times
// result is set to equal the word + itself n times (i < n)
function questionSeven(word, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}

//passing in arguments to parameters
console.log(questionSeven("Hello", 3))

//Question 8:
//used an arrow function this time
//also utilized template literal to simplify code (no need to add " " for space between names)
var createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('Jack', 'Souders'))

//Question 9:
//array of numbers
var numbers = [1, 45, 12, 10, 33]; 
//function with parameter that uses array as argument
function isGreaterThan100(numbers) {
//find sum of numbers in array
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
//if sum is greater than 100 then return true 
} if (sum > 100) {
    return true;
}}

console.log(isGreaterThan100(numbers));

//Question 10:
//array of numbers
var numbers = [5, 13, 7, 15, 10];
//reduce method in arrow function to find sum of array then divide by array length = average 
var average = numbers => numbers.reduce((a, b) => a + b) / numbers.length;
console.log(average(numbers));

//Question 11:
//two arrays of numbers
var array1 = [2, 6, 7, 14];
var array2 = [1, 4, 2, 3];

//function which uses array1 and array2 as parameters
function createAverage(array1, array2) {{
//find sum and then average for each array
var sum = 0;
for (i = 0; i < array1.length; i++) {
    sum = sum + array1[i];
        average1 = sum / array1.length;
}
var sum = 0;
for (i = 0; i < array2.length; i++) {
    sum = sum + array2[i];
        average2 = sum / array2.length;
    //if average 1 is greater than average 2 then return true
}}if (average1 > average2) 
return true;
}
console.log(createAverage(array1, array2));


//Question 12:
//declare variables (isHotOutside: boolean, moneyInPocket: number)
var isHotOutside = true;
var moneyInPocket = 11;
//function to determine requirements of variables
function willBuyDrink(isHotOutside, moneyInPocket) {
//if isHotOutside equals true and moneyInPocket is greater than 10.50, then willBuyDrink will be returned as true
    if (isHotOutside && (moneyInPocket > 10.50)) {
        return true;
    }}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Question 13: 
//Used an arrow function to write a callback function which writes out three of Joe Burrow's skills
//used the 'this' keyword to refer to the object (Player) 
var player = {
    name: 'Joe Burrow',
    skills: ['Passing', 'Scrambling', 'Play-calling'],
  
    showSkills() {
      this.skills.forEach(skill => {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  player.showSkills();
  