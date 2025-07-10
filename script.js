const quotes = [
    { text: "You are the CEO of your own life. Act like it.", author: "Robin Sharma" },
    { text: "Normalize chasing your dreams, not people.", author: "Tony Gaskins" },
    { text: "Your vibe attracts your tribe.", author: "Unknown" },
    { text: "Romanticize your own journey.", author: "Morgan Harper Nichols" },
    { text: "Protect your peace at all costs.", author: "Beyoncé" },
    { text: "You can’t pour from an empty cup. Take care of you first.", author: "Norm Kelly" },
    { text: "Healing is not linear, but you’re still growing.", author: "Ijeoma Umebinyuo" },
    { text: "You’re not behind, you’re on your own timeline.", author: "Matt Haig" },
    { text: "Energy is currency. Spend it wisely.", author: "Unknown" },
    { text: "You are the main character. Don’t forget it.", author: "Greta Gerwig" }
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const tweetBtn = document.getElementById('tweetBtn');
const quoteBox = document.getElementById('quoteBox');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function showQuote() {
    const { text, author } = getRandomQuote();
    quoteText.innerText = '"' + text + '"';
    quoteAuthor.innerText = '- ' + author;
}

newQuoteBtn.addEventListener('click', showQuote);
