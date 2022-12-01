/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("\n----------EXERCISE 1---------\n")

function area(l1, l2) {
    if (
        typeof l1 === "number" &&
        typeof l2 === "number"
    ) {
        let result = l1*l2;
        return result;
    } else {
        console.log("Please check l1 and l2 if they are number!")
    }
}

let ex1;
ex1= area(4,4);
console.log(ex1);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log("\n----------EXERCISE 2---------\n")

function crazySum(int1, int2) {
    if (
        typeof int1 === "number" &&
        typeof int2 === "number"
    )

    if (
        int1 !== int2
    ) {
        let result= int1+int2;
        return result; 
    } else {
        let result = (int1+int2)*3;
        return result; 
    }     else {
        console.log("Please check int1 and int2 if they are number!")
    }
    }

let ex2;
ex2= crazySum(6,3);
console.log(ex2);


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("\n----------EXERCISE 3---------\n")


function crazyDiff(x, y) {
    if (
        typeof x === "number" &&
        typeof y === "number"
    ) if (
        x-y >= 0 && x<19
    ) {
        let result = x-y;
        return result;
    } if (
        x-y < 0 && x<19
    ) {
        let result = (x-y)*(-1);
        return result;
    } else 
        {
            let result = (x-y)*3;
            return result;
        }
    }

let ex3;
ex3 = crazyDiff(20,19);
console.log(ex3)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
console.log("\n----------EXERCISE 4---------\n")

function boundary(n) {
    if (
        ((20 < n) && (n <= 100)) || (n === 400)
    ) {
        let result = true;
        return result;
    } else 
    {
        let result = false;
        return result;
    }
}

let ex4;
ex4 = boundary(400);
console.log(ex4)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log("\n----------EXERCISE 5---------\n")

function strivify(stringInput) {
    if (
        stringInput==="Strive"
    ) {
        let result = stringInput;
        return result;
    } else {
        result = "Strive " + stringInput;
        return result;
    }
}

let ex5;
ex5 = strivify("Strive");
console.log(ex5);


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log("\n----------EXERCISE 6---------\n")

function check3and7(positiveNumber) {
    if (
        positiveNumber < 0
    ) 
    console.log("Please enter a positive number!")

    if (
        ((positiveNumber % 3) === 0) || ((positiveNumber % 7) === 0)
    ) {
        let result = true;
        return result;
    } else {
        let result = false;
        return result;
    }
}

let ex6;
ex6 = check3and7(15);
console.log(ex6);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
console.log("\n----------EXERCISE 7---------\n")

function reverseString(insertString) {
    let reversedString= "";
    for (let i = insertString.length - 1 ; i>=0; i--)
    {
        reversedString += insertString[i]
    }
        return reversedString;
}

let ex7;
ex7 = reverseString("Batı");
console.log(ex7);

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log("\n----------EXERCISE 8---------\n")

function upperFirst(myString) {
    let words = myString.split(" ");
    for (i = 0; i< words.length; i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    {
        return words.join(" ");
    }
}
let ex8;
ex8 = upperFirst("This is a test.")
console.log(ex8);


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log("\n----------EXERCISE 9---------\n")

function cutString(myString2) {
    withoutFirstAndLastCharacter = "";
    console.log("Old String: ", myString2);
    for (i = 1; i < myString2.length; i++)
    {
        withoutFirstAndLastCharacter += myString2[i];
    }
    return withoutFirstAndLastCharacter;
}

let ex9;
ex9 = cutString("This is a test.")
console.log(ex9);

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log("\n----------EXERCISE 10---------\n")

function giveMeRandom(n) {
    let myArray = [];
    for (i=0; i<n;i++)
    {
        myArray[i] = parseInt(Math.random()*10);
    }
    console.log(myArray);
    return myArray;
}

let ex10;
ex10 = giveMeRandom(50)
console.log(ex10);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
