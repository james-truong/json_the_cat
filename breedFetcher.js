'use strict;';

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
  // console.log(body);
  // console.log(typeof body);

    if (error) {
      // this would be a broken API link case
      callback(`Failed to request details: ${error}`,null);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      callback(null,breed.description);
    } else {
      callback(`No breed ${breedName} for this endpoint`,null);
    }
  });

};

module.exports = { fetchBreedDescription };