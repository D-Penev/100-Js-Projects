function foo() {
   let buttons = document.getElementsByTagName('button');
   let changeColourButton = buttons[0];
   let revertColourButton = buttons[1];

   let originalColour = document.body.style.backgroundColor;
   changeColourButton.addEventListener('click', (evt) => { 
       document.body.style.backgroundColor = "red";
   })

   revertColourButton.addEventListener('click',(evt) => {
      document.body.style.backgroundColor = originalColour;
   });
}

foo();