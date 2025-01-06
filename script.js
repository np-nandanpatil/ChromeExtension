let numOfDays = 75;

const quotes = [ 
     "Be consistent!", 
     "You have 1% chance!", 
     "The longer you take time to achieve your goals, the more you have financial instability",
     "Focus on small wins.",
     "Have realistic goals.",
     "Plan your day.",
     "Remember you have " + (numOfDays-1) + " days left."
]

function getQuote(){
     return quotes[Math.floor(Math.random() * quotes.length)];
}

document.addEventListener('DOMContentLoaded', () => {
     const quote = document.getElementById('quote');
     quote.textContent = getQuote();
});
