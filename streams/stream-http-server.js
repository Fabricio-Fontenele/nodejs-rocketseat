import http from "node:http";
import { Transform } from "node:stream";
class TransformToNegative extends Transform {
  _transform(chunk, encoding, callback) {
    const negatedNumber = Number(chunk.toString()) * -1;

    console.log(negatedNumber);

    callback(null, Buffer.from(String(negatedNumber)));
  }
}

const server = http.createServer((req, res) => {
  return req.pipe(new TransformToNegative()).pipe(res);
});

server.listen(3334);
