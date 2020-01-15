// /*
//  * document - virtual representation of the entire page
//  * variable - a way to save a piece of data, so we can reuse it later
//  * event listener - a way to register events that happen in the browser
//  * string - piece of text
//  * element - virtual representation of the html on the page
// */

// wait for the page to be fully loaded

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("grey-btn").addEventListener("click", createGreyBox);
  function createGreyBox() {
    var newGreyBox = document.createElement("div");
    newGreyBox.className = "created-box grey";
    document.getElementById("box-container").appendChild(newGreyBox);
    console.log("grey button was pressed");
  }

  document
    .getElementById("darkgrey-btn")
    .addEventListener("click", createDarkgreyBox);
  function createDarkgreyBox() {
    var newDarkgreyBox = document.createElement("div");
    newDarkgreyBox.className = "created-box darkgrey";
    document.getElementById("box-container").appendChild(newDarkgreyBox);
    console.log("dark grey button was pressed");
  }

  document
    .getElementById("lightgrey-btn")
    .addEventListener("click", createLightgreyBox);
  function createLightgreyBox() {
    var newLightgreyBox = document.createElement("div");
    newLightgreyBox.className = "created-box lightgrey";
    document.getElementById("box-container").appendChild(newLightgreyBox);
    console.log("light grey button was pressed");
  }
});
