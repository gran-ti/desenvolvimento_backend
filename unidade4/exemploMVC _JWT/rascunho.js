const x = (a,b) => (b>0) ? a + x(a,b-1) : 0;

console.log(x(-5,100))