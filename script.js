const target = new Date('2025-03-30')

function getRemDate(){
     const today = new Date()
     const remDays = target - today
     
     return Math.ceil(remDays / (1000 * 60 * 60 * 24))
}

function getRemTime(){
     const timeNow = new Date()
     const hours = 23 - timeNow.getHours()
     const minutes = 59 - timeNow.getMinutes()
     
     return '${hours}h ${minutes}m left'
}
const quotes = [ 
     "Be consistent!", 
     "You have 1% chance!", 
     "Focus on small wins.",
     "Have realistic goals.",
     "Plan your day.",
     getRemDate() + " days left!"
]

function getQuote(){
     return quotes[Math.floor(Math.random() * quotes.length)]
}

document.addEventListener('DOMContentLoaded', () => {
     const quote = document.getElementById('quote')
     quote.textContent = getQuote()
});
