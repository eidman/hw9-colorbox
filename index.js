/*
 * document - virtual representation of the entire page
 * variable - a way to save a piece of data, so we can reuse it later
 * event listener - a way to register events that happen in the browser
 * string - piece of text
 * element - virtual representation of the html on the page
*/

// wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // How do I select an element in JavaScript?
  // select the form from the html
  var button = document.querySelector('form');

  // add an event listener on form submit
  form.addEventListener('submit', function(event) {
    // prevents the default functionality of this form
    event.preventDefault();


  var slateBox = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);





    // select first name input
    var firstNameInput = document.querySelector('.first-name');
    // select last name input
    var lastNameInput = document.querySelector('.last-name');

    // How do I get a value from an input in JavaScript?
    // capture the value of the first name input
    var firstNameValue = firstNameInput.value;

    // capture the value of the last name input
    var lastNameValue = lastNameInput.value;

    var p = document.createElement('p');
    p.innerHTML = firstNameValue + ' ' + lastNameValue;
    // how to add text to an element in javascript

    // how do I add an element to the page in JavaScript?
    // select the user container
    var userContainer = document.querySelector('.user-container');

    // add the p tag to the userContainer
    userContainer.appendChild(p);
  });
});
