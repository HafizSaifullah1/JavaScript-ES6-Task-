//#region  task 1

// Declaring variables outside of any function or block
// var a = "saifullah"
// let b = "khan"
// const c = "yosufzai"

// Logging all three variables to the console
// console.log(a) output: this is a
// console.log(b) output: this is b
// console.log(c) output: this is c
//#endregion

//#region  Task 2
// function ab() {
//     var a = "Hello"
//     let b = "can"
//     const c = "you speak"

// Logging inside the function (for reference)
//     console.log(a)  output: this is hello
//     console.log(b) output: this is can
//     console.log(c)  output: this is you speak
// }

// Calling the function to ensure the variables are initialized
// ab();
//#endregion

//#region  Task 3
// if (true) {
//     var x = "Apple"
//     let n= "Banana"
//     const z= "Peach"

//      // Logging inside the block (for reference)
//     console.log(x) output: this is var apple
//     console.log(n)output: this let banana
//     console.log(z)output: this is const peach
// }
//#endregion

//#region  Task 4
// console.log(hoisted) // Output: undefined

// var hoisted = "This is hoisting"

// console.log(hoisted) // output: this is hoisting
//#endregion

//#region  Task 5
// console.log(hoisting) // Output: ReferenceError: Cannot access 'hoisting' before initialization
// let hoisting = "this is let variable ";
// console.log(hoisting) // Output: This is let variable

// CONST
// console.log(hoisted) // Output: ReferenceError: Cannot access 'hoisted' before initialization
// const hoisted = "this is const variable";
// console.log(hoisted) // Output: This is const variable
//#endregion

//#region  Task 6
// var twice = "this first is var variable"
// var twice = "this second is var variable"
// console.log(twice) //output: this second is var variable

// let twice = "this is let variable"
// let twice = "this is let variable"
// console.log(twice)  //output: twice has already been declared

// const twice = "this is const variable"
// const twice = "this is const variable"
// console.log(twice) // output:twice has already been declared
//#endregion

//#region  Task Re-assignment 7
// var a = "Abdul"
// console.log(a) //output: Abdul
// a = "Basit"
// console.log(a) //output:Basit

// let b = "saif"
// console.log(b) //output: saif
// b ="ullah"
// console.log(b) //output: ulla

// const c ="KH"
// console.log(c) // outpur: KH
// c = "AN"
// console.log(c) //TypeError: Assignment to constant variable.

//#endregion

//#region Task Temporal Dead Zone (TDZ): 8
// {
// console.log(tdz) // ReferenceError: Cannot access 'tdz' before initialization
// let tdz = "zone"
// }
// {
//     console.log(zdt) //ReferenceError: Cannot access 'zdt' before initialization
//     const zdt = "this is const variable"
// }
//#endregion

//#region  Task When to use var, let, and const: 9
// function exampleVar() {
//     // `var` is function-scoped, so this variable is accessible throughout the function
//     var massage = "Hello"

//     if (true) {
//         var massage = "Hello Var"

//         console.log(" Inside if block:", massage) // Output: Inside if block: Hello, Var!

//     }
//     // `message` retains its value from the if block
//     console.log(" Inside if block:", massage) // Output: Inside if block: Hello, Var!
// }
// exampleVar();

// function example() {
//     let sum = 0;

//     for (let i = 0; i < 3; i++) {

//         sum += i;

//         console.log(i)

//     }
//     console.log(sum)
// }
// example();


// function example(){
//     const x = 10; // Output: 10
//     // console.log(x)

//   // x cannot be reassigned
//   // x = 20; // This would throw an error

//   // However, properties of objects declared with const can be changed
//     const obj = {
//         id:1,
//     }
//     obj.id ="New value"
//     console.log(obj.id) // Output: newValue
// }
// example();
//#endregion

//#region String Interpolation: 10

// Create variables for the first name and last name
// let firstName = "saifullah"
// let secondName = "khan"

// // Use a template literal to create a full name string
// let fullName= ` ${firstName} ${secondName}`

// //log the fullname to the  console
// console.log(fullName)
//#endregion

//#region  Multi-line Strings:11

// Create variables for the address components
// let address = "Sector 11A Flat Vip Complex"
// let flatNo = "A 103"
// let area = "North karachi"
// // Use a template literal to create a multi-line address string
// let sum=
// `${address}
// ${flatNo}
// ${area}
// `

// // Log the address to the console
// console.log(sum)
//#endregion

//#region Simple Expressions:12
// Create variables for two numbers
// let num1 = 20
// let num2 = 80
// // Use a template literal to create a string that includes the sum of the numbers
// let sunNumber = ` the sum of ${num1} and ${num2} is ${num1+num2}`

// console.log(sunNumber)
//#endregion

//#region Function Calls: 13

// function multiply(num1,num2){
// return num1 * num2

// }

// let number1 = 4;
// let number2 = 7;

// let sumNumber = `the product of ${number1} and  ${number2} is ${multiply(number1, number2)}`

// console.log(sumNumber);


//#endregion

//#region Creating a Tagged Template:14

// Define the tag function
// function simple(strings, ...values) {        strings: An array of string literals ....values: A rest parameter that captures the values interpolated in the template literal

//     console.log("Strings", strings)
//     console.log("Values", values)
// }
// // Variables for the template literal values
// let a = "Alice";
// let b = 18;

// // Use the tag function with a template literal string
//  simple = `my name is ${a} i am ${b} years old`

// console.log(simple)
//#endregion

//#region Formatting:15

// Define the tag function
// function toUpperCase(string, ...values) {

//     // Combine strings and values
//     let result = '';
//     string.forEach((string, index) => {
//         result += string + (values[index] !== undefined ? values[index] : '');
//     });
//   // Return the result in uppercase
//     return result.toUpperCase();
// };

// let name = "saif";
// let age = 12;

// let sum = toUpperCase `my name is ${name} i am  ${age} years old`
//  console.log(sum)


// // Define the tag function
//  function toLowerCase(string, ...values) {

//     // Combine strings and values
//     let result = '';
//     string.forEach((string, index) => {
//         result += string + (values[index] !== undefined ? values[index] : '');
//     });
//   // Return the result in uppercase
//     return result.toLowerCase();
// };

// let name = "saif";
// let age = 12;

// let sum = toLowerCase `my name is ${name} i am  ${age} years old`
//  console.log(sum)
//#endregion

//#region  Conditional Logic:16

// Create a variable for the current hour
// let currentHour = new Date().getHours();

// // Use a template literal to display a different message depending on the time of day
// let whether = `Good ${currentHour < 12 ? 'morning' : 'afternoon' }, the currentHour is ${currentHour}`

// console.log(whether)
//#endregion

//#region Loops within Template Literals:17
// let shoppingList = ["shirt", "pent", "shoes", "ballte",];


// Use a template literal to generate an HTML list from the array
// let htmlList = `
// <ul>
//   ${shoppingList.map(item => `<li>${item}</li>`).join('')}
// </ul>
// `
//${shoppingList.map(item => <li>${item}</li>).join('')} uses the map function to iterate over each item in the shoppingList array, converting each item to an <li> element. The join('') method combines these elements into a single string without any separators.

// console.log(htmlList)
//#endregion

//#region Escaping Backticks: 18

// Create a string that includes a backtick character using a template literal
// let backTick = `this is  a string with a backtick character: \``;

// console.log(backTick)
//#endregion

//#region Nested Template Literals:19

// let tableData = [
//     { name: "sufyan", age: 18, job: "front end developer" },
//     { name: "Ali", age: 19, job: "Engineer" },
//     { name: "zayan", age: 20, job: "software Engineer" }
// ]

// let htmlTable = `
// <table border="1">
//     <thead>
//        <tr>
//          <th>Name</th>
//          <th>Age</th>
//          <th>Job</th>
//        </tr>
//     </thead>
// <tbody>
// ${tableData.map(row =>`
// <tr>
//     <td>${row.name}</td>
//     <td>${row.age}</td>
//     <td>${row.job}</td>
// </tr>
//     `).join("")}
// </tbody>
// </table>
// `

// console.log(htmlTable)

//#endregion

//#region  Simple Condition: 20
// Create a variable age
// let age = 20;// You can change this value to test different ages

// // Use the ternary operator to assign a value to canVote
// let canVote = age >= 18 ? "Yes" : "No";

// console.log(canVote)
//#endregion

//#region  // Create a variable age 21
// Create a variable number
// let number = 4;  // You can change this value to test different numbers


// Use the ternary operator to assign a value to evenOrOdd
// let evenOrOdd = number <= 13 ? "even" : "odd";

// console.log(evenOrOdd)
//#endregion

//#region Grade Evaluation: 22
// Create a variable score
// let score = 55;  // You can change this value to test different scores

// // Use nested ternary operators to assign a value to grade
// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" :
//             score >= 60 ? "D" :
//             score >= 50 ? "E" : "F";

//   console.log(grade)
//#endregion

//#region  Login Status: 23
// Create a variable isLoggedIn
// let isLoggedIn= false; // You can change this value to test different statuses

// // Use the ternary operator to assign a value to statusMessage
// let statusMessage = isLoggedIn  ? "Welcome back!" :  "Please log in";

// console.log(statusMessage)

//#endregion

//#region  Discount Eligibility: 24
// Create variables isMember and purchaseAmount
//  let isMember = true;
//  let purchaseAmount= 150; // You can change this value to test different scenarios

// // Use the ternary operator to assign a value to discount
//  let discount = (isMember && purchaseAmount >100 ) ? 0.5* purchaseAmount :0;
// console.log(discount)
//#endregion

//#region  Determine Max Value:25

// Create a function maxValue(a, b) that returns the larger of the two numbers using the ternary operator
// function maxValue(a, b) {
//     return a > b ? a : b;
// }
// // Call the function with two numbers and log the result
// let result = maxValue(10, 30)
// console.log(result)
//#endregion

//#region Greeting Message:26
// Create a function greet(name) that returns a greeting message
// function greet(name){
//     return name ? `Hello ${name}` : "Hello,guste!"
// }

// // Call the function with a name and log the result
// let result1 = greet("saif!")
// console.log(result1) // Output: Hello, saif!


// // Call the function without a name and log the result
// let result2 = greet ("")
// console.log(result2) // Output: Hello, guest!
//#endregion

//#region Mapping Values: 27

// // Create an array of numbers
// let number = ["1","2","3","4","5","6","7","8","9","10"]

// // Use the map method with a ternary operator to create a new array
// let arr = number.map (number => number % 2 === 0 ? number * 2 : number * 3 )

// // Log the new array to the console
// console.log(arr)
//#endregion

//#region  Filtering Values:28
// Create an array of strings
// let string =["apple", "kiwi", "banana", "fig", "pear"]

// // Use the filter method with a ternary operator to create a new array
// let arry = string.filter(string => string.length > 3 ? true: false)

// // Log the new array to the console
// console.log(arry)
//#endregion

//#region Copying an Array:29
// Create an array originalArray with some elements
// let originalArray = ["saif","sufyan","khalid","lala"];

// // Use the spread operator to create a copy of originalArray called copiedArray
// let copiedArray = [...originalArray];

// // Log both arrays to the console to verify they are the same but not the same reference
// console.log("originalArray",originalArray)
// console.log("copiedArray",copiedArray)

// // Verify they are not the same reference
// console.log("are the same reference", originalArray === copiedArray);
//#endregion

//#region Merging Arrays: 30

// // Create two arrays array1 and array2
// let arry1= ["1","2","3","4","5"]
// let arry2= ["6","7","8","9","10"]

// // Use the spread operator to create a new array mergedArray that combines the elements of array1 and array2
// let mergedArray =[...arry1,...arry2]

// // Log mergedArray to the console
// console.log(mergedArray);

//#endregion

//#region Adding Elements to an Array:31
// Create an array numbers with some elements
// let number =[2,3,4,5];

// // Use the spread operator to add a new element at the beginning and at the end of the numbers array
// let updatedNum = [1,...number,6]

// // Log the updated array to the console
// console.log( "update Number 1 and 6:",updatedNum)

//#endregion

//#region Copying an Object:32

// // Create an object originalObject with some key-value pairs
// let originalObject = {  id:1,name:"Umer",  City:"Karachi", key:"0987",  }

// // Use the spread operator to create a copy of originalObject called copiedObject
// let copiedObject ={...originalObject,}

// // Log both objects to the console to verify they are the same but not the same reference
// console.log(originalObject)
// console.log(copiedObject)

// Verify they are not the same reference
// console.log("Are they the same reference?",originalObject === copiedObject)
//#endregion

//#region  Merging Objects:33

// Create two objects object1 and object2 with some overlapping keys
// let obj1={
//     id:1,
//     name:"Rohan",
//     city:"HYD",
// };

// let obj2={
//     id:2,
//     name:"Minha",
//     city:"Larkana",
// };

// // Use the spread operator to create a new object mergedObject that combines the properties of object1 and object2
// let mergedObject ={...obj1,...obj2}

// // Log mergedObject to the console
// console.log(mergedObject);
//#endregion

//#region Updating Object Properties: 34
// Create an object user with properties name, age, and email
// let user = {name:"Fahad", age:20, Email:"abc@gmail.com"}

// // Use the spread operator to create a new object updatedUser that updates the email property and adds a new address property
// let updatedUser ={...user,  Email:"abc@gmail.com",Adress:"North kkarchi sector 11A"}

// // Log the updatedUser object to the console
// console.log(updatedUser)
//#endregion

//#region Passing Array Elements as Arguments:35
// function sum (a,b,c){
//     return a,b,c
// };

// let numbers = ["1","2","3"];

// let agr = [...numbers, (sum)]

// console.log(agr);

//#endregion

//#region Combining Multiple Arrays:36

// function combineArrays(...arrays) {
//     return [].concat(...arrays);
// }

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [7, 8, 9]

//  const arry = combineArrays(array1,array2,array3);


//  console.log(arry)
//#endregion

//#region Rest Parameter with Spread Operator:37

// function multiply (number,...args){

//     return args.map(arg => arg * number)

// }
//     const result = multiply(2,3,4,5,)

//     console.log(result)


//#endregion

// #region Spread Operator with Nested Structures: 38

// Step 1: Create a nested array
// const nestedArray = [[1,2,3], [4,5,6], [7,8,9]]; 

// Step 2: Create a shallow copy using the spread operator
// const shllowCopy = [...nestedArray]

// Step 3: Modify the inner arrays in the shallow copy
// shllowCopy[0][0] = 10;  // Modifying the first element of the first inner 
// shllowCopy[1].push(7)  // Adding an element to the second inner array

// Step 4: Log both the original and copied arrays
// console.log("nestedArray",nestedArray)
// console.log("shllowCopy",shllowCopy)

//#endregion

//#region Sum Function: 39

// function sum( ...numbers) {

//  return numbers.reduce((total ,num) => total + num, 0);
// }

//  // Example usage:
// const result1 = sum(1,2,3)
// const result2 = sum (4,5,6)
// const result3 = sum (10,20,30,40)

// console.log(result1)
// console.log(result2)
// console.log(result3)
//#endregion

//#region  Average Function:40
// function average (...number) {

// const total = number.reduce((sum,current) => sum + current, 0);
// return total /  number.length
// }

// const result1 = average(1,2,3)
// const result2 = average(4,5,6,7,8)
// const result3 = average(9,10,11,12,13)

// console.log(result1)
// console.log(result2)
// console.log(result3)
//#endregion

//#region First and Rest:41

// Step 1: Create an array with at least 5 elements
// const numbers = [10, 20, 30, 40, 50]

// // Step 2: Use array destructuring with the rest operator
// const [first, ...rest] = numbers;


// // Step 3: Log first and rest to the console
// console.log("first", first)
// console.log("rest", rest)

//#endregion

//#region Skip and Rest:42

// Step 1: Create an array 'colors' with at least 5 elements.
// const colors = ["blue", "red", "purple", "pink", "white"]

// // Step 2: Use array destructuring with the rest operator to skip the first two elements.
// const [,, ...remaningColors] = colors;

// console.log("remaningColors :", remaningColors);
//#endregion

//#region Basic Destructuring:43
// Step 1: Create an object 'person' with properties name, age, email, and address.
// let person = {
//     name: "Ali",
//     age: 18,
//     email: "abc@gmail.com",
//     address: "north Karachi sector 11 A"
// }

// // Step 2: Use object destructuring with the rest operator to assign name and email to individual variables.
// const { name, email, ...rest } = person;

// console.log("name :", name);
// console.log("email :", email);
// console.log("rest :", rest);
//#endregion

//#region  Nested Destructuring: 44
// Step 1: Create an object 'student' with properties id, name, grades, and info.
// const student = {
//     id: 1,
//     name: "Abdul Ahad",
//     grades: ["60", "70", "80"],

//     info: {
//         age: 19,
//         major: "computer seience"
//     }
// }

// // Step 2: Use nested destructuring with the rest operator.
// const { id, name, info: { major, age }, ...rest } = student;

// console.log("id :", id);
// console.log("name :", name);
// console.log("major :", major);
// // console.log("age :", age);
// console.log("rest :", rest);

//#endregion

//#region Filter Even Numbers: 45

// Step 1: Create a function 'filterEven' that uses the rest operator.
// function filterEven(...numbers) {

//         // Step 2: Return a new array containing only the even numbers.
//     return numbers.filter(num => num % 2 === 0)
// }
// // Step 3: Call the function with different numbers of arguments and log the results.
// console.log(filterEven(1, 2, 3, 4, 5));
// console.log(filterEven(10, 15, 20, 25,30));
// console.log(filterEven(7, 8, 9, 10, 11, 12));
//#endregion

//#region Combine and Sort Arrays:46
// // Step 1: Create a function 'combineAndSort' that uses the rest operator.
// function combineAndSort(...array) {


//     // Step 2: Combine all the arrays into one.
//     const combineArrays = [].concat(...array)

//     // Step 3: Sort the combined array.
//     return combineArrays.sort((a, b) => a - b)

// }
// // Step 4: Call the function with different arrays and log the results.
// console.log(combineAndSort([9, 8, 7], [2, 3, 5], [1, 6, 4, 10]));
// console.log(combineAndSort([20, 12, 13], [16, 18, 17], [19, 14, 11, 15]));
// console.log(combineAndSort([21, 30, 22], [26, 29, 27], [25, 23, 24]));


//#endregion

//#region Basic Destructuring: 47

// Step 1: Create an array 'fruits' with the elements "apple", "banana", and "cherry".
// const fruits = ["apple", "banana", "cherry"]

// // Step 2: Use destructuring to assign the first element to 'firstFruit', the second to 'secondFruit', and the third to 'thirdFruit'.
// const [firstFruit, secondFruit ,thirdFruit] = fruits; 

// console.log("firstFruit:",firstFruit);
// console.log("secondFruit:",secondFruit);
// console.log("thirdFruit:",thirdFruit);
//#endregion

//#region Skipping Elements: 48

// Step 1: Create an array 'colors' with the elements "red", "green", "blue", "yellow".
// const colors =["red","green","blue","yellow"]

// // Step 2: Use destructuring to assign the first element to 'primaryColor' and the second element skiping qomy say beech wala element sikp hojata destructing method mai ,,  and third element to 'tertiaryColor'.
// const [primaryColor, ,tertiaryColor] = colors;

// console.log("primaryColor",primaryColor);
// console.log("tertiaryColor",tertiaryColor);
//#endregion

//#region Rest Operator: 49 

// Step 1: Create an array 'numbers' with the elements 1 through 5.
// const numbers = [1,2,3,4,5]


// // Step 2: Use destructuring to assign the first element to 'firstNumber' and the rest of the elements to 'remainingNumbers'.
// const [firstNumber,...remainingNumbers ] = numbers;

// console.log("firstNumber",firstNumber);
// console.log("remainingNumbers",remainingNumbers);
//#endregion

//#region Basic Destructuring: 50
// Step 1: Create an object 'person' with properties 'name', 'age', and 'city'.
// const person ={
//     name:"Fahad",
//     age:20,
//     city: "HYD",
// }
// // Step 2: Use destructuring to assign the properties to variables 'name', 'age', and 'city'.
// const {name,age,city} = person;

// // Step 3: Log the variables to the console.
// console.log("name",name);
// console.log("age",age);
// console.log("city",city);
//#endregion

//#region Renaming Variables:51

// Step 1: Create an object 'car' with properties 'make', 'model', and 'year'.
// const car = {
//     make: "HONDA",
//     model: "CAROLA",
//     year: 2023,
// }
// // Step 2: Use destructuring to assign the properties to variables 'carMake', 'carModel', and 'carYear'.
// const { make: carMake, model: carModel, year: carYear } = car;

// console.log("Carmake", carMake);
// console.log("Carmodel", carModel);
// console.log("CarYear", carYear);

//#endregion

//#region Default Values: 52

// Step 1: Create an object 'settings' with properties 'theme' and 'language'.
// const settings = {
//     theme: "dark" ,
//         // 'language' property is intentionally left out
// }
// // Step 2: Use destructuring to assign the properties to variables 'theme' and 'language',
// // and provide a default value of "English" for 'language'.
// const {theme,language = "English"}=settings;  

// // Step 3: Log the variables to the console.
// console.log("theme",theme);
// console.log("language",language);


//#endregion

//#region Array of Arrays: 53

// Step 1: Create an array 'nestedArray' with the elements [1, 2], [3, 4], and [5, 6].
// const nestedArray = [[1, 2],[3, 4],[5, 6]];

// // Step 2: Use nested destructuring to assign the first elements of each sub-array to variables 'a', 'b', and 'c'.
// const [[a], [b], [c],[d],[e],[f]] = nestedArray;

// console.log("a",a);
// console.log("b",b);
// console.log("c",c);
//#endregion

//#region Object within an Object:54
// Step 1: Create an object 'profile' with properties 'username' and 'details' (which contains 'email' and 'address').
// const profile = {
//     username: "Arish",
//     details: {
//         email: "xyz@gmail.com",
//         address: "Gulshan 13D"
//     }
// }
// // Step 2: Use nested destructuring to assign 'username', 'email', and 'address' to variables.
// const { username, details: { email, address } } = profile;

// console.log("username", username);
// console.log("email", email);
// console.log("address", address);
//#endregion

//#region Mix of Arrays and Objects: 55
// Step 1: Create an object 'data' with properties 'id' and 'info' (which is an array containing two objects).
// const data = {
//     id: 1,

//     info: [
//         {name: "Alice"},
//         {age: 25}
//     ]
// }
// // Step 2: Use nested destructuring to assign 'id', 'name', and 'age' to variables.
// const {id , info:  [{name},{age}] }=data;

// console.log(id);
// console.log(name);
// console.log(age);
//#endregion

//#region Array Parameters: 56

// Step 1: Create a function 'printCoordinates' that takes an array [x, y] as a parameter.
// function printCoordinates([x, y]) {
// Step 2: Log x and y inside the function.
// console.log("x coordinate", x);
// console.log("y coordinate", y);
// }
// Step 3: Call the function with different coordinates.
// printCoordinates([20, 30])
// printCoordinates([40, 50])
// printCoordinates([60, 70])
//#endregion

//#region Object Parameters: 57 
// Step 1: Create a function 'displayUser' that takes an object {name, age} as a parameter.
// function displayUser({ name, age }) {

// Step 2: Log name and age inside the function.
//     console.log("name", name);
//     console.log("age", age);

// }
// Step 3: Call the function with different user objects.
// displayUser({ name: "saifullah", age: 18 });
// displayUser({ name: "khan", age: 12 });

//#endregion

//#region List Property Names: 58

// Step 1: Create an object 'book' with properties 'title', 'author', and 'year'.
// const book = {
//     title: " javascript is most important langunge for bignners",
//     author: "try",
//     year: 2011

// }
// // Step 2: Use Object.keys() to get an array of the property names of the 'book' object.
// const propertyName = Object.keys(book);

// console.log(propertyName);


//#endregion

//#region Count Properties: 59
// Step 1: Create an object 'student' with properties 'name', 'age', 'grade', and 'school'.
// const student = {
//     name : "Ali",
//     age: 18,
//     grade:"10th",
//     school:"ST Marry's High School"
// }

// // Step 2: Use Object.keys() to get an array of the property names.
// const propertyNumber = Object.keys(student)

// // Step 3: Determine the number of properties in the 'student' object.
// const numberOfProperty = propertyNumber.length;

// console.log(numberOfProperty);

//#endregion

//#region Iterate Over Keys: 60
// Step 1: Create an object 'product' with properties 'name', 'price', and 'category'.
// const product = {
//     name: "laptop",
//     price: 2000,
//     category:"electronic"
// }
// // Step 2: Use Object.keys() to get an array of the property names.
// const propertyName = Object.keys(product)

// // Step 3: Iterate over the array of property names.
// propertyName.forEach(key =>{
//  // Function body

// // Step 4: Log each property name and its corresponding value.
// console.log(`${key}: ${product[key]}`);
// });
//#endregion

//#region List Property Values:   61,
// Step 1: Create an object 'movie' with properties 'title', 'director', 'year', and 'genre'.
// const movie ={
//     title:"J.",
//     director:"Junaid jhamshed",
//     year: 2010,
//     genre:"fabric"
// }
// // Step 2: Use Object.values() to get an array of the property values of the 'movie' object.
// const propertyValue = Object.values(movie)

// console.log(propertyValue);

//#endregion

//#region Sum Values: 62 
// Step 1: Create an object 'scores' with properties 'math', 'science', and 'english'.
// const scores = {
//     math:100,
//     science:90,
//     english:100,
// }
// // Step 2: Use Object.values() to get an array of the property values.
// const scoresValue = Object.values(scores)

//  // Step 3: Calculate the total sum of the values.
// const sum = scoresValue.reduce((sum,value) => sum + value,0 )

// console.log(sum);
//#endregion

//#region  Iterate Over Values:63 
// Step 1: Create an object 'user' with properties 'username', 'email', and 'location'.
// const user = {
//     username:"saif",
//     email:"abc@gmail.com",
//     location:"Karachi",
// }

// // Step 2: Use Object.values() to get an array of the property values.
// const userValue = Object.values(user)

// // Step 3: Iterate over the array of property values.

// userValue.forEach(key =>{

//     // Step 4: Log each value to the console.
//     console.log(`${key} `);
// })
//#endregion

//#region List Entries: 64
// Step 1: Create an object 'car' with properties 'make', 'model', and 'year'.
// const car = {
//     make: "toyota",
//     model:"yarest",
//     year:2019
// }
// // Step 2: Use Object.entries() to get an array of the key-value pairs of the 'car' object.
// const carEntries = Object.entries(car);

// console.log(carEntries);
//#endregion

//#region Convert Object to Array: 65
//1 step create an object 'person' with property  'firstName', 'lastName', and 'age'.
// const person ={
//     firstName: "saifullah",
//     lastName:"khan",
//     age: 20
// }
// // Step 2: Use Object.entries() to convert the 'person' object into an array of key-value pairs.
// const personArray = Object.entries(person)

// console.log(personObject);
//#endregion

//#region Iterate Over Entries: 66
// Step 1: Create an object 'settings' with properties 'theme', 'notifications', and 'privacy'.
// const settings = {
//     theme: "dark",
//     notifications: true,
//     privacy: "high",
// }
// // Step 2: Use Object.entries() to get an array of the key-value pairs of the 'settings' object.
// const settingEntries = Object.entries(settings)

// // Step 3: Iterate over the array of key-value pairs.
// settingEntries.forEach(([key, value]) => {

//     console.log(`${key} : ${value}`);
// });
//#endregion

//#region Filter Keys: 67 
// Step 1: Create an object 'inventory' with properties 'apples', 'bananas', 'oranges', and 'grapes'.

// const inventory = {
//     apples: 12,
//     bananas: 5,
//     oranges: 16,
//     grapes: 1
// }
// // Step 2: Use Object.keys() to get an array of keys.
// const inventoryKey = Object.keys(inventory)

// // Step 3: Use filter() to get an array of keys where the value is greater than 10.
// const filteredKey = inventoryKey.filter(key => inventory[key] > 10)

// console.log(filteredKey);
//#endregion

//#region Transform Values: 68

// Step 1: Create an object 'temperatures' with properties 'morning', 'afternoon', and 'evening'.
// const temperatures = {
//     morning: 15,
//     afternoon: 12,
//     evening: 10
// }
// // Step 2: Use Object.entries() to get an array of key-value pairs.
// const temperaturesEntries = Object.entries(temperatures)


// // Step 3: Use map() to convert the temperatures from Celsius to Fahrenheit.
// const transformEntris = temperaturesEntries.map(([key, value]) => {

//     const fahrenheit = (value * 9 / 5) + 40;

//     // console.log(fahrenheit);

//     return [key, fahrenheit]
// })

// // Step 4: Convert the transformed array back to an object using Object.fromEntries().
// const transformedTemperatures = Object.fromEntries(transformEntris)
// console.log(transformedTemperatures);

//#endregion

//#region Key-Value Swap: 69

// Step 1: Create an object 'roles' with properties 'admin', 'editor', and 'viewer'.
// const roles = {

//     admin: "adminitrator",
//     editor: "content editor",
//     viewer: "content viewer"
// }

// // Step 2: Use Object.entries() to get an array of key-value pairs.
// const sawap = Object.entries(roles)


// // Step 3: Use map() to swap the keys and values.
// const sawapEntries = sawap.map(([key, value]) => [key,value])

// // Step 4: Convert the transformed array back to an object using Object.fromEntries().
// const roleEntries = Object.fromEntries(sawapEntries)

// console.log(roleEntries);


//#endregion

//#region Filter and Map: 70
// Step 1: Create an array 'numbers' with values from 1 to 10.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // Step 2: Write a higher-order function 'filterAndMap' that takes an array, a filter function, and a map function.
// function filterAndMap(array, filterFn, mapFn) {
//     return array.filter(filterFn).map(mapFn)
// };
// // Step 3: Use the 'filterAndMap' function to filter out even numbers and square the remaining numbers.
// const result = filterAndMap(
//     numbers,
//     num => num % 2 !== 0,         // Filter function to keep only odd numbers
//     num => num * num            // Map function to square the numbers
// );
// console.log(result);
//#endregion

//#region Sort and Reduce: 71
// Step 1: Create the array
// let words = ["apple", "banana", "cherry", "date"];

// // Step 2: Create the sortAndReduce higher-order function
// function sortAndReduce(array,sortFn,reduceFn){

// // First, sort the array using the sort function
// let sortAndReduce = array.sort(sortFn)
// // Then, reduce the sorted array using the reduce function
// return sortAndReduce.reduce(reduceFn)

// }

// // Step 3: Sorting function (alphabetical)
// let alphabetically = (a,b) => a.localeCompare(b);

// // Step 4: Reducing function (concatenate words)
// let concatenate = (acc,curr) => acc + curr;

// // Step 5: Use the sortAndReduce function and log the result
// let result = sortAndReduce(words,alphabetically,concatenate)

// console.log(result)
//#endregion

//#region  Simple Callback: 72
// Define the greet function
// function greet(name, callback) {
//     // Call the callback with a greeting message
//     let message = `hello ${name}!`
//     callback(message)
// }
// // Define the callback function to print the greeting
// function printGreeting(message){
//     console.log(message);
// }
// // Call the greet function with a name and the callback
// greet("johan",printGreeting)

//#endregion

//#region Asynchronous Callback:73
// Define the fetchData function to simulate fetching data from a server

// Function that simulates fetching data asynchronously
// function fetchData(callback) {
// console.log("fetcing...");

// Simulating delay using setTimeout (e.g., 2 seconds)
// setTimeout(() => {
// const data = { name: "saif", email: "abc@gmail.com", id: 1 }
// callback(data)// Passing the data to the callback function
// }, 2000);// Delay of 2 seconds
// }

// Callback function that displays the data
// function displayData(data) {
//     console.log("data received");
//     console.log(data);
// }

// Call fetchData with displayData as the callback
// fetchData(displayData)
//#endregion

//#region Simple Arrow Function:74
// Arrow function version of the add function
// const add  = (a,b) => a+b;

// Call the arrow function with arguments 3 and 5 and log the result
// console.log(add(3,5));
//#endregion

//#region Arrow Function with Array Methods: 75 

// Yeh ek array hai jismein numbers 1 se 5 tak diye gaye hain.
// const numbers = [1,2,3,4,5]

// const squareNumber = numbers.map(number => number * number)
// 'map' method array ke har element par kaam karta hai aur ek nayi array banata hai.
// 'number => number * number' ek arrow function hai jo array ke har element ka square nikalta hai.
// Har element ko ek ek karke uthake 'number' ke variable mein daalte hain, phir uska square kiya jata hai.
// Jaise 1 * 1 = 1, 2 * 2 = 4, 3 * 3 = 9, etc.

// console.log(squareNumber);

//#endregion

//#region Variable Scope: 76
// Outer function that declares a variable x
// function outer (){
// let x = "my name is saif " // Declares a variable x and assigns it a value of my name is saif.
// Inner function that logs x to the console
//     function inner (){
//         console.log(x);
//     }
//     inner() // Calling the inner function from within outer
// }
// Calling the outer function to see the result
// outer()
//#endregion

//#region Closure: 77 

// Function that creates a counter
// function createCounter() {

// let counter = 0; // Counter variable, initialized to 0

// The returned function forms a closure over the 'counter' variable
// return function () {
// counter++ / Increment the counter

//         console.log("current value",counter);
//     };
// }
// Create two independent counters
// const  counter1  = createCounter();
// const  counter2  = createCounter();

// Demonstrate that they maintain independent state
// counter1()
// counter2()

// counter1()
// counter2()

// counter1()    
// counter2()    
//#endregion

//#region Simple Default Parameters: 78
// Function with default parameter for greeting
// function greet(name,greeting = "Hello"){
//     // Calling the function with and without the greeting message
//     console.log(`${greeting} ${name}`);
// }
// // Case 1: Providing both name and greeting
// greet("mukysh",)
// // Case 2: Providing only the name (uses default greeting)
// greet("rena","hi")
//#endregion

//#region Default Parameters with Other Arguments: 79

// function calculateArea(width =10, height=5) {
//     return width*height   
// }
// // Calling the function withOut arguments
// const withArgu = calculateArea(20,30)
// console.log(`${withArgu}`);

// // Calling the function with custom arguments
// const withOutArgu = calculateArea() 
// console.log(`${withOutArgu}`);

//#endregion

//#region Square Numbers: 80
// Create an array of numbers
// let numbers = [1, 2, 3, 4, 5];
// Use map to create a new array with each number squared
// let result = numbers.map(number =>  number*number)
// console.log(result);

//#endregion

//#region Convert to Uppercase: 81
// Create an array of words
// let words = ["apple", "banana", "cherry"]

// Use map to create a new array where each word is converted to uppercase
// let result = words.map(word => word.toUpperCase())
// console.log(result);
//#endregion

//#region Filter Even Numbers:82
// Create an array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Use filter to create a new array containing only even numbers
// let result = numbers.filter(number => number % 2===0)
// console.log(result);

//#endregion

//#region Filter Long Words: 83

// let words = ["apple", "banana", "cherry", "date"];
// Use filter to create a new array containing only words with more than 5 characters
// let result = words.filter(word => word.length > 5  )
// console.log(result);

//#endregion

//#region Log Numbers: 84
// let numbers = [1, 2, 3, 4, 5];
// Use forEach to log each number to the console
// let result = numbers.forEach(number => console.log(number)
// )

//#endregion

//#region Log Word Lengths:  85

// let words =  ["apple", "banana", "cherry"];

// // Use forEach to log the length of each word to the console
// words.forEach( word =>{

// console.log(`${word}: ${word.length} `);
// })
//#endregion

//#region Sum of Numbers: 86

// let numbers = [1, 2, 3, 4, 5];

// // Use reduce to calculate the sum of the numbers
// let result = numbers.reduce((accumulator , currentVAlue) => {

// return accumulator + currentVAlue;

// },0 ); // Initial value of accumulator is 0

// console.log(result);

//#endregion

//#region Concatenate Strings: 87
// let words = ["Hello", "world", "this", "is", "JavaScript"]
// // Use reduce to concatenate all the words into a single string separated by spaces
// let result = words.reduce(( accumulator,currentVAlue )=>{

//     return  `${accumulator} ${currentVAlue} `

// })

// console.log(result);

//#endregion

//#region Check for Even Number: 88

// let numbers = [1, 3, 5, 7, 8];
// // Use some to check if there is at least one even number in the array
// let result = numbers.some(number =>  number % 2===0)

// console.log(result);

//#endregion

//#region Check for Long Word:89
// let words = ["apple", "banana", "cherry", "date"]

// // Use some to check if there is at least one word with more than 5 characters
// let result = words.some(word => word.length >5)

// console.log(result);
//#endregion

//#region Check All Even Numbers: 90
// let numbers = [2, 4, 6, 8, 10];
// // Use every to check if all numbers in the array are even
// let result =  numbers.every(number => number % 2===0)

// console.log(result);
//#endregion

//#region  Check All Long Words: 91
// let words = ["elephant", "giraffe","hippopotamus"]

// // Use every to check if all words have more than 5 characters
// let result = words.every(word => word.length >5 )

// console.log(result);

//#endregion

//#region Find First Even Number: 92

// let numbers = [1,3,5,7,8];
// // Use find to get the first even number in the array
// let result = numbers.find(number => number % 2==0)

// console.log(result)
//#endregion

//#region Find Long Word: 93

// let words = ["apple", "banana","cherry", "date"]

// let result = words.find(word => word.length>5)

// console.log(result);

//#endregion

//#region Find Index of First Even Number: 94
// let numbers = [1, 3, 5, 7, 8];
// ● Use findIndex to get the index of the first even number in the array.
// let result = numbers.findIndex(number => number % 2 === 0)
// console.log(result);
//#endregion

//#region Find Index of Long Word: 95

// let words = ["apple", "banana", "cherry", "date"]

// let result = words.findIndex(word => word.length > 5)

// console.log(result);

//#endregion

//#region Simple Promise: 96
// function delay(ms) {
//     return new Promise((reject )=> setTimeout(reject, ms))
// }
// delay(2000)
//     .then(() => {
//         console.log( "hello world");
// })
//#endregion

//#region Promise Chain: 97

// function fetchData() {

//     return new Promise((resolve) => {
//         let obj = {
//             name: "saif",
//             id: 2
//         }
//         resolve(obj)
//     })
// }
// fetchData()
//     .then((obj) => {
//         console.log(obj);
//})
//#endregion


//#region Error Handling 98:

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         const obj = {
//             name: "taihami",
//             age: 20
//         }
//         if (obj.age !== undefined) {
//             resolve(obj)

//         } else {
//             reject("err missing is age property")
//         }
//     })
// }

// fetchUserData()
//     .then((res) => {
//         console.log(res);

//     })
//     .catch((error) => {
//         console.log(error, "error");

//     })

//#endregion