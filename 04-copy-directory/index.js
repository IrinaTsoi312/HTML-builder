const fs = require('node:fs/promises');
const path = require('node:path');

const origDir = path.join(__dirname, 'files');
const copyDir = path.join(__dirname, 'files-copy');

async function copyFiles() {
  try {
    const files = await fs.readdir(origDir);
    for (const file of files) {
      fs.copyFile(`${origDir}/${file}`, `${copyDir}/${file}`);
    }
  } catch (err) {
    console.error(err);
  }
}

function copyFolder() {
  fs.mkdir(copyDir, (err) => {
    if (err) {
      return console.error(err);
    } else {
      console.log('Folder was created');
    }
  });
  copyFiles();
}

async function haveFolder() {
  const direct = await fs.readdir(__dirname);
  console.log(direct);
  if (direct.includes('files-copy')) {
    fs.rm(copyDir, {recursive: true}, (err) => {
      if (err) {
        return console.error('Error');
      }
    });
  } 
  copyFolder();
}
haveFolder();
