const somar = (a,b) => Promise.resolve(a+b);
somar(1,2).then((x) => console.log(x));
