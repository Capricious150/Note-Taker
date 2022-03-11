const fs = require('fs');

const uuid = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

const readJson = (file, content) => {
  fs.readFile(file, 'utf8', (err, data) => {
  if (err){
    console.info(err);
  } else {
    const parsed = JSON.parse(data);
    console.log (parsed);
    parsed.push(content);
    writeJson(file, parsed);
  }
  })
}
const writeJson = (file, content) => {

  console.log(content)
  const stringyContent = JSON.stringify(content)
  console.log(stringyContent);

  fs.writeFile(file, stringyContent, (err) => {
    (err) ? console.info(err) : console.log("File successfully written!")
  })
}


module.exports = {
  uuid,
  readJson,
  writeJson
}