const redis = require('redis');
const db = require('./models')
let redisClient;

(async () => {
  redisClient = redis.createClient();
  redisClient.on('error', (error) => 
                   console.error(`Error : ${error}`));
  redisClient.on('connect', () => 
                   console.log("REDIS: Conectado"));
  await redisClient.connect();
})();

const obter = async (id) => {
    let isCached = false, result;
    const cacheResults = await redisClient.get(`Pessoa${id}`);
    if(cacheResults){
       isCached = true; result = JSON.parse(cacheResults);
    } else {
       result = await db.Pessoa.findByPk(id);
       await redisClient.set(`Pessoa${id}`,
                                       JSON.stringify(result));
    }
    return {fromCache: isCached, produto: result};
}
 
obter(1).then((x)=>console.log(JSON.stringify(x)));
obter(2).then((x)=>console.log(JSON.stringify(x)));
obter(1).then((x)=>console.log(JSON.stringify(x)));


