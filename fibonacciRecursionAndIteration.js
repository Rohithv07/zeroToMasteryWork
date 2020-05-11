function fibonacciIterative(number){
  let arr=[0,1];
  for(let i=2;i<=number;i++){
    arr.push(arr[i-2]+arr[i-1]);
  }
  return arr[number]
}

fibonacciIterative(8);


function fibonacciRecursion(number){
  if(number<2)
    return number
  return fibonacciRecursion(number-1)+fibonacciRecursion(number-2);
}

fibonacciIterative(0);