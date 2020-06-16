const fs = require('fs');
const path = require("path");
const _ = require('lodash');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../build')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/get_hashtags', (req, res) => {
  const randomHashtags = getHashtagList('random.csv');
  const altRightHashtags = getHashtagList('altright.csv');
  const popularHashtags = getHashtagList('popular.csv');

  const outputHashtags = [];
  const numRandom = 20;
  for (let i = 0; i < numRandom; i++) { addOutputHashtag(outputHashtags, randomHashtags); }

  const numAltRight = 7;
  for (let i = 0; i < numAltRight; i++) { addOutputHashtag(outputHashtags, altRightHashtags); }

  const numPopular = 3;
  for (let i = 0; i < numPopular; i++) { addOutputHashtag(outputHashtags, popularHashtags); }

  res.send({ hashtags: outputHashtags });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

function addOutputHashtag(outputHashtags, list) {
  let tries = 20;
  let newHashtag = getRandomFromList(list);
  while (_.includes(outputHashtags, newHashtag) && tries > 0) {
    newHashtag = getRandomFromList(list);
    tries--;
  }
  outputHashtags.push(newHashtag);
}

function getHashtagList(filename) {
  const filePath = `hashtags/${filename}`;
  const fData = fs.readFileSync(filePath).toString();
  const filtered_hashtags = _.filter(_.split(fData, '\n'), (val) => val.length > 0);
  return filtered_hashtags;
}

function getRandomFromList(list) {
  const randomIndex = Math.floor(Math.random()*list.length);
  return list[randomIndex];
}
