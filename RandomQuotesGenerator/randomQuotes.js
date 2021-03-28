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
        quotesStorage.push(parsedJson);
     });
     debugger;
   let quoteBodyDiv = document.getElementById('currQuote');
   let quoteAuthorDiv = document.getElementById('currQuoteAuthor');
   let generateQuoteButton = document.getElementById('generateQuoteButton');
   if (quoteBodyDiv !== null & quoteAuthorDiv !== null) {
     
   }
   
}

randomQuotes();