// Lambda Expression
var nextEven = (n: number) =>
    n % 2 == 0 ? n + 2 : n + 1;
console.log(nextEven(10));


// Lambda block
var nextOdd = (n: number) => {
    console.log("Before : " + n);
    n = n % 2 != 0 ? n + 2 : n + 1;
    console.log("After : " + n);
}
nextOdd(10);