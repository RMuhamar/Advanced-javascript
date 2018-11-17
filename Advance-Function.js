const addTo = x => y => x + y
var addToTen = addTo(10);
addToTen(3);

//
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1);

//
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1; // 10+1 = 11
const add5 = (num) => num + 5; // 11+5 = 16
compose(add1, add5)(10); //16