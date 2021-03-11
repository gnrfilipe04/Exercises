// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

//My soluction
function myFunction(str1, str2) {
  const arr = str2.toLowerCase().split("");
  const x = arr.filter((item) => item === str1);
  return x.length;
}

//The author's soluction
function myFunction(char, string) {
    return string.toLowerCase().split(char).length - 1
}