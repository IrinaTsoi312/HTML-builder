const fs = require('node:fs/promises');
const path = require('node:path');

const dir = path.join(__dirname, 'secret-folder');

async function getStats() {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const stat = await fs.stat(dir + `\\${file}`);
      const size = stat.size / 1000;
      const res = `${size} kb`;
      if (stat.isFile()) {
        console.log(file.slice(0, file.indexOf('.')) + ' - ' + path.extname(file).replace('.', '') + ' - ' + res);
      }
    }
  } catch (err) {
    console.error(err);
  }
}
getStats();

// async function getStats() {
//   try {
//     const files = await fs.readdir(dir);
//     for (const file of files) {
//       const stat = await fs.stat(dir + `\\${file}`);
//       const size = stat.size / 1000;
//       const res = `${size} kb`;
//       if (stat.isFile()) {
//         names.push(file.slice(0, file.indexOf('.')));
//         extensions.push(path.extname(file).replace('.', ''));
//         sizes.push(res);
//       }
//     }
//     for(let i = 0; i < names.length; i += 1) {
//       console.log(`${names[i]} - ${extensions[i]} - ${sizes[i]}`);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }
// console.log(getStats());
