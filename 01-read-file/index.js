const fs = require('fs');

const path = fs.createReadStream(__dirname + '/text.txt');
path.on('data', (data, err) => {
  if(err) {
    console.log('There is an error!');
  } else if (!err) {
    console.log(data.toString());
  }
});
