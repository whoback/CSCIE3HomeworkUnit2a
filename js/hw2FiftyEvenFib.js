/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 50 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = fiftyEvenFibonacciSum();
 }

 /*
  *  fiftyEvenFibonacciSum - calulates the sum of the first 50 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first fifty even Fibonacci numbers
  */

 function fiftyEvenFibonacciSum(){
 /// WRITE YOUR CODE HERE

 }