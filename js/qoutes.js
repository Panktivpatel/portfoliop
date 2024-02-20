// Array of quotes
var quotes = [
    "It's not a bug, it's a feature.",
    "Real programmers count from 0.",
    "The best error message is the one that never shows up.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "A computer program does what you tell it to do, not what you want it to do."
  ];

  // Function to display a random quote
  function displayRandomQuote() {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the quote in the HTML element with the id "quote"
    document.getElementById("quote").innerHTML = quotes[randomIndex];
  }

  // Call the function when the page is loaded
  window.onload = displayRandomQuote;