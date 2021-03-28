function randomQuotes() {
   let quoteBodyDiv = document.getElementById('currentQuote');
   let quoteAuthorDiv = document.getElementById('currentQuoteAuthor');
   let generateQuoteButton = document.getElementById('generateQuoteButton');
   if (quoteBodyDiv !== null & quoteAuthorDiv !== null) {
      generateQuoteButton.addEventListener('click', (evt) => {
         debugger;
         let currQuote = getRandomQuote();
         quoteBodyDiv.innerText = currQuote.text;
         quoteAuthorDiv.innerText = currQuote.author;
      });
   }
   
}

function getRandomQuote() {
    let quote = {};
    fetch('https://type.fit/api/quotes')
     .then(function(response) {
         return response.json();
     }).then(function (data) {
          
        let randomIndex = Math.floor(Math.random() * data.length);
        let currQuoteObj = data[randomIndex];
        quote.text = currQuoteObj.text;
        quote.author = currQuoteObj.author;
     });
     return quote;
}

randomQuotes();