// alert("It works!");
console.log("Javascript running");

var count = 0;

// document.getElementById("plus")
$(document).ready(function() {

  var countDiv = $("#count");
  var plusBtn = $("#plus");
  var minusBtn = $("#minus");

  count = localStorage.getItem("count") || count;
  render();

  function renderStyles(n) {
    if (n > 8) {
      countDiv.css("color", "red");
    } else {
      countDiv.css("color", "black");
    }

    if (n % 2 == 0) { // even
      countDiv.css("font-style", "italic");
    } else { // odd
      countDiv.css("font-style", "normal");
    }
  }

  function render() {
    count = Number(count);
    if (isNaN(count)) { count = 0 };

    localStorage.setItem("count", count);
    countDiv.text(count);
    renderStyles(count);
  }

  plusBtn.click(function() {
    count += 1;
    render();
  });

  minusBtn.click(function() {
    count -= 1;
    render();
  });
})
