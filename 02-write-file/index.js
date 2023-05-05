const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
readline.question('Who are you?\n', 'utf-8', name => {
  n = name.toString();
  console.log(`Hello, ${n}!`);
  const writeStream = fs.createWriteStream('text.txt');
  writeStream.write(`Hello, ${n}`);
  writeStream.end();
  readline.close();
  process.exit();
});
