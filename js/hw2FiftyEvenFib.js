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
               document.getElementById("sumFibResult").innerHTML = fiftyEvenFibonacciSum() + " <a href='https://piazza.com/class/hnysk91neti6w5?cid=135'>As per instructors answer</a>";
 }

 /*
  *  fiftyEvenFibonacciSum - calulates the sum of the first 50 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first fifty even Fibonacci numbers
  */

 function fiftyEvenFibonacciSum(){
 /// WRITE YOUR CODE HERE
  var i;
  var fib = []; 
  var sum = 0;
  var numberEvens = 0;
  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=27; i++){ 
      fib[i] = fib[i-2] + fib[i-1];
      if (fib[i]%2==0) {
  		console.log(fib[i])
  		sum += fib[i]
       
 	 }

  }
  return(sum)
}
