// /*
//  * document - virtual representation of the entire page
//  * variable - a way to save a piece of data, so we can reuse it later
//  * event listener - a way to register events that happen in the browser
//  * element - virtual representation of the html on the page
// */

document.addEventListener("DOMContentLoaded", function() {
  // select ALL of the buttons
  var buttons = document.querySelectorAll(".btn");
  // loop through each button that you found in your list
  // then run the code inside of the function
  buttons.forEach(function(button) {
    // runs 3 times
    button.addEventListener("click", function() {
      var color = button.getAttribute("data-color");
      var boxContainer = document.querySelector(".box-container");
      var box = document.createElement("div");
      box.className = "box " + color;
      boxContainer.appendChild(box);
      document.querySelector(".box");
      box.addEventListener("click", function() {
        this.remove();
      });
    });
  });
});

//   document
//     .getElementById("silver-btn")
//     .addEventListener("click", createSilverBox);
//   function createSilverBox() {
//     var newSilverBox = document.createElement("div");
//     newSilverBox.className = "created-box silver";
//     document.getElementById("box-container").appendChild(newSilverBox);
//     console.log("silver button was pressed");
//   }
// });
