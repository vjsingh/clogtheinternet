const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/get_hashtags', (req, res) => {
  console.log(getHashtagList('random.csv'));
  res.send({ hashtags: ['#cromulonlivesmatter']});
});

function getHashtagList(filename) {
  const filePath = `hashtags/${filename}`;
  const fData = fs.readFileSync(filePath).toString();
  const delimiter = ',';
  const lines = parse(fData);
  const hashtags = [];
  for (const line of lines) {
     for (let j = 0; j < line.length; j++) {
        const val = line[j];
     }
  }
  fs.readFile(`hashtags/${filename}`, 'utf8',  (err, content) => {
    if (err) return console.log('Error loading hashtag data:', err);
    callback(content);
  });
}
