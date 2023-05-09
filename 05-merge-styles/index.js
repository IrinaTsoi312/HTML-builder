const fs = require('node:fs/promises');
const path = require('node:path');


const dir = path.join(__dirname, 'styles');

async function getStyles() {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      fs.readFile(`${dir}/${file}`, 'utf-8', (err, data) => {
        if (err) {
          console.error('Erorr');
        } else {
          fs.appendFile('bundle.css', data, err => {
            console.error(err);
          });
        }
      });
    }
  } catch {
    console.log('Error');
  }
}
getStyles();