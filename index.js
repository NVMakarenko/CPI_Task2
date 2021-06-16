function Factorial(number) {
    if (number <= 0) { // terminal case
    return 1;
    } else { // block to execute
    return (number * Factorial(number - 1));
    }
   };
function Ex (x) 
{
 let i;
 let A = 0;
 let N = 4;
   for(i=0; i<N; i++){
 A += Math.pow(x,i)/Factorial(i);
    }
    return A;
}

var t = Ex(0.5);
t = t.toFixed(4);
console.log (t);