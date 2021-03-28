function randomQuotes() {
   let quoteBodyDiv = document.getElementById('currQuote');
   let quoteAuthorDiv = document.getElementById('currQuoteAuthor');
   let generateQuoteButton = document.getElementById('generateQuoteButton');
   if (quoteBodyDiv !== null & quoteAuthorDiv !== null) {
      generateQuoteButton.addEventListener('click', (evt) => {
         let currQuote = getRandomQuote();
      });
   }
   
}

function getRandomQuote() {
    let quote = {};
    fetch('https://type.fit/api/quotes')
     .then(function(response) {
         return response.json();
     }).then(function (data) {
         debugger;
        let randomIndex = Math.floor(Math.random() * data.length);
        let currQuoteObj = data[randomIndex];
        let parsedJson = JSON.parse(currQuoteObj);
        quote.text = parsedJson.text;
        quote.author = parsedJson.author;
     });
     return quote;
}

randomQuotes();