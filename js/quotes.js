const quotes = [
  {
    quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
    author: "Michael Flatley",
  },
  {
    quote:
      "Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a different way to stand.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "If we had no winter, the spring would not be so pleasant: if we did not sometimes taste of adversity, prosperity would not be so welcome.",
    author: "Anne Bradstreet",
  },
  {
    quote: "Only the educated are free.",
    author: "Epictetus",
  },
  {
    quote: "Nothing is as far away as one minute ago.",
    author: "Jim Bishop",
  },
  {
    quote:
      "It's not that I'm so smart , it's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Indolence is a delightful but distressing state; we must be doing something to be happy.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The greatest risk is the risk of riskless living.",
    author: "Stephen Covey",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
