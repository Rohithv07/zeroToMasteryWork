let calculation1=0 ,calculation2=0;

function fibonacciNormalRecursive(n){
	calculation1++;
	if(n<2){
		return n;
	}
	else{
		return fibonacciNormalRecursive(n-1) + fibonacciNormalRecursive(n-2);
	}
}
function fibonacciDynamic(){
	let cache = {};//object to store the values;
	return function fib(n){
		calculation2++;
		if(n in cache){
			return cache[n];
		}
		else{
			if(n<2)
				return n;
			else{
				cache[n] = fib(n-1) + fib(n-2);
				return cache[n];
			}
		}
	}
}

function fibonacciOtherWay(n){
	let fibArray = [0,1];
	for(i=2;i<=n;i++){
		fibArray.push(fibArray[i-2]+fibArray[i-1])
	}
	return fibArray.pop()
}


console.log("The normal recursive fibonacci function produces "+fibonacciNormalRecursive(20)+" and no.of steps it take is "+calculation1);

const fibResult = fibonacciDynamic()
console.log("\nThe dynamic fibonacci function produces "+fibResult(20)+" and no of steps it take is "+calculation2);

console.log("\nThe other way also produces "+fibonacciOtherWay(20))