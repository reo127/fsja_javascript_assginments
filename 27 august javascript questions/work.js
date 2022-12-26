// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type. ------------------------------------------------------------------------------------------------

// // Declare a variable and assign a string value
// let stringVariable = 'This is a string';

// // Declare a variable and assign a boolean value
// let booleanVariable = true;

// // Declare a variable and assign an undefined value
// let undefinedVariable = undefined;

// // Declare a variable and assign a null value
// let nullVariable = null;

// console.log(typeof stringVariable); // Output: "string"
// console.log(typeof booleanVariable); // Output: "boolean"
// console.log(typeof undefinedVariable); // Output: "undefined"
// console.log(typeof nullVariable); // Output: "object"

// ==================================================================================================================

// // 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method. -----
// let firstName = 'John';
// let lastName = 'Doe';
// let maritalStatus = 'single';
// let country = 'United States';
// let age = 30;

// console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I am ${maritalStatus} from ${country}.`);
// // Output: "My name is John Doe. I am 30 years old and I am single from United States."

// ==================================================================================================================

// // 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method
// let srtvar = 'hello world';

// let uppercaseString = srtvar.toUpperCase();
// console.log(uppercaseString); // Output: "HELLO WORLD"

// ==================================================================================================================

// 4. Check if the string contains a word Script using includes() method.

// const str = "The quick brown fox jumps over the lazy dog.";

// if (str.includes("fox")) {
//   console.log("The string contains the word 'fox'");
// } else {
//   console.log("The string does not contain the word 'fox'");
// }
// // The string contains the word 'fox'

// =================================================================================================================
// // 5. Split the string into an array using split() method
// const str = "rohan malo is good boy.";
// const words = str.split(" ");

// console.log(words);  // Output: ["rohan", "malo", "is", "good", "bpy"]

// =================================================================================================================
// // 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companyList = companies.split(', ');

// console.log(companyList);  // Output: ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// =================================================================================================================

// // 7. Use lastIndexOf to determine the position of the last occurrence of a script.
// const str = "Rohan Malo is good dev, place give me a job.";
// const lastIndex = str.lastIndexOf("good");

// if (lastIndex === -1) {
//   console.log("The string does not contain the word 'script'");
// } else {
//   console.log(`The last occurrence of the word 'good' is at index ${lastIndex}`);
// }
// // The string does not contain the word 'good'

// =================================================================================================================

// // 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// const str = "You cannot end a sentence with because because because is a conjunction";
// const index = str.search("because");
// console.log(index);  // Output: 31

// =================================================================================================================

// // 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let str = "    remove whitespace at beginning"
// let removeSpaces = str.trim()
// console.log(removeSpaces);

// =================================================================================================================

// // 10. Boolean value is either true or false.
// //     - Write three JavaScript statement which provide truthy value.
// const truthy1 = true;
// const truthy2 = 1 + 1 === 2;
// const truthy3 = "hello";

// if (truthy1 && truthy2 && truthy3) {
//   console.log("All values are truthy");
// }

// //     - Write three JavaScript statement which provide falsy value.
// const falsy1 = false;
// const falsy2 = 0;
// const falsy3 = "";

// if (!falsy1 && !falsy2 && !falsy3) {
//   console.log("All values are falsy");
// }

// =================================================================================================================

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3    // true
//     - 4 >= 3   // true
//     - 4 < 3    // false
//     - 4 <= 3   // false
//     - 4 == 4   // true
//     - 4 === 4  // true
//     - 4 != 4   // false
//     - 4 !== 4  // false
//     - 4 != '4' // true
//     - 4 == '4' // true
//     - 4 === '4' // false

// // - Find the length of python and jargon and make a falsy comparison statement.
// const python = "python";
// const jargon = "jargon";

// console.log(python.length);  // Output: 6
// console.log(jargon.length);  // Output: 6

// if( python.length != jargon.length){
//     console.log("The lengths of the words are not equal");
// }


// =================================================================================================================

// // 12. Use the Date object to do the following activities
// // - What is the year today?
// // - What is the month today as a number?
// // - What is the date today?
// // - What is the day today as a number?
// // - What is the hours now?
// // - What is the minutes now?
// // - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());

// =================================================================================================================

// // 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// // Prompt the user to enter the base of the triangle
// const base = prompt("Enter the base of the triangle:");

// // Prompt the user to enter the height of the triangle
// const height = prompt("Enter the height of the triangle:");

// // Convert the base and height to numbers
// const b = Number(base);
// const h = Number(height);

// // Calculate the area of the triangle
// const area = 0.5 * b * h;

// // Print the area of the triangle
// console.log(`The area of the triangle is ${area}.`);

// =================================================================================================================

// // 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.

// const pi = 3;
// const radius = prompt("Enter the radius of the circle: ");
// const r = Number(radius);
// const area = pi * r * r;
// const circumference = 2 * pi * r;

// console.log(`The area of the circle is ${area}.`);
// console.log(`The circumference of the circle is ${circumference}.`);

// =================================================================================================================

// // 17. Create a human readable time format using the Date time object
// //     - YYYY-MM-DD HH:mm
// //     - DD-MM-YYYY HH:mm
// //     - DD/MM/YYYY HH:mm

// let date = new Date()
// let year = date.getFullYear()
// let month = date.getMonth()
// let day = date.getDay()

// console.log(`${year}-${month}-${day}`);
// console.log(`${day}-${month}-${year}`);
// console.log(`${day}/${month}/${year}`);

// =================================================================================================================

// // 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter your age : ");
// if(age >= 18){
//     console.log('You are old enough to drive')
// }else{
//     console.log(`you need to wait ${18-age} years to drive a car`);
// }

// =================================================================================================================

// // 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript

// let num = 10;
// if(num % 2 == 0){
//     console.log(`${num} is even`)
// }else{
//     console.log(`${num} is odd`)
// }

// =================================================================================================================

// // 20. Write a code which can give grades to students according to theirs scores:
// //     - 80-100, A
// //     - 70-89, B
// //     - 60-69, C
// //     - 50-59, D
// //     - 0-49, F

// function giveGrades(score) {
//     if (score >= 80 && score <= 100) {
//       return 'A';
//     } else if (score >= 70 && score <= 79) {
//       return 'B';
//     } else if (score >= 60 && score <= 69) {
//       return 'C';
//     } else if (score >= 50 && score <= 59) {
//       return 'D';
//     } else if (score >= 0 && score <= 49) {
//       return 'F';
//     } else {
//       return 'Invalid score';
//     }
//   }

//   console.log(giveGrades(85));  // Output: A
//   console.log(giveGrades(75));  // Output: B
//   console.log(giveGrades(65));  // Output: C
//   console.log(giveGrades(55));  // Output: D
//   console.log(giveGrades(45));  // Output: F
//   console.log(giveGrades(105));  // Output: Invalid score

// =================================================================================================================
// // 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// //     - September, October or November, the season is Autumn.
// //     - December, January or February, the season is Winter.
// //     - March, April or May, the season is Spring
// //     - June, July or August, the season is Summer

// // Function to check the season based on the month
// function checkSeason(month) {
//     if (month === 'September' || month === 'October' || month === 'November') {
//       return 'Autumn';
//     } else if (month === 'December' || month === 'January' || month === 'February') {
//       return 'Winter';
//     } else if (month === 'March' || month === 'April' || month === 'May') {
//       return 'Spring';
//     } else if (month === 'June' || month === 'July' || month === 'August') {
//       return 'Summer';
//     } else {
//       return 'Invalid month';
//     }
//   }

//   // Test the function with some months
//   console.log(checkSeason('September'));  // Output: Autumn
//   console.log(checkSeason('December'));  // Output: Winter
//   console.log(checkSeason('April'));  // Output: Spring
//   console.log(checkSeason('August'));  // Output: Summer
//   console.log(checkSeason('Foo'));  // Output: Invalid month

// =================================================================================================================

// // 22. Write a program which tells the number of days in a month.


// =================================================================================================================

// 23. Write a program which tells the number of days in a month, now consider leap year.

// =================================================================================================================

// // 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// import { countries } from "./countries";
// import { webTechs } from "./web_tech";

// console.log(countries)
// console.log(webTechs);

// =================================================================================================================

// // 25. In the following shopping cart add, remove, edit items
// //     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// //     - add 'Meat' in the beginning of your shopping cart if it has not been already added
// //     - add Sugar at the end of you shopping cart if it has not been already added
// //     - remove 'Honey' if you are allergic to honey
// //     - modify Tea to 'Green Tea'

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// // Add Meat
// if(shoppingCart.filter(items => items != "Meat")){
//     shoppingCart.push('Meat')
// }

// // Add Suger
// if(shoppingCart.filter(items => items != "Suger")){
//     shoppingCart.push('Suger')
// }

// // Remove 'Honey' if you are allergic to honey
// if (shoppingCart.includes('Honey')) {
//     const index = shoppingCart.indexOf('Honey');
//     shoppingCart.splice(index, 1);
//   }

//   // Modify 'Tea' to 'Green Tea'
//   const index = shoppingCart.indexOf('Tea');
//   if (index !== -1) {
//     shoppingCart[index] = 'Green Tea';
//   }
//   console.log(shoppingCart);

// =================================================================================================================

// // 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let countries = ["India", "Russia", "Span", "US"]
// if(countries.includes("Ethiopia")){
//     console.log("ETHIOPIA")
// }else{
//     countries.push("Ethiopia")
// }

// =================================================================================================================

// // 27. The following is an array of 10 students ages:
// //     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// //     - Sort the array and find the min and max age
// //     - Find the median age(one middle item or two middle items divided by two)
// //     - Find the average age(all items divided by number of items)
// //     - Find the range of the ages(max minus min)
// //     - Compare the value of (min - average) and (max - average), use abs() method

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// // - Sort the array and find the min and max age
// ages.sort()
// let minAge = ages[0]
// let maxAge = ages[ages.length - 1]
// console.log(minAge, maxAge);

// // - Find the median age(one middle item or two middle items divided by two)
// let midIndex = ages[Math.round((ages.length - 1) / 2)]
// console.log(midIndex / 2)

// // - Find the average age(all items divided by number of items)
// let sum = 0;

// for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }

// let averageAge = sum / ages.length
// console.log(averageAge);

// // - Find the range of the ages(max minus min)
// ages.sort()
// let range = (ages[ages.length - 1]) - ages[0]
// console.log(range)

// // - Compare the value of (min - average) and (max - average), use abs() method
// ages.sort()
// let minValue = ages[0]
// let maxValue = ages[ages.length - 1]

// for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }
// let averageValue = sum / ages.length

// let minAvarage = minValue - averageValue
// let maxAvarage = maxValue - averageValue

// console.log(Math.abs(minAvarage, maxAvarage));

// =================================================================================================================

// // 28. Use for loop to iterate from 0 to 100 and print only prime numbers
// for( let i = 1; i <= 100; i++){
//     if(i % 2 == 0 ){
//         console.log(i);
//     }
// }

// =================================================================================================================

// // 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// let sumOfEven = 0;
// let sumOfOdd = 0;

// for( let i = 1; i <= 100; i++){
//     if(i % 2 == 0 ){
//        sumOfEven += i
//     }else{
//         sumOfOdd += i
//     }
// }

// console.log(sumOfEven);
// console.log(sumOfOdd);

// =================================================================================================================

// // 30. Write a script which generates a random hexadecimal number.
//  // Function to genarate ramdom hex values
// function randomHex(){
//     let randomStr = 'a1b3c2d4e5f6g7h8i9jklmnopqrstuvwxyz';

//     let hexStr = [];
//     for(let i = 0; hexStr.length < 6; i++){
//        hexStr.push(randomStr[Math.round(Math.random() * 11)])  
//     }
//     return `#${hexStr.join(',').replaceAll(',', '')}`

// }
// console.log(randomHex());

// =================================================================================================================

// // 31. Sort the webTechs array and mernStack array
// // // countries Array : https://gist.github.com/incredimike/1469814

// const webTechs = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'];
// const mernStack = ['MongoDB', 'Express', 'React', 'Node.js'];

// // Sort the webTechs array in alphabetical order
// webTechs.sort();

// // Sort the mernStack array in alphabetical order
// mernStack.sort();

// console.log(webTechs);  // Output: ['CSS', 'HTML', 'JavaScript', 'PHP', 'Python']
// console.log(mernStack);  // Output: ['Express', 'MongoDB', 'Node.js', 'React']

// =================================================================================================================

// // 32. Array Questions
// //     - Extract all the countries contain the word 'land' from the countries array and print it as array
// //     - Find the country containing the hightest number of characters in the countries array
// //     - Extract all the countries contain the word 'land' from the countries array and print it as array
// //     - Extract all the countries containing only four characters from the countries array and print it as array
// //     - Extract all the countries containing two or more words from the countries array and print it as array
// //     - Reverse the countries array and capitalize each country and stored it as an array

// const countryList = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"];

// // - Extract all the countries contain the word 'land' from the countries array and print it as array
// const countriesWithLand = countryList.filter(country => country.includes('land'));
// // console.log(countriesWithLand);

// // - Extract all the countries containing only four characters from the countries array and print it as array
// const countriesWithForeChar = countryList.filter( country => country.length === 4 )
// // console.log(countriesWithForeChar)

// // - Extract all the countries containing two or more words from the countries array and print it as array
// const multiWordCountries = countryList.filter(country => country.split(' ').length > 1);

// =================================================================================================================

// // 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// //     - The same groups apply to both men and women.
// //     - Underweight: BMI is less than 18.5
// //     - Normal weight: BMI is 18.5 to 24.9
// //     - Overweight: BMI is 25 to 29.9
// //     - Obese: BMI is 30 or more


// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         console.log('Underweight');
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         console.log('Normal weight');
//     } else if (bmi >= 25 && bmi < 29.9) {
//         console.log('Overweight');
//     } else {
//         console.log('Obese');
//     }
// }

// calculateBMI(75, 1.75);  // Output: Normal weight

// =================================================================================================================

// // 35. Write a functions which checks if all items are unique in the array.

// function areAllItemsUnique(arr) {
//     return new Set(arr).size === arr.length;
// }

// const arr1 = [1, 2, 3, 4, 5];
// console.log(areAllItemsUnique(arr1));  // Output: true

// const arr2 = [1, 2, 3, 4, 5, 1];
// console.log(areAllItemsUnique(arr2));  // Output: false