function randomQuotes() {
   let quoteBodyDiv = document.getElementById('currentQuote');
   let quoteAuthorDiv = document.getElementById('currentQuoteAuthor');
   let generateQuoteButton = document.getElementById('generateQuoteButton');
   if (quoteBodyDiv !== null & quoteAuthorDiv !== null) {
      generateQuoteButton.addEventListener('click', (evt) => {
          getRandomQuote().then((result) => {
            let randomIndex = Math.floor(Math.random() * result.length);
            let currQuote = result[randomIndex];
            quoteBodyDiv.innerText = currQuote.text;
            quoteAuthorDiv.innerText = currQuote.author;
          });
      });
   }
   
}

function getRandomQuote() {
   return fetch('https://type.fit/api/quotes')
     .then(function(response) {
         return response.json();
     }).then(function (json) {
        return json;
     });
}

randomQuotes();