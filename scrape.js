var lanyrd = require('lanyrd-scraper');

lanyrd.scrape('series/milano-js', function(err, series){
  console.log(series); // Object containing series data
});
