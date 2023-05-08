const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
readline.question('Who are you?\n', 'utf-8', name => {
  n = name.toString();
  fs.appendFile('text.txt', n, (err) => {
    if (err) throw err;
  });
  readline.close();
  process.exit();
});

const emitter = new Emitter();
process.stdin.on('SIGINT', () => {
  process.stdout('Thank you!');
  process.exit();
});
