/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/


  var splitName = document.getElementById("splitName");
splitName.onclick = function(){

               var fullname = document.getElementById("fullName").value.split(' ');

               /*
                *  We've gotten the fullname from the HTML form field.
                *  Your job is to use the String.slice(), String.substring() or String.substr() functions
                *  to divide your name into separate first and last name strings and assign
                *  them to the variables provided. You may
                *  need String.indexOf() as well.
                *
                **/

               var firstname = fullname.slice(0,1).toString();
               var lastname = fullname.slice(1,2).toString();


               document.getElementById("firstname").innerHTML = firstname;
               document.getElementById("lastname").innerHTML = lastname;

               
}