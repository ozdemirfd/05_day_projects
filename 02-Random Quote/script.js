// create variables containing strings
//Use an array to hold the value of the quotes


let str1="Beware of what you become in pursuit of what you want. - Jim";
let str2="It\'s not what happens to you, but how you react to it that matters. - Epictetus";
let str3="The best revenge is massive success. - Frank Sinatra"
let str4="You miss 100% of the shots you don\'t take. - Wayne Gretzy";
let str5="Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela";
let str6="Do not take life too seriously. You will not get out alive. - Elbert Hubbard";

let arr1=[str1,str2,str3,str4,str5,str6]
console.log(arr1.sort());
let day=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

 function randomQuote(array){
   
  let random=Math.floor(Math.random()*array.length);
   return array[random]
    
 }

console.log(`Today is ${randomQuote(day)} and today’s quote is ${randomQuote(arr1)}.`)

