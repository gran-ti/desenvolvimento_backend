import redis from "redis";
import { obterProduto } from "./controller-produto.js"

let redisClient;

(async () => {
  redisClient = redis.createClient();
  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  redisClient.on('connect', () => console.log("REDIS: Conectado"));
  await redisClient.connect();
})();

const obter = async (codigo) => {
   let isCached = false, result;
   const cacheResults = await redisClient.get(`Prod${codigo}`);
   if(cacheResults){
      isCached = true;
      result = JSON.parse(cacheResults);
   } else {
      result = await obterProduto(codigo);
      await redisClient.set(`Prod${codigo}`,JSON.stringify(result));
   }
   return {fromCache: isCached, produto: result};
}

obter(1).then((x)=>console.log(JSON.stringify(x)));
obter(2).then((x)=>console.log(JSON.stringify(x)));
obter(1).then((x)=>console.log(JSON.stringify(x)));

