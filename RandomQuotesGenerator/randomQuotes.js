function randomQuotes() {
   let quotesStorage = [];
   let quotesJson = 
     fetch('https://type.fit/api/quotes')
     .then(function(response) {
         return response.json();
     }).then(function (data) {
         debugger;
        let randomIndex = Math.floor(Math.random() * data.length);
        let currQuoteObj = data[randomIndex];
        let parsedJson = JSON.parse(currQuoteObj);
        
     });
   let quoteBody = document.getElementById('currQuote');
   let quoteAuthor = document.getElementById('currQuoteAuthor');

   if (quoteBody !== null & quoteAuthor !== null) {
     
   }
   
}

randomQuotes();