const request = require('request');
const fs = require('fs');
const data = process.argv.slice(2);

request(data[0], (error, response, body) => {
  if (error) console.log('error:', error);
  if (response && response.statusCode !== 200)
    console.log('statusCode:', response && response.statusCode);
  fs.writeFile(data[1], body, (err) => {
    if (err) throw err;
    const fileSize = fs.statSync(data[1]).size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${data[0]}`);
  });
});