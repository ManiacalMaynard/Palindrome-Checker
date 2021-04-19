//Thought it fun to put a random placeholder string into the form field.

function randomPlaceholder() {
  let copyStrings = [
    'Go hang a salami, I\'m a lasagna hog!',
    'Never odd or even.',
    'Dogma I am God',
    'Mr. Owl ate my metal worm.',
    'Was it a car or a cat I saw?',
    'Murder for a jar of red rum.',
    'Rats live on no evil star.', 
    'Live on time, emit no evil.', 
    'Step on no pets.',
    'Don\'t nod.',
    'I did, did I?',
    'My gym.',
    'Red rum, sir, is murder.',
    'Top spot.',
    'Was it a cat I saw?',
    'Eva, can I see bees in a cave?',
    'No lemon, no melon.'
  ];
  let number = Math.floor(Math.random() * (copyStrings.length));
  document.getElementById('inputString').placeholder = copyStrings[number];
}
window.onload = (event) => {
  randomPlaceholder();
}

//The checker strips down the string and compares it to the reverse. Easy peasy. 

function palindrome() {

  string = document.getElementById("inputString").value;
  console.log(string);
  let thingOne = string.toLowerCase().replace(/[^a-z^0-9]/g, '');
  let thingTwo = thingOne.split("").reverse().join("");
  return thingOne == thingTwo ? 
  document.getElementById('output').innerHTML = 'Congrats, you found a palindrome!' : 
  document.getElementById('output').innerHTML = 'Oh no, it\'s not!';  

};

//That's it, thanks for looking at my code!