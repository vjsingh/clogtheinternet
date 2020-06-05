const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/get_hashtags', (req, res) => {
  const randomHashtags = getHashtagList('random.csv');
  const altRightHashtags = getHashtagList('altright.csv');
  const popularHashtags = getHashtagList('popular.csv');
  res.send({
    hashtags: _.concat(randomHashtags, altRightHashtags, popularHashtags),
  });
});

function getHashtagList(filename) {
  const filePath = `hashtags/${filename}`;
  const fData = fs.readFileSync(filePath).toString();
  const filtered_hashtags = _.filter(_.split(fData, '\n'), (val) => val.length > 0);
  return _.map(filtered_hashtags, (str) => `#${str}`);
}
