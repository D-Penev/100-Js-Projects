function foo() {
   let buttons = document.querySelector('button'); 
   let changeColourButton = buttons[0];
   
   changeColourButton.addEventListener('click', (evt) => {
       document.body.style.backgroundColor = "#FFEF00";
   });
}