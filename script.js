/* Given a month as an integer from 1 to 12, return to which quarter
 of the year it belongs as an integer number.For example: month 2 (February), 
 is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November),
  is part of the fourth quarter. */
  const quarterOf = (month) => {
    // Your code here
    if (month<=3){
      return 1
    }else if(month>3&&month<=6){
      return 2
    }else if(month>6&&month<=9){
      return 3
    }else{
      return 4
    }
    
  }



  /* Complete the function that accepts a string parameter, 
  and reverses each word in the string. All spaces in the string should be retained. */

  function reverseWords(str) {
    var res = str.split(' ').map((word)=>{
      return word.split('').reverse().join('')}).join(' ');
    return res;
  }


/* Task

Sum all the numbers of a given array ( cq. list ), 
except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, 
even if there are more than one with the same value. */
  function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }

  /* Create a function that takes an integer as an argument 
  and returns "Even" for even numbers or "Odd" for odd numbers. */

function evenOrAdd(num){
    return res = num%2==0 ? "Even" : "Odd"
}


/* You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
 */

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      return parseInt(inputString.slice(0))
    }



/* Your task is to make two functions ( max and min, or maximum and minimum, etc.,
     depending on the language ) that receive a list of integers as input,
 and return the largest and lowest number in that list, respectively. */


    var min = function(list){
    
        return Math.min.apply(null,list);
    }
    
    var max = function(list){
        
        return Math.max.apply(null,list);
    }


    /* You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested. */

function otherAngle(a, b) {
  return 180-(a+b);
}

/* Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description

We need a function that can transform a string into a number.
 What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, 
and every string is a perfectly valid representation of an integral number. */


const stringToNumber = function(str){
  let res = parseInt(str)
  return res;
}

/* This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not. */

function checkForFactor (base, factor) {
  // code here
  return (base%factor==0)?true : false;
}