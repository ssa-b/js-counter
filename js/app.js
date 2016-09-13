// alert("It works!");
console.log("Javascript running");

// document.getElementById("plus")
$(document).ready(function() {

  var countDiv = $("#count");
  var plusBtn = $("#plus");
  var minusBtn = $("#minus");

  var savedCount = localStorage.getItem("count");
  setCount(savedCount);

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

  function setCount(n) {
    n = Number(n);
    if (isNaN(n)) { n = 0 };

    localStorage.setItem("count", n);
    countDiv.text(n);
    renderStyles(n);
  }

  plusBtn.click(function() {
    var count = Number( countDiv.text() );
    setCount(count + 1);
  });

  minusBtn.click(function() {
    var count = Number( countDiv.text() );
    setCount(count - 1);
  });
})
