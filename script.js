var git = require('simple-git');
var pathToRepo = __dirname + '/../../../git/platformml/glide';

git(pathToRepo).pull(function(err, update) {
  console.log("Pulled from glide");
  if(err) {
    console.log("ERROR: " + JSON.stringify(err, null, 4));
  } else {
    console.log("UPDATE: " + JSON.stringify(update.summary, null, 4));
  }
});

var pathToRepo = __dirname + '/../../../git/platformml/commons';
git(pathToRepo).pull(function(err, update) {
  console.log("Pulled from commons");
  if(err) {
    console.log("ERROR: " + JSON.stringify(err, null, 4));
  } else {
    console.log("UPDATE: " + JSON.stringify(update.summary, null, 4));
  }
});

var pathToRepo = __dirname + '/../../../git/platformml/glide-test';
git(pathToRepo).pull(function(err, update) {
  console.log("Pulled from glide-test");
  if(err) {
    console.log("ERROR: " + JSON.stringify(err, null, 4));
  } else {
    console.log("UPDATE: " + JSON.stringify(update.summary, null, 4));
  }
});

var pathToRepo = __dirname + '/../../../git/platformml/ml';
git(pathToRepo).pull(function(err, update) {
  console.log("Pulled from ml");
  if(err) {
    console.log("ERROR: " + JSON.stringify(err, null, 4));
  } else {
    console.log("UPDATE: " + JSON.stringify(update.summary, null, 4));
  }
});

var pathToRepo = __dirname + '/../../../git/platformml/ml-scheduler';
git(pathToRepo).pull(function(err, update) {
  console.log("Pulled from ml-scheduler");
  if(err) {
    console.log("ERROR: " + JSON.stringify(err, null, 4));
  } else {
    console.log("UPDATE: " + JSON.stringify(update.summary, null, 4));
  }
});
