// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016"
    },
    {
        quote: "",
        source: "",
        citation: "",
        year: ""
    },
    {
        quote: "",
        source: "",
        citation: "",
        year: ""
    },
    {
        quote: "",
        source: "",
        citation: "",
        year: ""
    },
    {
        quote: "",
        source: "",
        citation: "",
        year: ""
    }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
    var randomNumber = Math.random() * quotes.length;
    return array[0];//[randomNumber];
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
    var stringOfQuoteProperties = "";
    var selectedQuote = getRandomQuote(quotes);
    
    stringOfQuoteProperties += '<p class="quote">' + selectedQuote.quote +'</p>';
    stringOfQuoteProperties += '<p class="source">' + selectedQuote.source;
    stringOfQuoteProperties += '<span class="citation">' + selectedQuote.citation + '</span>';
    stringOfQuoteProperties += '<span class="year">' + selectedQuote.year + '</span></p>';

    document.getElementById("quote-box").innerHTML = stringOfQuoteProperties;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);