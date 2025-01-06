const target = new Date('2025-03-30')

function getRemDate(){
     const today = new Date()
     const rem = target - today
     return Math.ceil(rem / (1000 * 60 * 60 * 24))
}

const quotes = [ 
     "Be consistent!", 
     "You have 1% chance!", 
     "The longer you take time to achieve your goals, the more you have financial instability",
     "Focus on small wins.",
     "Have realistic goals.",
     "Plan your day.",
     "Remember you have " + getRemDate() + " days left."
]

function getQuote(){
     return quotes[Math.floor(Math.random() * quotes.length)];
}

document.addEventListener('DOMContentLoaded', () => {
     const quote = document.getElementById('quote');
     quote.textContent = getQuote();
});
