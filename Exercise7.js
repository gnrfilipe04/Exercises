// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
    const first = a.replace('%', '');
    const second = b.split('').reverse().join('').replace('%','');
    return (first + second ).replace(/^\w/, (c) => c.toUpperCase());
   
 }