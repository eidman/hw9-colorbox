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
  document.getElementById("grey-btn").addEventListener("click", createGreyBox);
  function createGreyBox() {
    var newGreyBox = document.createElement("div");
    newGreyBox.className = "created-box grey";
    document.getElementById("inner-box").appendChild(newGreyBox);
    console.log("grey button was pressed");
  }

  document
    .getElementById("black-btn")
    .addEventListener("click", createBlackBox);
  function createBlackBox() {
    var newBlackBox = document.createElement("div");
    newBlackBox.className = "created-box black";
    document.getElementById("inner-box").appendChild(newBlackBox);
    console.log("black button was pressed");
  }

  document
    .getElementById("black-btn")
    .addEventListener("click", createLightBox);
  function createBlackBox() {
    var newBlackBox = document.createElement("div");
    newBlackBox.className = "created-box black";
    document.getElementById("inner-box").appendChild(newBlackBox);
    console.log("black button was pressed");
  }
});

//   var blackButton = document.querySelector(".black-btn");

//   blackButton.addEventListener("Black", function(event) {
//     document.getElementById("black-btn").addEventListener("click", myFunction);

//     var blackBox = document.createElement("div"); // is a node
//     // blackBox.innerHTML = "TEST";

//     function myFunction() {
//       document.body.appendChild(blackBox);
//       document.getElementById("black-box").style.backgroundColor = "red";

//       // document.getElementById("box-container").style.border = "thick solid #000";
//     }
//   });
// });

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
