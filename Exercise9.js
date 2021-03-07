// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction (string){
    const arr = [...string]
    const correctedArray = arr.map(item => String.fromCharCode(item.charCodeAt() + 1))
    return correctedArray.join('')
  }
  