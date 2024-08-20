const fs = require('fs');
const http = require('http');
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.request.url === '/measurements.json') {
        ctx.response.set('content-type', 'application/json');
        // This is where the magic happens: set a stream as the response body
        ctx.body = fs.createReadStream('./measurements.json');
    }
});

http.createServer(app.callback()).listen(3000);

fetch('http://localhost:3000/measurements.json')
    .then(async (response) => {
        // response.body is a ReadableStream
        const reader = response.body.getReader();
        for await (const chunk of readChunks(reader)) {
            console.log(`received chunk of size ${chunk.length}`);
        }
    });

// readChunks() reads from the provided reader and yields the results into an async iterable
function readChunks(reader) {
    return {
        async* [Symbol.asyncIterator]() {
            let readResult = await reader.read();
            while (!readResult.done) {
                yield readResult.value;
                readResult = await reader.read();
            }
        },
    };
}