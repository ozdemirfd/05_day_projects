/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/
let street=["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"]



function streetName(arr){
  let arr1=[];
 for(var a=0;a<arr.length;a++){
   
   if(arr[a].includes("Lane")){
       arr1.push(arr[a]);
   }
 
 }
  return arr1;
}



console.log(streetName(street))

