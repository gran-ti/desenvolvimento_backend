const somar = async (a, b) => a + b;
const multiplicar = async (c, d) => {
    let resp = 0;
    while(d-->0)
       resp = await somar(resp,c);
    return resp;
}

//somar(2,3).then((x)=>multiplicar(x,7)).then((x)=>console.log(x));
//multiplicar(7, somar(2,3)).then((x)=>console.log(x));
//console.log(multiplicar(7, somar(2,3)));
//await(multiplicar(7, await somar(2,3))).then((x)=>console.log(x));
const y = async() => console.log(await multiplicar(7, await somar(2,3)));
y();