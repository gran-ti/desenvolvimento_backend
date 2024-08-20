const somar = async(a,b) => a+b;
const total = async() =>{
    const vetor = [1,2,3,4,5,6];
    let total = 0;
    for(let v of vetor)
       somar(total,v).then(x => total = x);
       //total = await somar(total,v);
    return total;
}
total().then(x => console.log(x));
//await console.log(total());
//console.log(await total());
