const media = (valores) => {
      let a = 0;
      for(let v of valores) {
          a += v;
      }
      return a / valores.length;
}

console.log(media([1,2,30,4,5]))