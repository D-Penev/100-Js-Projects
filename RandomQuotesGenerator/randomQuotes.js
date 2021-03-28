function randomQuotes() {
   debugger;
   let quotesStorage = [];
   let quotesJson = 
     fetch('https://type.fit/api/quotes')
     .then(function(response) {
         return response.json();
     })

   if (quotesJson !== null || quotesJson !== undefined) {
       alert(quotesJson);
   }
}

randomQuotes();