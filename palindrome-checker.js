function palindrome(str) {

    let thingOne = str.toLowerCase().replace(/[^a-z^0-9]/g, '');
    let thingTwo = thingOne.split("").reverse().join("");
    return thingOne == thingTwo ? true : false;
  
  };
