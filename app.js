// Get input element
let filterInput = document.getElementById("filterInput");

// Add event listener
// The keyup event is fired when a key is released.
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // Get value of input
  let filterValue = filterInput.value.toUpperCase();

  // Get names ul
  let ul = document.getElementById("names");
  // Get lis from ul, get all the li with class of collection-item into an array
  let li = ul.querySelectorAll("li.collection-item");

  // Loop through collection-item lis
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
