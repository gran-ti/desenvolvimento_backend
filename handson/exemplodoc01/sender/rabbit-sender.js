const amqp = require('amqplib')

const getChannel = async() => {
    const conn = await amqp.connect("amqp://rmq");
    const channel = await conn.createChannel();
    await channel.assertQueue('log_pessoas', { durable: true });
    return channel;
}
   
const sendToQueue = (message) => {
    getChannel()
      .then(channel => channel.sendToQueue('log_pessoas', Buffer.from(JSON.stringify(message))))
      .catch(err => console.log(err))
}

const consume = (callback) => {
    connect()
      .then(channel => channel.consume('log_pessoas', callback, { noAck: true }))
      .catch(err => console.log(err));
}

module.exports = {
    sendToQueue,
    consume
}