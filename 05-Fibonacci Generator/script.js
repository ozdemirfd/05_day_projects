
function fibonacciGen(num){
  let arr=[0,1];
  if(num>2){
     for(var a=0;a<num-2;a++){
       arr.push(arr[a]+arr[a+1]);
     }
    return arr;
  }else if(num===2){
    return arr
  }else if(num===1){
    return [0]
  }else{
   return "Enter positive number"
  }
 
  
}
console.log(fibonacciGen(6));
console.log(fibonacciGen(2));
console.log(fibonacciGen(1));
console.log(fibonacciGen(-25));


console.log(fibonnacci(2))

function fibonacciFinder (num) {
  let arr = fibonacciGen(num+1);
  let golden = arr[num] / arr[num-1];
  return Math.round((Math.pow(golden, num-1) - Math.pow(1-golden, num-1)) / Math.sqrt(5));
}
console.log(fibonacciFinder(14));


