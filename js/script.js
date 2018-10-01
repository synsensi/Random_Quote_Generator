// FSJS - Random Quote Generator

// An array containing quote objects
var quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        citation: "Twitter",
        year: "2016",
        tag: "Programming"
    },
    {
        quote: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
        source: "Scott Adams",
        citation: "\"The Dilbert Principle\" by Scott Adams",
        year: "1996",
        tag: "Art"
    },
    {
        quote: "I would rather walk with a friend in the dark than walk alone in the light.",
        source: "Helen Keller",
        citation: "\"Helen and Teacher: The Story of Helen Keller and Anne Sullivan Macy\” by Joseph P. Lash",
        year: "1920's",
        tag: "Friendship"
    },
    {
        quote: "I am convinced that life is 10% what happens to me and 90% how I react to it.",
        source: "Charles Swindoll",
        citation: "\"Attitudes\" by Charles R. Swindoll",
        year: "1995",
        tag: "Life"
    },
    {
        quote: "Let the beauty of what you love be what you do.",
        source: "Mowlānā Jalāluddīn Rūmī",
        citation: "\"Path for Greatness : Spiritualty at Work\" by Linda J. Ferguson",
        year: "Unknown",
        tag: "Love"
    },
    {
        quote: "With the new day comes new strength and new thoughts.",
        source: "Eleanor Roosevelt",
        citation: "\"My Day by Eleanor Roosevelt, January 8, 1936\" by Eleanor Roosevelt" ,
        year: "1936",
        tag: "Motivational"
    },
    {
        quote: "Success is a science; if you have the conditions, you get the result.",
        source: "Oscar Wilde",
        citation: "\"Epigrams of Oscar Wilde\", by Oscar Wilde and Alvin Redman Wilde",
        year: "Unknown",
        tag: "Success"
    },
    {
        quote: "Being entirely honest with oneself is a good exercise.",
        source: "Sigmund Freud",
        citation: "Letter to Wilhelm Fliess by Sigmund Freud",
        year: "1897",
        tag: "Wisdom"
    }
];


// Function to randomly change the background color
function colorChange() {
    var red = Math.floor(Math.random() * 255); 
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var colors = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    document.body.style.backgroundColor = colors;
}


// Function to randomly select and return a quote object
function getRandomQuote(array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    console.log(randomNumber)
    return array[randomNumber];
}


// Function to display a quote and change the background color
function printQuote() {
    var stringOfQuoteProperties = "";
    var selectedQuote = getRandomQuote(quotes);
    
    colorChange();

    stringOfQuoteProperties += '<p class="quote">' + selectedQuote.quote +'</p>';
    stringOfQuoteProperties += '<p class="source">' + selectedQuote.source;
    stringOfQuoteProperties += '<span class="citation">' + selectedQuote.citation + '</span>';
    stringOfQuoteProperties += '<span class="year">' + selectedQuote.year + ' ' + '</span>';
    stringOfQuoteProperties += '<span class="tag">' + selectedQuote.tag + '</span></p>';

    document.getElementById("quote-box").innerHTML = stringOfQuoteProperties;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Function call to display a random quote on initial page load
window.addEventListener('load', printQuote);

//// A variable to hold the seconds for Method call to auto-refresh the displayed quote
var seconds = 30;
window.setInterval(printQuote, seconds * 1000);