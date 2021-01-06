//Transform a string into an array and fix it!
let quote = "Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand. – Martin Fowler. Agile Software Design";


let favoriteQuote= quote.split(" ");
let num= favoriteQuote.length;
console.log(num)
favoriteQuote.pop();
console.log(favoriteQuote.length)
favoriteQuote.push("Development", "ThoughtWorks" ,"Inc" )
console.log(favoriteQuote.length)
favoriteQuote[1]="fool"
console.log(favoriteQuote)
favoriteQuote.shift();
favoriteQuote.unshift("Any")
favoriteQuote.splice(7,5,"computer");
console.log(favoriteQuote)