/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

let berries1=["balck","pink","yellow","brown","red"];
let berries2=["pink","pink","pink","pink"]


function safe(arr){
let result =arr.find(function safer(element){
  if(element!=="pink"){
    return true;
  }else{
    return false
  }
})
if (result){
  return " it's best not to eat from the bush at all!"
}else{
  return "You can eat"
}
  
}
console.log(safe(bushBerryColours1));
console.log(safe(bushBerryColours2));

console.log(safe(berries1));
console.log(safe(berries2));

// let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
// let bushBerryColours2 = ["pink", "pink", "pink", "pink"]
// function findPink(arr) {
//   let count = 0;
//   for(var i=0; i < arr.length; i++) {
//     if(arr[i] === "pink"){
//       count++;
//     }
//   }
//   if(count === arr.length){
//     return "SAFE";
//   } else {
//     return "NOT SAFE";
//   }
// }
// console.log(findPink(bushBerryColours1));
// console.log(findPink(bushBerryColours2));