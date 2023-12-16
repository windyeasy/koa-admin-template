const fs = require("fs");
function readFiles(path, saveData = []) {
  const files = fs.readdirSync(path, { withFileTypes: true });
  for (const fileInfo of files) {
    if (fileInfo.isDirectory()) {
      saveData = readFiles(`${path}/${fileInfo.name}`, saveData);
    } else {
      saveData.push(`${path}/${fileInfo.name}`);
    }
  }
  return saveData;
}
module.exports = readFiles;
