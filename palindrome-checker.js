function palindrome() {

  string = document.getElementById("inputString").value;
  console.log(string);
  let thingOne = string.toLowerCase().replace(/[^a-z^0-9]/g, '');
  let thingTwo = thingOne.split("").reverse().join("");
  return thingOne == thingTwo ? 
  document.getElementById('output').innerHTML = 'Congrats, you found a palindrome!' : 
  document.getElementById('output').innerHTML = 'Oh no, it\'s not!';  

};