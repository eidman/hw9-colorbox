// /*
//  * document - virtual representation of the entire page
//  * variable - a way to save a piece of data, so we can reuse it later
//  * event listener - a way to register events that happen in the browser
//  * string - piece of text
//  * element - virtual representation of the html on the page
// */

/*
 * document - virtual representation of the entire page
 * variable - a way to save a piece of data so we can use it later
 * event listener - a way to register events that happen in the browser
 * string - piece of text
 * element - virtual representation of the html on the page
*/


// wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

  // all other code goes here

  // select the form from the html
  var form = document.querySelector('form');

  // add an event listeners
  form.addEventListener('submit', function(event) {
    // prevent the default functionality of this form (in this case to reload the page once you've pressed submit in a form)
    event.preventDefault();
    console.log('button pressed');

  // select slate box
  var createSlateBox = document.querySelector('.slate-box');

  // generate slate box
  var slateBox = createSlateBox.value;

  // capture the value of the last name input
  var lastNameValue = lastNameInput.value;
  console.log(firstNameValue, lastNameValue);

  var p = document.createElement('p');
  p.innerHTML = firstNameValue + ' ' + lastNameValue;

  // select the user container
  var userContainer = document.querySelector('.user-container');

  // appent the p tag to the userContainer
  userContainer.appendChild(p);
  console.log (p);

  });

});



//
// // wait for the page to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//
//   // How do I select an element in JavaScript?
//   // select the form from the html
//   var button = document.querySelector('form');
//
//   // add an event listeners
//   form.addEventListener('submit', function(event) {
//     // prevent the default functionality of this form (in this case to reload the page once you've pressed submit in a form)
//     event.preventDefault();
//     console.log('form submitted');
//
//   var makeSlateBox = document.createElement('div');
//   var slateBox = document.createTextNode('.slate-box');
//   para.appendChild(node);
//   var element = document.getElementByClassName('.colored-boxes');
//   element.appendChild(makeSlateBox);
//
//   });
// });
