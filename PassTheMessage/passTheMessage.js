function passTheMessage() {
   let messageFromInput = document.getElementById('inputMessage');
   let submitButton = document.getElementById('submitButton');
   let messageContainer = document.getElementById('messageDiv');
   if (messageFromInput !== null && submitButton !== null && messageContainer !== null) {
       submitButton.addEventListener('click', (evt) => {
          let messageText = messageFromInput.value;
          messageContainer.append(messageText);
      });
   }
}

passTheMessage();