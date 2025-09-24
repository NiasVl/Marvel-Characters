import crypto from 'crypto';

const publicKey = 'a78e12136cf7b1eb2ee819759bc46201';
const privateKey = '5faa86f5be3a9875de95aa3a6de18b755d97e471';
const ts = new Date().getTime();
const hash = crypto
  .createHash('md5')
  .update(ts + privateKey + publicKey)
  .digest('hex');

console.log(ts, hash);
