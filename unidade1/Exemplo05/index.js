const express = require('express');
const redis = require('redis');
const redisClient = redis.createClient();
redisClient.on("error", (err) => console.log(`Erro: ${err}`));
const app = express();

async function getUrl(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

app.get('/paises', async (req, res) => {
  // if data is in cache, send data to client
  try {
    const statsTxt = await redisClient.get('paises');
    if (statsTxt != null) {
        res.status(200).send({from: "cache", content: JSON.parse(statsTxt)});
        return;
    }
  } catch (err) {
    console.log(err);
  }
  

  
  try {
    // otherwise, fetch data from API
    const stats = await getUrl('https://restcountries.com/v3.1/all');
    // and store it in Redis. 60 is the time to live in seconds
    redisClient.set('paises', JSON.stringify(stats), { EX: 60 });
    res.status(200).send({from: "server", content: stats});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

redisClient.connect().then(
  app.listen(3000, console.log('Servidor na porta 3000'))
);



