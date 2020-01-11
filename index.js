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
document.addEventListener("DOMContentLoaded", function() {
  // all other code goes here

  // select the button from the html
  var buttons = document.querySelector(".buttons");

  document
    .getElementById("dark-btn")
    .addEventListener("click", myFunction, false);

  function myFunction() {
    alert("Hello! I am an alert box!!");
  }
});
// // capture the value of the slate box
// var createSlateBox = createSlateBox.value;

// var slateBox = document.createElement(".slate-box");

// // select the user container
// var boxContainer = document.querySelector(".box-container");

// append the p tag to the userContainer

//     var insertDarkBox;
//     var darkBox;

//     insertDarkBox = document.createElement("div");
//     console.log("div");
//     darkBox = document.getElementByClassName("box-container");
//     darkBox.appendChild(insertDarkBox);

//
//   var makeSlateBox = document.createElement('div');
//   var slateBox = document.createTextNode('.slate-box');
//   para.appendChild(node);
//   var element = document.getElementByClassName('.colored-boxes');
//   element.appendChild(makeSlateBox);
//
