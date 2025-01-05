const quotes = [ 
     "Be consistent while coding", 
     "Remember that you have 1% chance!", 
     "The longer you take time to achieve your goals, the more you have financial instability", 
]

function getQuote(){
     return quotes[Math.floor(Math.random() * quotes.length)];
}

document.addEventListener('DOMContentLoaded', () => {
     const quote = document.getElementById('quote');
     quote.textContent = getQuote();
});
