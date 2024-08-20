const subtrair = async (a,b) => a - b;
const dividir = (a,b) => {
    return promise = new Promise((resolve, reject)=>{
        if(a<b) 
            resolve(0);
        else
            subtrair(a,b).then((x)=>dividir(x,b)).then((y)=>resolve(1+y));
    });
}

const dividir2 = async(a,b) => {
    return (a<b) ? 0: (1 + await await dividir( subtrair(a,b), b) );
}

dividir(127,3).then((x)=>console.log(x));
dividir2(127,3).then((x)=>console.log(x));